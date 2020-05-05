import React, {FC} from "react";
import './StepsComponent.less';

const StepsComponent: FC = React.memo(() => {
    return (
        <div className='steps-wrapper'>
            <div className='container'>
                <h2>ХОТИТЕ БЫСТРО НАЙТИ И ЗАКЗАТЬ АВТО?</h2>
                <div className='steps-in'>
                    <div className='step-item'>
                        Отправьте небольшую форму запроса, указав в ней перечень требуемых
                        автозапчастей и информацию о вашем авто.
                    </div>
                    <div className='step-item'>
                        После отправки запроса вы почти сразу получите ответы с
                        предложениями цены от продавцов запчастей и автомагазинов,
                        которые у нас зарегистрированы.
                    </div>
                    <div className='step-item'>
                        Выберите из полученных предложений самое выгодное!
                    </div>
                </div>
            </div>
        </div>
    )
});
export default StepsComponent;
