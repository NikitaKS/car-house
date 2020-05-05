import React from "react";
import {useForm} from "react-hook-form";
import {FC} from "react";
import {RouteComponentProps} from "react-router";
import {MyInput} from "./FormControls/FormControls";

type FormData = {
    fullName: string
    email: string
    phone: string
};

interface IProps {
    handleRegister: (name: string, email: string, phone: string) => void
}

const RegisterCompanyForm: FC<IProps> = (props) => {
    const {register, handleSubmit, errors, setValue} = useForm<FormData>();
    const onSubmit = handleSubmit(({fullName, phone, email}) => {
        props.handleRegister(fullName, email, phone)
    });

    return (
        <div className='request-form-wrapper'>
            <form onSubmit={onSubmit} className={'form-in'}>
                <MyInput name={'fullName'} register={register({required: true})}
                         error={errors} label={'ФИО'}/>
                <MyInput name={'email'} register={register({required: true})}
                         error={errors} label={'E-mail'}/>
                <MyInput name={'phone'} register={register({required: true})}
                         error={errors} label={'Phone'}/>
                <button className='btn-next' type="submit">next</button>
            </form>
        </div>
    );
};
export default RegisterCompanyForm;



