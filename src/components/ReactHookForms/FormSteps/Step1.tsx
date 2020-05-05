import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {MyInput, MySelect} from "../FormControls/FormControls";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import './Steps.less';

type FormData = {
    carName: string
    carModel: string
    yearFrom: string
    yearTo: string
    priceFrom: string,
    priceTo: string
};

interface IProps {
    carNames: string[]
    carModels: string[]
    yearFrom: string[]
    yearTo: string[]
    setFormData: (values: FormData) => void
    getCurrentModel: (carName: string) => void
}

const Step1: FC<RouteComponentProps & IProps> = (props) => {
    const {register, handleSubmit, errors, setValue} = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        props.setFormData(data)
        props.history.push("./step2");
    });
    const handleSelect = (value: string, name: string) => {
        setValue(name, value)
        console.log(value)
    }
    const [indexes, setIndexes] = useState<number[]>([]);
    const [counter, setCounter] = useState(0);

    const addCarField = () => {
        if (counter <= 2) {
            setIndexes(prevIndexes => [...prevIndexes, counter]);
            setCounter(prevCounter => prevCounter + 1);
        }
    };
    console.log('render')
    const removeCarField = (index: number) => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        // <div className='request-form-wrapper'>
        <>
            <form onSubmit={onSubmit} className={'steps-form'}>
                <div className={'grid-steps-form'}>
                    <MySelect options={props.carNames} name={'carName'}
                              getCurrentModel={props.getCurrentModel} handleSelect={handleSelect}
                              register={register({required: true})} error={errors} label={'Марка'}/>

                    <MySelect options={props.carModels} name={'carModel'}
                              register={register} error={errors} handleSelect={handleSelect} label={'Модель'}/>
                    <div className={'form-items-group'}>
                        <MySelect options={props.yearFrom} name={'yearFrom'}
                                  register={register} error={errors} handleSelect={handleSelect}
                                  label={'Год, от'}/>

                        <MySelect options={props.yearTo} name={'yearTo'}
                                  register={register({required: true})} error={errors}
                                  handleSelect={handleSelect} label={'Год, до'}/>
                    </div>
                    <div className={'form-items-group'}>
                        <MyInput name={'priceFrom'} register={register({required: true})}
                                 error={errors} label={'от'}/>
                        <MyInput name={'priceTo'} register={register({required: true})}
                                 error={errors} label={'до'}/>
                    </div>
                </div>

                {
                    indexes.map((item) => {
                        return (
                            <div className={'grid-steps-form'}>
                                <MySelect options={props.carNames} name={'carName'}
                                          getCurrentModel={props.getCurrentModel} handleSelect={handleSelect}
                                          register={register({required: true})} error={errors} label={'Марка'}/>

                                <MySelect options={props.carModels} name={'carModel'}
                                          register={register} error={errors} handleSelect={handleSelect}
                                          label={'Модель'}/>
                                <div className={'form-items-group'}>
                                    <MySelect options={props.yearFrom} name={'yearFrom'}
                                              register={register} error={errors} handleSelect={handleSelect}
                                              label={'Год, от'}/>

                                    <MySelect options={props.yearTo} name={'yearTo'}
                                              register={register({required: true})} error={errors}
                                              handleSelect={handleSelect} label={'Год, до'}/>
                                </div>
                                <div className={'form-items-group'}>
                                    <MyInput name={'priceFrom'} register={register({required: true})}
                                             error={errors} label={'от'}/>
                                    <MyInput name={'priceTo'} register={register({required: true})}
                                             error={errors} label={'до'}/>
                                </div>
                            </div>
                        )
                    })
                }
                <span onClick={addCarField}> + Еще авто</span>
                <button className='btn-next' type="submit">next</button>
            </form>
        </>
        // </div>
    );
};
export default withRouter(Step1);



