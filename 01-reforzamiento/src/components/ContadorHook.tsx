import { useState } from "react"
import { useCounter } from '../Hooks/useCounter';


export const ContadorHook = () => {

    const {contador,sumar} = useCounter(20)


    return (
        <>
            <h3>Contador Hook <small>{contador}</small></h3>
            <button className="btn btn-primary" onClick={()=>sumar(-1)}>-</button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=>sumar(+1)}>+</button>
        </>
    )
}
