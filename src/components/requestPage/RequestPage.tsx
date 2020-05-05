import React, {FC} from 'react';
import MainRequestFrom from "../ReactHookForms/MainRequestForm";
import './RequestPage.less'

interface IProps {
}

const RequestPage: FC<IProps> = (props) => {
    return (
        <div className='request-page-wrapper'>
            <div className="container">
                <div className='request-in'>
                    <div className="left">
                        <div className="title">Подобрать Авто в Украине</div>
                        <MainRequestFrom />
                    </div>
                    <div className="right">
                        <div className="title">
                            <p>Найдите авто,<br/></p>
                            <span>потратив всего пару минут</span>
                        </div>
                        <div className="info">INFO</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestPage;
