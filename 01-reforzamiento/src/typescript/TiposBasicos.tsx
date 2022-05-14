
export const TiposBasicos = () => {

    const nombre: string = "Cristian"
    const edad: number = 21
    const estaActivo:boolean = true
    
    const poderes:string[] = ["Volar", "Rayos X"]
    

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre},{edad},{estaActivo? "Si":"No"}
            <br></br>
            {poderes.join(", ")}
        </>
    )
}
