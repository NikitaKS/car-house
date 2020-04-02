import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import './SearchComponent.less';

const SearchComponent: FC = React.memo(() => {
    return (
        <div className='searchWrapper'>
            <div className="container">
                <div className='search-in'>
                    <h3>Все компании по пригону авто из США в одном месте</h3>
                    <div className='input-wrapper'>
                        <input type="text" placeholder={'Введите марку авто'}/>
                        <button><NavLink to={'/request'}>Заказать</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SearchComponent;

