import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Registrarse from "./pages/Registrarse"
import Login_Admin from "./pages/Login_Admin"
import Detalles from "./pages/CatalogoFiltrado"
import DetallesProducto from "./pages/DetallesProducto"


function App() {

  return (
     
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registrarse" element={<Registrarse/>}/>
        <Route path="/admin" element={<Login_Admin/>}/>
        <Route path="/catalogofiltrado" element={<Detalles/>}/>  {/*Esta ruta va a recibir algo */}
        <Route path="/detallesproducto" element={<DetallesProducto/>}/>  {/*Esta ruta va a recibir algo */}
        
      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
