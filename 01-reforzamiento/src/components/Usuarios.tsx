import { useUsuarios } from '../Hooks/useUsuarios'

export const Usuarios = () => {

    const {usuarios,anteriorPagina,siguientePagina} = useUsuarios()

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>
                                <img src={usuario.avatar} alt={usuario.email} style={{width:50,borderRadius:100}} />
                            </td>
                            <td>{usuario.first_name}</td>
                            <td>{usuario.last_name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={anteriorPagina}>
                <span>Anteriores</span>
            </button>
            
            &nbsp;

            <button className="btn btn-primary" onClick={siguientePagina}>
                <span>Siguientes</span>
            </button>
        </>
    )
}
