import './Menu.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export function AppMenu() {

    const [isActive, setIsActive] = useState(false);

    const handleMenuBtnClick = () => {

        setIsActive(current => !current)

    }

    return (
        <header>
            <div onClick={handleMenuBtnClick} className="menu-btn">
                <span className="menu-btn__burguer" data-open={isActive}></span>
            </div>

            <nav className="nav" data-open={isActive}>
            <ul className="menu-nav" data-open={isActive}>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/'>
                        Home
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Calendario'>
                        Calendário
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/QuemSomos'>
                        Quem Somos?
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Ajudar'>
                        Como Ajudar?
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Cadastro'>
                        Cadastro
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Blog'>
                        Blog
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Lojinha'>
                        Lojinha
                    </Link>
                </li>
                <li className="menu-nav__item" data-open={isActive}>
                    <Link className="menu-nav__link" to='/Doe'>
                        Doe
                    </Link>
                </li>
                
            </ul>
            </nav>

        </header>
    )
}