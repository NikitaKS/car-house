import React, {FC} from 'react';
import './registerCompany.less'
import RegisterCompanyForm from "../ReactHookForms/registerCompanyForm";
import {connect} from 'react-redux';
import {AppState} from "../../bll/store";
import {register} from "../../bll/formReducer/formThunkCreators";

type IMapDispatchToProps = {
    register: (name: string, email: string, phone: string) => void
}

const RegisterCompany: FC<IMapDispatchToProps> = (props) => {
    const handleRegister = (name: string, email: string, phone: string) => {
        props.register(name, email, phone)
    }
    return (
        <div className='register-wrapper'>
            <div className="container">
                <div className="register-form">
                    <RegisterCompanyForm handleRegister={handleRegister}/>
                </div>
            </div>

        </div>
    );
};

export default connect<{}, IMapDispatchToProps, {}, AppState>(null,
    {register})(RegisterCompany);
