import React from "react";
import PropTypes from 'prop-types';

import "./FormCheckbox.scss";

//Add Icon later: https://codepen.io/fatmali/pen/aboNdra

export function FormCheckbox({ 
    label, name, value, onChange 
}) {
    const fieldId = `id_${name}`;

    return (
        <div className="checkboxFieldWrapper">
            <label htmlFor={fieldId}>
                <input
                    type="checkbox"
                    id={fieldId}
                    name={name}
                    checked={value}
                    onChange={onChange}
                />
                <span className="labelText">
                    {label}
                </span>
            </label>
        </div>
    )
}

FormCheckbox.defaultProps = {
    value: false,
    onChange: () => {},
};
  
FormCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func,
};