import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"


function App() {

  return (
     
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
