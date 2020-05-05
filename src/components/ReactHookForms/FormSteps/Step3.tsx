import React from "react";
import {useForm} from "react-hook-form";
import {FC} from "react";
import {MySelect, MyInput} from "../FormControls/FormControls";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

type FormData = {
    currency: string,
};

interface IProps {
    currency: string[]
    setFormData: (values: FormData) => void
}

const Step3: FC<RouteComponentProps & IProps> = (props) => {
    const {register, handleSubmit, errors, setValue} = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        props.setFormData(data)
        props.history.push("./finalStep");
    });
    const handleSelect = (value: string, name: string) => {
        setValue(name, value)
        console.log(value)
    }

    return (
        <div className='request-form-wrapper'>
            <form onSubmit={onSubmit} className={'form-in'}>
                <MySelect options={props.currency} name={'currency'} handleSelect={handleSelect}
                          register={register({required: true})}
                          error={errors} label={'Бюджет'}/>
                <button className='btn-next' type="submit">next</button>
            </form>
        </div>
    );
};
export default withRouter(Step3);



