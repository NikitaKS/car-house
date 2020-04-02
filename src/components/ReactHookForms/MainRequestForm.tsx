import React from "react";
import {useForm} from "react-hook-form";
import {FC} from "react";
import './MainRequestForm.less';
import {Input, Select} from "./FormControls/FormControls";
import {ICarName} from "../../helpers/types";

type FormData = {
    carName: string;
};

interface IProps {
    carNames: ICarName[]
}

const MainRequestFrom: FC<IProps> = React.memo((props) => {
    const {register, handleSubmit, errors} = useForm<FormData>();
    const onSubmit = (data: any) => {
        console.log(data)
    };
    return (
        <div className='request-form-wrapper'>
            <form onSubmit={handleSubmit(onSubmit)} className={'form-in'}>
                <Input placeholder='Выберите марку' name='carName'
                       label='Модель' error={errors.carName}
                       register={register(
                           {required: true})}/>
                <Select options={props.carNames} name={'carSelect'} register={register(
                    {required: true})} error={null} label={'Марка'}/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
});
export default MainRequestFrom;



