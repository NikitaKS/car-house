import React, {FC, useEffect, useState} from 'react';
import './Header.less';
import {NavLink} from "react-router-dom";

const Header: FC = () => {
    const [mobileMenu, setShowMenu] = useState(false);
    // const [width, setWidth] = useState(window.innerWidth);
    let showMenu = () => {
        mobileMenu ? setShowMenu(false) : setShowMenu(true);
    }
    let updateDimensions = () => {
        // setWidth(window.innerWidth);
        if (window.innerWidth > 991) {
            setShowMenu(false)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        }
    }, [])

    let buttonMenu = mobileMenu ? 'buttonMenu open' : 'buttonMenu';
    let menu = mobileMenu ? 'menu active' : 'menu';
    return (
        <header id="header">
            <div className="container">
                <div className="in">
                    <div className="left">
                        <a className='site-logo' href="/">logo</a>
                    </div>
                    <div className="right">
                        <div onClick={showMenu} className={buttonMenu}>
                            <div className={'lineMenu half start'}></div>
                            <div className={'lineMenu'}></div>
                            <div className={'lineMenu half end'}></div>
                        </div>
                        <div className={menu}>
                            <ul>
                                <li>
                                    <NavLink to={'/request/step1'}>Подобрать автомобиль</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/faq'}> Как все работает</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/register'}>Регистрация компании</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/checkcompany'}>Проверить компанию</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
