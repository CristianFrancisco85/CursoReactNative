import { useState } from 'react';

export const useForm = <T extends Object> (formulario:T) => {

    const [form, setForm] = useState(formulario)

    const handleChange = <K extends Object>(campo:keyof T,value:K) => {
        setForm({
            ...form,
            [campo] : value
        })
    }

    return{
        ...form,
        form,
        handleChange
    }
}
