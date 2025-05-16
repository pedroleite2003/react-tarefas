import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Login from "../pages/Login";
import Pagina404 from "../pages/Pagina404";
import Tarefa from "../components/Tarefa";

const Rotas = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Pagina404/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Rotas;