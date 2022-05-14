import { useState } from "react"


export const Contador = () => {

    const [contador, setContador] = useState(0)


    return (
        <>
            <h3>Contador <small>{contador}</small></h3>
            <button className="btn btn-primary" onClick={()=>setContador(contador=>contador-1)}>-</button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=>setContador(contador=>contador+1)}>+</button>
        </>
    )
}
