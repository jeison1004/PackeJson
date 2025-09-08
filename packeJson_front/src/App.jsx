import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"


function App() {

  return (
     
    <BrowserRouter>
    <div class="text-center "><p class="bg-amber-900 text-white p-1">Si tu compra supera los 40$ tu envio sera gratis</p></div>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
