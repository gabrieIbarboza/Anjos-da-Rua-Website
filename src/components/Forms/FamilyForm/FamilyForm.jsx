import React from "react";
import { FormField } from "../FormField/FormField";
import { useForm } from "../../../hooks/useForm"

export function FamilyForm() {

    const {handleChange, values, clearForm} = useForm({
        nome: "",
        historia: "",
    })

    return (

        <form action="">
            <FormField label="Nome" name="nome" value={values.nome} onChange={handleChange} />
            <FormField label="História" name="historia" type="textarea" value={values.hisotoria} onChange={handleChange} />
        </form>
        
    )
}