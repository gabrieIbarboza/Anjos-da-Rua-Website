import React from "react";
import { FormField } from "../FormField/FormField";
import { useForm } from "../../../hooks/useForm"

export function ContactForm() {

    const {handleChange, values, clearForm} = useForm({
        nome: "",
        email: "",
        msg: "",
    })

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (

        <div className='contactFormWrapper'>
            <form onSubmit={handleSubmit}>

                <h3>Entre Em Contato</h3>
                <FormField
                    label="Nome"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField 
                    type="email"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <FormField 
                    type="textarea"
                    label="Mensagem"
                    name="msg"
                    value={values.msg}
                    hidetxtarealabel={false}
                    onChange={handleChange}
                />

                <button type="submit" className="default-button">
                    Enviar
                </button>
            </form>
        </div>
        
    )
}