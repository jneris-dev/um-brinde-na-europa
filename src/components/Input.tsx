import { FormEvent, useRef, useState } from 'react';
import { cpf } from 'cpf-cnpj-validator';
import { Eye, EyeClosed } from 'phosphor-react';

import { InputProps } from "../interface/interfaces";

export function Input(props: InputProps) {
    const [validate, setValidate] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleValidate(event: FormEvent) {
        event.preventDefault();
        const value = (event.target as HTMLInputElement).value;

        if (props.id === 'cpf')
            cpf.isValid(value) ? setValidate(false) : setValidate(true);

        if (props.id === 'email')
            /\S+@\S+\.\S+/.test(value) ? setValidate(false) : setValidate(true);

        if (props.id === 'confirm-senha')
            props.data?.password !== value ? setValidate(true) : setValidate(false);
    }

    return (
        <>
            <label className={`text-white text-sm ${props.only && 'sr-only'}`}>
                {props.label}
            </label>
            {props.type !== 'select' ?
                <div className="relative">
                    <input
                        ref={inputRef}
                        id={props.id}
                        type={!showPass ? props.type : 'text'}
                        value={props.id === 'cpf' ? cpf.format(props.value) : props.value}
                        onChange={event => props.setValue(event.target.value)}
                        onBlur={event => handleValidate(event)}
                        placeholder={props.placeholder}
                        required={props.required}
                        className={`text-white border-t-0 pl-0 border-l-0 border-r-0 border-b-2 bg-transparent w-full placeholder:text-white
                        focus:outline-none focus:border-b-main-500 focus:ring-0 ${validate ? 'border-red-500' : 'border-white'}`}
                    />
                    {props.type === 'password' &&
                        <div className="absolute right-2 top-2 z-10" onClick={() => setShowPass(!showPass)}>
                            {!showPass ?
                                <Eye size={20} weight="regular" className="text-white cursor-pointer" />
                                :
                                <EyeClosed size={20} weight="regular" className="text-white cursor-pointer" />
                            }
                        </div>
                    }
                </div>
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