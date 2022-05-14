import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {numero,numeroAnterior,limpiar,armarNumero,positivoNegativo,btnDelete,btnDividir,btnMultiplicar,btnRestar,btnSumar,btnIgual} = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
                numeroAnterior!=='0' && (   
                    <Text style={styles.resultadoAux}>{numeroAnterior}</Text>
                )
            }
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            <View style={styles.fila}>

                <BotonCalc texto="C" color="#9B9B9B" action={limpiar}></BotonCalc>
                <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}></BotonCalc>
                <BotonCalc texto="del" color="#9B9B9B" action={btnDelete}></BotonCalc>
                <BotonCalc texto="/" color="#FF9427" action={btnDividir}></BotonCalc>

            </View>

            <View style={styles.fila}>

                <BotonCalc texto="7" action={armarNumero}></BotonCalc>
                <BotonCalc texto="8" action={armarNumero}></BotonCalc>
                <BotonCalc texto="9" action={armarNumero}></BotonCalc>
                <BotonCalc texto="X" color="#FF9427" action={btnMultiplicar}></BotonCalc>
                
            </View>

            <View style={styles.fila}>

                <BotonCalc texto="4" action={armarNumero}></BotonCalc>
                <BotonCalc texto="5" action={armarNumero}></BotonCalc>
                <BotonCalc texto="6" action={armarNumero}></BotonCalc>
                <BotonCalc texto="-" color="#FF9427" action={btnRestar}></BotonCalc>
                
            </View>

            <View style={styles.fila}>

                <BotonCalc texto="1" action={armarNumero} ></BotonCalc>
                <BotonCalc texto="2" action={armarNumero}></BotonCalc>
                <BotonCalc texto="3" action={armarNumero}></BotonCalc>
                <BotonCalc texto="+" color="#FF9427" action={btnSumar}></BotonCalc>
                
            </View>

            <View style={styles.fila}>

                <BotonCalc texto="0" wide action={armarNumero}></BotonCalc>
                <BotonCalc texto="." action={armarNumero}></BotonCalc>
                <BotonCalc texto="=" action={btnIgual}></BotonCalc>
                
            </View>


        </View>
    )
}
