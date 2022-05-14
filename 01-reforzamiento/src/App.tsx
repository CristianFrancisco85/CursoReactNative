//import { Funciones } from "./typescript/Funciones"
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
//import { TiposBasicos } from "./typescript/TiposBasicos"
//import { Contador } from "./components/Contador"
//import { ContadorHook } from "./components/ContadorHook"
//import { Login } from "./components/Login"
//import { Usuarios } from "./components/Usuarios"

import { Formularios } from "./components/Formularios"


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS en React</h1>
      <hr></hr>
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales></ObjetosLiterales>*/}
      {/*<Funciones></Funciones>*/}
      {/*<Contador></Contador>*/}
      {/*<ContadorHook></ContadorHook>*/}
      {/*<Login></Login>*/}
      {/*<Usuarios></Usuarios>*/}
      <Formularios></Formularios>

    </div>
  )
}

export default App