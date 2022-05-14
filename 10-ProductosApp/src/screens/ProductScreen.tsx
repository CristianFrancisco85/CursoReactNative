import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { ProductsStackParamList } from '../navigator/ProductsNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../contexts/ProductsContext/ProductsContext';
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react';

interface Props extends StackScreenProps<ProductsStackParamList,'ProductScreen'> {}

export const ProductScreen = (props:Props) => {

    const {route,navigation} = props
    const {id='',name = ''} = route.params
    const {categories} = useCategories()
    const {loadProductById,addProduct,updateProduct,uploadImage} = useContext(ProductsContext)
    const [ tempUri, setTempUri ] = useState<string>()

    const {_id,categoriaId,nombre,img,form,onChange,setFormValue} = useForm({
        _id:id,
        categoriaId:'',
        nombre:name,
        img:'',
    })

    useEffect(() => {
        navigation.setOptions({
            title: ( nombre ) ? nombre : 'Sin nombre de producto'
        });
    }, [nombre])

    useEffect(() => {
        loadProduct();
    }, [])


    const loadProduct = async() => {
        if ( id.length === 0 ) return;
        const product = await loadProductById( id );
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre
        })
    }

    const saveOrUpdate = async() => {
        if( id.length > 0 ) {            
            updateProduct( categoriaId, nombre, id );
        } 
        else {
            const tempCategoriaId = categoriaId || categories[0]._id;
            const newProduct = await addProduct(tempCategoriaId, nombre );
            onChange( newProduct._id, '_id' );
        }
    }

    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if ( resp.didCancel ) return;
            if( !resp.assets![0] ) return;

            setTempUri( resp.assets![0].uri);
            uploadImage( resp, _id );
        });
    }

    const takePhotoFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if ( resp.didCancel ) return;
            if( !resp.assets![0] ) return;

            setTempUri( resp.assets![0].uri );
            uploadImage( resp, _id );
        });
    }


    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}> Nombre del Producto</Text>
                <TextInput 
                    placeholder='Producto'
                    style={styles.txtInput}
                    value={nombre}
                    onChangeText={(text) => onChange(text,'nombre')}
                />
                <Text style={styles.label}> Selecciona Categoria</Text>

                <Picker
                    selectedValue={categoriaId}
                    style={styles.picker}
                    onValueChange={ itemValue => onChange(itemValue,'categoriaId') }
                    >  
                    {categories.map(category => (
                        <Picker.Item label={category.nombre} value={category._id} key={category._id} />
                    ))}
                </Picker>

                <Button
                    title='Guardar'
                    onPress={ saveOrUpdate }
                    color='#5856D6'
                />

                {
                    ( _id.length > 0) && (
                        <View style={{ flexDirection: 'row', justifyContent:'center', marginTop: 10 }}>
                            <Button 
                                title="Cámara"
                                onPress={ takePhoto }
                                color="#5856D6"
                            />  

                            <View style={{ width: 10 }} />

                            <Button 
                                title="Galería"
                                onPress={ takePhotoFromGallery }
                                color="#5856D6"
                            />
                        </View>
                    )
                }

                {
                    (img.length > 0 && !tempUri) && (
                        <Image 
                            source={{ uri: img }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                            }}
                        />
                    )
                }
                {/* TODO: Mostrar imagen temporal */}
                {
                    ( tempUri ) && (
                        <Image 
                            source={{ uri: tempUri }}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                height: 300
                            }}
                        />
                    )
                }

                <Text style={styles.label}> 
                    {JSON.stringify(form,null,2)}
                </Text>

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        marginHorizontal:20,
    },
    label:{
        fontSize:18,
        color:'black',
    },
    txtInput:{
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:20,
        borderColor:'rgba(0,0,0,0.3)',
        height:45,
        marginVertical:10,
        color:'black',
    },
    picker:{
        color:'black',
    }
});