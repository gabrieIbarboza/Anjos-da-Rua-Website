import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <DefaultPage>

            <h1>Escolha Seu Cadastro</h1>
            <ul>
                <li>
                    <Link to='/Cadastro/Voluntario'>Voluntário</Link>
                </li>
                <li>
                    <Link to='/Cadastro/Familia'>Grupo Familiar</Link>
                </li>
            </ul>

        </DefaultPage>
    )
}