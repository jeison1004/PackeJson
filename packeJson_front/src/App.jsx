import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Registrarse from "./pages/Registrarse"
import Login_Admin from "./pages/Login_Admin"


function App() {

  return (
     
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registrarse" element={<Registrarse/>}/>
        <Route path="/admin" element={<Login_Admin/>}/>
      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
