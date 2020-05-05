import React, {useEffect, useState} from "react";
import './FormControls.less';
import Select, {ValueType} from "react-select";
import {TextField} from "@material-ui/core";
import {myOption} from "../../../helpers/types";


interface IInput {
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
    options: string[]
    getCurrentModel?: (name: string) => void
    handleSelect?: (values: string, name: string) => void
}

const FormControl = ({name, label, ...props}: any) => {
    return (
        <div className='field-wrapper'>
            <label htmlFor={name}>{label}</label>
            {props.children}
            {
                props.error[name] && <span>error {name}</span>
            }
        </div>
    )
};

export const MyInput = (props: IInput) => {
    const {register, name, ...restProps} = props;
    return (
        <FormControl {...props}>
            <TextField size={'small'} inputRef={register} variant="outlined" id="outlined-basic"
                       label={restProps.label} name={name} autoComplete={'off'}/>
        </FormControl>)
};

export const MySelect = (props: ISelect) => {
    const {register, getCurrentModel, handleSelect, name, ...restProps} = props;
    const [values, setReactSelect] = useState<myOption | null>(
        null,
    );
    const handleChange = (obj: ValueType<myOption>) => {
        const value = (obj as myOption).value
        getCurrentModel?.(value);
        handleSelect?.(value, name)
        setReactSelect(obj as myOption)
    }
    useEffect(() => {
        register({name: name});
    }, [])

    useEffect(() => {
        setReactSelect(null)
    }, [restProps.options]);
    const options = restProps.options.map((op) => ({value: op, label: op}))
    return <FormControl {...props}>
        <Select
            className="reactSelect"
            name={name}
            placeholder={restProps.label}
            value={values}
            options={options}
            onChange={handleChange}
            isSearchable={false}
        />
    </FormControl>
};

