import { useRef, useState } from 'react';

enum Operaciones{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION
}

export const useCalculadora = () => {

    const [numero,setNumero] = useState('0')
    const [numeroAnterior,setNumeroAnteriror] = useState('0')

    const ultimaOperacion = useRef<Operaciones>()


    const limpiar = () => {
        setNumero('0')
        setNumeroAnteriror('0')
    }

    const armarNumero = (numeroTexto:string) => {
        //No aceptar doble punto decimal
        if(numero.includes('.') && numeroTexto==='.'){
            return
        }
        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto==='.'){
                setNumero(numero+numeroTexto)
            }
            else if(numeroTexto==='0' && numero.includes('.') ){
                setNumero(numero+numeroTexto)
            }
            else if(numeroTexto!='0' && !numero.includes('.')){
                setNumero(numeroTexto)
            }
            else if(numeroTexto==='0' && !numero.includes('.')){
                setNumero(numero)
            }
            else{
                setNumero(numero+numeroTexto)
            }
        }
        else{
            setNumero(numero+numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setNumero(numero.replace('-',''))
        }else{
            setNumero('-'+numero)
        }
    }

    const btnDelete = () => {
        if(numero.length>1){
            if(numero.length===2 && numero.startsWith('-')){
                setNumero('0')
            }
            else{
                setNumero(numero.slice(0,-1))
            }
        }
        else{
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {
        if(numero.endsWith('.')){
            setNumeroAnteriror(numero.slice(0,-1))
        }
        else{
            setNumeroAnteriror(numero)
        }
        setNumero('0')
    }

    const btnDividir = () => {
        ultimaOperacion.current = Operaciones.DIVISION
        cambiarNumPorAnterior()
    }

    const btnMultiplicar = () => {
        ultimaOperacion.current = Operaciones.MULTIPLICACION
        cambiarNumPorAnterior()
    }

    const btnRestar = () => {
        ultimaOperacion.current = Operaciones.RESTA
        cambiarNumPorAnterior()
    }

    const btnSumar = () => {
        ultimaOperacion.current = Operaciones.SUMA
        cambiarNumPorAnterior()
    }

    const btnIgual = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch(ultimaOperacion.current){
            case Operaciones.SUMA:
                setNumero((num2+num1).toString())
                break
            case Operaciones.RESTA:
                setNumero((num2-num1).toString())
                break
            case Operaciones.MULTIPLICACION:
                setNumero((num2*num1).toString())
                break
            case Operaciones.DIVISION:
                setNumero((num2/num1).toString())
                break
        }
        setNumeroAnteriror('0')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        btnIgual
    }


}
