import { InputHTMLAttributes } from "react";

interface ButtonProps {
    link: string;
    label: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value: string;
    id: string;
    label?: string;
    placeholder: string;
    alert?: string;
    only: boolean;
    options?: string[];
    setValue(value: string): void;
}

interface Data {
    name: string;
    email: string;
    tax_id: string;
    password: string;
    password_confirmation: string;
    company: string;
    segment: string;
}

export type { ButtonProps, InputProps, Data }