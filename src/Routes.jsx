import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Calendar } from "./pages/Calendar";
import { Donate } from "./pages/Donate";
import { ECommerce } from "./pages/ECommerce";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { HowTo } from "./pages/HowTo";
import { Register } from "./pages/Register";
import { Beneficiary } from "./pages/Register/Beneficiary";
import { Volunteer } from "./pages/Register/Volunteer";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home />}></Route> //404
                <Route path="/" element={<Home />}></Route>
                <Route path="/Calendario" element={<Calendar />}></Route>
                <Route path="/QuemSomos" element={<History />}></Route>
                <Route path="/Ajudar" element={<HowTo />}></Route>
                <Route path="/Cadastro" element={<Register />}></Route>
                <Route path="/Cadastro/Voluntario" element={<Volunteer />}></Route>
                <Route path="/Cadastro/Familia" element={<Beneficiary />}></Route>
                <Route path="/Blog" element={<Blog />}></Route>
                <Route path="/Lojinha" element={<ECommerce />}></Route>
                <Route path="/Doe" element={<Donate />}></Route>
            </Routes>
        </Router>
    )
}