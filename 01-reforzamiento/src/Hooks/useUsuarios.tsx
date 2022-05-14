import { useRef, useState, useEffect } from 'react';
import { reqResAPi } from '../api/reqRes';
import { IReqRes, IUsuario } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<IUsuario[]>([])
    const pageRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {
        await reqResAPi.get<IReqRes>('/users',
        {
            params:{
                page:pageRef.current
            }
        })
            .then(res =>{
                if(res.data.data.length > 0){
                    setUsuarios(res.data.data)
                }
                else{
                    console.log('No hay mas usuarios')
                    if(pageRef.current > 1){
                        pageRef.current = pageRef.current - 1
                    }
                    else{
                        pageRef.current = 1
                    }
                }
            })
            .catch(err => console.log(err))
    }

    const siguientePagina = () => {
        pageRef.current++
        cargarUsuarios()
    }

    const anteriorPagina = () => {
        pageRef.current--
        cargarUsuarios()
    }

    return {
        usuarios,
        anteriorPagina,
        siguientePagina
    }
}
