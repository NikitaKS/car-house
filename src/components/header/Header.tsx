import React, {FC} from 'react';
import './Header.less';
import {NavLink} from "react-router-dom";

const Header: FC = React.memo(() => {
    return (
        <header id="header">
            <div className="container">
                <div className="in">
                    <div className="left">
                        <a className='site-logo' href="/">logo</a>
                    </div>
                    <div className="right">
                        <div className="menu">
                            <div className="menu-in">
                                <ul>
                                    <NavLink to={'/request'}>
                                        <li>Подобрать автомобиль</li>
                                    </NavLink>
                                    <NavLink to={'/faq'}>
                                        <li>Как все работает</li>
                                    </NavLink>
                                    <NavLink to={'register'}>
                                        <li>Регистрация компании</li>
                                    </NavLink>
                                    <NavLink to={'/checkcompany'}>
                                        <li>Проверить компанию</li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
});

export default Header;
