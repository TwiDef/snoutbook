import React from "react";
import classes from './FormsControl.module.css';

const FormsControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

/* Textarea */
export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

/* Input */
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
}