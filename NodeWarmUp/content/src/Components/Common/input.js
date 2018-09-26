import * as React from "react";


export const labelBoldStyle = {
    fontWeight: 500
}

export const Input = (props) => {
    return (
        <div className="form-group">
            <label style={props.labelStyle} htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type={props.type} required
                    name={props.name}
                    className={
                        props.error ?
                            (props.className ?
                                props.className + "form-control is-invalid" :
                                "form-control is-invalid") :
                            (props.className ?
                                props.className + " form-control" :
                                "form-control")
                    }
                    onKeyDown={props.onKeyPress}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChangeInput(props)}
                    style={props.style}
                />
                <div className="invalid-feedback small">{props.error}</div>
            </div>

        </div>
    );
}

const onChangeInput = (props) => (e) => {
    props.onChange(e.target.name, e.target.value);
}