import { useForm } from '../Hooks/useForm';

export const Formularios = () => {

    const {formulario,email,password,handleChange} = useForm({
        email : 'test@gmail.com',
        password : '123456'
    })

    return (
        <>
            <h3>Formularios</h3>
            <input type="text" 
            className="form-control" 
            placeholder="Email" 
            value={email} 
            onChange={({target})=> handleChange(target.value,'email')}/>

            <input type="text" 
            className="form-control mt-2 mb-2" 
            placeholder="Password"  
            value={password} 
            onChange={({target})=> handleChange(target.value,'password')}/>

            <code>
                <pre>{JSON.stringify(formulario,null,2)}</pre>
            </code>
        </>
    )
}
