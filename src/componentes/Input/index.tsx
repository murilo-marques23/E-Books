import { HtmlHTMLAttributes, forwardRef } from "react";


export interface iPropsInput extends React.InputHTMLAttributes<HtmlHTMLAttributes> {
    variant?: string;
    error: string;
}

const Input = forwardRef<HTMLInputElement, iPropsInput>(
({ variant, error, } ) => 

)