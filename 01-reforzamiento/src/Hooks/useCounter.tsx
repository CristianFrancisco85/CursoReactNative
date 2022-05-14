import { useState } from "react"


export const useCounter = (initial:number = 10) => {

    const [contador, setContador] = useState(initial)

    const sumar = (val:number) => {
        setContador(contador + val)
    }
    
    return {
        contador,
        sumar
    }
}
