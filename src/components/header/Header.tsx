import React, {FC} from 'react';
import './Header.less';

const Header: FC = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="in">
                    <div className="left">
                        <a className='site-logo' href="#">logo</a>
                    </div>
                    <div className="right">
                        <div className="menu">
                            <div className="menu-in">
                                <ul>
                                    <li>Подобрать автомобиль</li>
                                    <li>Как все работает</li>
                                    <li>Регистрация компании</li>
                                    <li>Проверить компанию</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
