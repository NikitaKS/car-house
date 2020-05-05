import React from "react";
import {useForm} from "react-hook-form";
import {FC} from "react";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {MyInput} from "../FormControls/FormControls";

type FormData = {
    fullName: string
    email: string
    number: string
    city: string
    information: string
};

interface IProps {
    data: {},
    setFormData: (values: FormData) => void
    sendData: () => void
}

const FinalStep: FC<RouteComponentProps & IProps> = (props) => {
    const {register, handleSubmit, errors, reset} = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        props.setFormData(data)
        reset()
        props.sendData()
        setTimeout(() => {
            props.history.push('/')
        }, 1000)
    });

    return (
        <div className='request-form-wrapper'>
            <form onSubmit={onSubmit} className={'form-in'}>
                <MyInput name={'city'} register={register({required: true})}
                         error={errors} label={'Ваш Город'}/>
                <MyInput name={'email'} register={register({required: true})}
                         error={errors} label={'e-mail'}/>
                <MyInput name={'number'} register={register({required: true})}
                         error={errors} label={'Телефон'}/>
                <MyInput name={'fullName'} register={register({required: true})}
                         error={errors} label={'Ваше Имя'}/>
                <MyInput label={'Комментарий'} error={errors} name={'information'}
                         register={register({required: true})}/>
                <button className='btn-next' type="submit">submit</button>
            </form>
        </div>
    );
};
export default withRouter(FinalStep);



