import React from "react";
import './FormControls.less';
import {ICarName} from "../../../helpers/types";


interface IInput {
    placeholder?: string
    name: string
    register: any,
    error: any,
    label: string
}

interface ISelect {
    name: string
    register: any,
    error: any,
    label: string
    options: ICarName[]
}

const FormControl = ({name, label, ...props}: any) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            {props.children}
            {
                props.error && <span>error</span>
            }
        </>
    )
};

export const Input = (props: IInput) => {
    const {register, ...restProps} = props;
    return <FormControl {...props}><input ref={register} {...restProps} /></FormControl>
};
export const Select = (props: ISelect) => {
    const {register, options, ...restProps} = props;
    let option = options.map((option, index) => {
        return <option value={option.name} key={index}>{option.name}</option>
    });
    return <FormControl {...props}>
        <select ref={register} {...restProps}>
            <option hidden={true} selected={true} disabled>{restProps.label}</option>
            {option}
        </select>
    </FormControl>
};

