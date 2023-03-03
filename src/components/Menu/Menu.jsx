import './Menu.scss';

import { Link } from 'react-router-dom';

export function AppMenu() {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Calendario'>Calendário</Link>
                </li>
                <li>
                    <Link to='/QuemSomos'>Quem Somos?</Link>
                </li>
                <li>
                    <Link to='/Ajudar'>Como Ajudar?</Link>
                </li>
                <li>
                    <Link to='/Cadastro'>Cadastro</Link>
                </li>
                <li>
                    <Link to='/Blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/Lojinha'>Lojinha</Link>
                </li>
                <li>
                    <Link to='/Doe'>Doe</Link>
                </li>
                
            </ul>

        </header>
    )
}