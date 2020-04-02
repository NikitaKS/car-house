import React, {FC, useEffect} from 'react';
import MainRequestFrom from "../ReactHookForms/MainRequestForm";
import './RequestPage.less'
import {compose} from "redux";
import {connect, useDispatch} from "react-redux";
import {AppState} from "../../bll/store";
import {getCarNames} from "../../bll/formReducer/formThunkCreators";
import {ICarName} from "../../helpers/types";

interface IProps {
    carNames:ICarName[]
}

const RequestPage: FC<IProps> = React.memo((props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCarNames());
    },[]);
    return (
        <div className='request-page-wrapper'>
            <div className="container">
                <div className='request-in'>
                    <div className="left">
                        <div className="title">Подобрать Авто в Украине</div>
                        <MainRequestFrom carNames={props.carNames}/>
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
});

interface Imstp {
    carNames: ICarName[]
}

let mstp = (state: AppState): Imstp => {
    return {
        carNames: state.formState.carNames
    }
};

export default compose(
    connect<Imstp, {}, {}, AppState>(mstp, {})
)(RequestPage);
