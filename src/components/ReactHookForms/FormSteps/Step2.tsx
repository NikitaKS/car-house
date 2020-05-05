import React from "react";
import {useForm} from "react-hook-form";
import {FC} from "react";
import {MySelect} from "../FormControls/FormControls";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type FormData = {
    engine: string
    transmission: string
    driving: string
    colors: string
};

interface IProps {
    setFormData: (values: FormData) => void
    engine: string[]
    transmission: string[]
    driving: string[]
    colors: string[]
}

const Step2: FC<RouteComponentProps & IProps> = (props) => {
    const {register, handleSubmit, errors, setValue} = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        props.setFormData(data)
        props.history.push("./step3");
    });
    const handleSelect = (value: string, name: string) => {
        setValue(name, value)
        console.log(value)
    }

    return (
        <>
            <form onSubmit={onSubmit} className={'steps-form'}>
                <MySelect options={props.engine} name={'engine'} handleSelect={handleSelect}
                          register={register({required: true})}
                          error={errors} label={'Тип топлива'}/>
                <MySelect options={props.transmission} name={'transmission'} handleSelect={handleSelect}
                          register={register({required: true})}
                          error={errors} label={'Трансмиссия'}/>
                <MySelect options={props.driving} name={'driving'} handleSelect={handleSelect}
                          register={register({required: true})}
                          error={errors} label={'Привод'}/>
                <MySelect options={props.colors} name={'colors'}
                          handleSelect={handleSelect}
                          register={register({required: true})}
                          error={errors} label={'Цвет'}/>
                <button className='btn-next' type="submit">next</button>
            </form>
        </>
    );
};
export default withRouter(Step2);



