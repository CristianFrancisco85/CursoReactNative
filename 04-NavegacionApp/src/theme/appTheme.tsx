import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        color: '#000',
        marginBottom: 10
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    botonGrandeTexto:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    },
    texto: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: 'flex-start',
    },
    menuItem: {
        flexDirection: 'row',
        fontSize: 20,
        color: '#000',
        marginVertical: 10,
    },
    
});

export const colores = {
    primary: '#5856D6',
    secondary: '#fff',
    background: '#fff',
    text: '#000',
    border: '#000',
    menu: '#000',
}
