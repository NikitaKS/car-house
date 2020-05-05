import React, {FC, useEffect, useMemo} from "react";
import './MainRequestForm.less';
import {addedValues, ICar, IYear} from "../../helpers/types";
import {Route} from "react-router-dom";
import Step1 from "./FormSteps/Step1";
import Step2 from "./FormSteps/Step2";
import Step3 from "./FormSteps/Step3";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppState} from "../../bll/store";
import {getCarNames, getYears, sendDataTC} from "../../bll/formReducer/formThunkCreators";
import FinalStep from "./FormSteps/FinalStep";
import {actions} from "../../bll/formReducer/formActionCreators";

interface IProps {

}

interface IMapStateToProps {
    cars: ICar[],
    years: IYear[]
    models: { name: string }[]
    data: {}
}

interface IMapDispatchToProps {
    getCarNames: () => void
    getYears: () => void
    getCurrentModel: (name: string) => void
    setFormData: (obj: addedValues) => void
    sendDataTC: () => void
}

const MainRequestFrom: FC<IProps & IMapStateToProps & IMapDispatchToProps> = (props) => {
    useEffect(() => {
        if (!props.cars.length) {
            props.getCarNames();
            props.getYears();
        }
    }, [props]);

    const sendData = () => {
        props.sendDataTC()
    }
    const carNames = useMemo(() => props.cars.map((c) => c.name), [props.cars]);
    const carModels = useMemo(() => props.models.map((c) => c.name), [props.models]);
    const yearFrom = useMemo(() => props.years.map((y) => y.year), [props.years]);
    const yearTo = useMemo(() => props.years.map((y) => y.year), [props.years]);
    const engine = ['Бензин', 'Газ/Бензин', 'Дизель', 'Гибрид', 'Электро'];
    const transmission = ['Ручная/Механника', 'Автомат', 'Типтрон', 'Вариатор', 'Робот'];
    const driving = ['Полный', 'Передний', 'Задний'];
    const colors = ['Серый', 'Белый', 'Чёрный', 'Голубой', 'Синий'];
    const currency = ['$', '€', '₴']
    return (
        <div className='request-form-wrapper'>
            <Route exact path="/request/step1" render={() =>
                <Step1 carNames={carNames} setFormData={props.setFormData}
                       getCurrentModel={(carName) => props.getCurrentModel(carName)}
                       carModels={carModels} yearFrom={yearFrom} yearTo={yearTo}
                />}
            />
            <Route path="/request/step2" render={() =>
                <Step2 engine={engine} transmission={transmission} setFormData={props.setFormData}
                       driving={driving} colors={colors}
                />}
            />
            <Route path="/request/step3" render={() =>
                <Step3 currency={currency} setFormData={props.setFormData}/>}
            />
            <Route path="/request/finalStep" render={() =>
                <FinalStep sendData={sendData} data={props.data}
                           setFormData={props.setFormData}/>} // data nado ili net?
            />
        </div>
    );
};
const mapStateToProps = (state: AppState): IMapStateToProps => {
    return {
        cars: state.formState.carNames,
        years: state.formState.years,
        models: state.formState.models,
        data: state.formState.data
    }
}
export default compose(
    connect<IMapStateToProps, IMapDispatchToProps, {}, AppState>(mapStateToProps, {
        getCarNames, getYears, getCurrentModel: actions.getCurrentModel, setFormData: actions.setFormData,
        sendDataTC
    })
)(MainRequestFrom);



