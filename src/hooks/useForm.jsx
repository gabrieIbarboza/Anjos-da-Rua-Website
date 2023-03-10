import React, { useState } from "react";

//Criando Hook customizado para lidar com os inputs dos Forms
export function useForm(startValues) {

    const [values, setValues] = useState(startValues);

    function setValue(key, value) {
        // key: nome, descricao, bla, bli
        if(key != null)
        {
            setValues({
                ...values,
                [key]: value, // nome: 'valor'
            });
        }
        else
        {
            console.log("Invalid Input ID: " + key)
        }
    }

    function handleChange(e) {
        if(!!e.selectid)
        {
            setValue(
                e.selectid,
                e.value,
            );
        }
        else if(e.target.getAttribute('type') === "checkbox")
        {
            setValue(
                e.target.getAttribute('name'),
                e.target.checked,
            );
        }
        else
        {
            setValue(
              e.target.getAttribute('name'),
              e.target.value,
            );
        }
    }

    function clearForm() {
        setValues(startValues);
    }
    
    return {
        values,
        handleChange,
        clearForm,
    };
}