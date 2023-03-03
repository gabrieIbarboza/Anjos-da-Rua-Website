import React from "react";
import PropTypes from 'prop-types';

import "./CheckboxField.scss";

//Add Icon later: https://codepen.io/fatmali/pen/aboNdra

export function CheckboxField({ 
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

CheckboxField.defaultProps = {
    value: false,
    onChange: () => {},
};
  
CheckboxField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};