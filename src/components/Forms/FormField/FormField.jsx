import React from "react";
import PropTypes from 'prop-types';

import "./FormField.scss";

//Add Icon later: https://codepen.io/fatmali/pen/aboNdra

export function FormField({ 
    label, name, type, value, onChange 
}) {

    const fieldId = `id_${name}`;
    const hasValue = Boolean(value.length);

    switch (type) {
        case "textarea":
            return (
                <div className="formFieldWrapper">
                    <label htmlFor={fieldId}>
                        <textarea
                            type={type}
                            className="input"
                            id={fieldId}
                            name={name}
                            value={value}
                            data-hasvalue={hasValue}
                            onChange={onChange}
                        />
                        <span className="labelText">
                            {label}
                        </span>
                    </label>
                </div>
            )
            break;
        default:
            return (
                <div className="formFieldWrapper">
                    <label htmlFor={fieldId}>
                        <input
                            type={type}
                            className="input"
                            id={fieldId}
                            name={name}
                            value={value}
                            data-hasvalue={hasValue}
                            onChange={onChange}
                        />
                        <span className="labelText">
                            {label}
                        </span>
                    </label>
                </div>
            )
            break;
    }
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
};
  
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};