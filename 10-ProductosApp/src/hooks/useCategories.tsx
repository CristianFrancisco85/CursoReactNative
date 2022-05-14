import { useEffect, useState } from "react"
import cafeApi from "../api/cafeApi";
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';


export const useCategories = () => {

    const [categories, setCategories] = useState<Categoria[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        setLoading(true)
        setError(false)
        try {
            const { data } = await cafeApi.get<CategoriesResponse>('/categorias')
            setCategories(data.categorias)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    return { 
        categories, loading, error 
    }
}
