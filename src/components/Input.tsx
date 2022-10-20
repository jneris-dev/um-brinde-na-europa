import { FormEvent, useState } from 'react';
import { cpf } from 'cpf-cnpj-validator';

import { InputProps } from "../interface/interfaces";

export function Input(props: InputProps) {
    const [validate, setValidate] = useState(false);

    function handleValidate(event: FormEvent) {
        event.preventDefault();
        const value = (event.target as HTMLInputElement).value;

        if (props.id === 'cpf')
            cpf.isValid(value) ? setValidate(false) : setValidate(true);
    }

    return (
        <>
            <label className={`text-white text-sm ${props.only && 'sr-only'}`}>
                {props.label}
            </label>
            {props.type !== 'select' ?
                <input
                    id={props.id}
                    type={props.type}
                    value={props.id === 'cpf' ? cpf.format(props.value) : props.value}
                    onChange={event => props.setValue(event.target.value)}
                    onBlur={event => handleValidate(event)}
                    placeholder={props.placeholder}
                    className={`text-white border-t-0 pl-0 border-l-0 border-r-0 border-b-2 bg-transparent w-full placeholder:text-white
                        focus:outline-none focus:border-b-main-500 focus:ring-0 ${validate ? 'border-red-500' : 'border-white'}`}
                />
                :
                <select
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={event => props.setValue(event.target.value)}
                    className="text-white border-t-0 pl-0 border-l-0 border-r-0 border-b-2 bg-transparent w-full border-white focus:outline-none focus:border-b-main-500 focus:ring-0 placeholder:text-white"
                >
                    <option hidden>{props.placeholder}</option>
                    {props?.options?.map((option, key) => (
                        <option key={key} value={option} className="text-zinc-700">{option}</option>
                    ))}
                </select>
            }
            {validate && <span className="text-main-500 text-xs">{props.alert}</span>}
        </>
    );
}