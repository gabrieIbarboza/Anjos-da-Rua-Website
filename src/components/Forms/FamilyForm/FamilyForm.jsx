import React from "react";
import { FormField } from "../FormField/FormField";
import { useForm } from "../../../hooks/useForm"

export function FamilyForm() {

    const {handleChange, values, clearForm} = useForm({
        nome: "",
        estadocivil: "",
        rg: "",
        cpf: "",
        dtnasc: "",
        escola: "",
        endereco: "",
        q1: "",
    })

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (

        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>

                <h2>Informações Pessoais</h2>
                <FormField
                    label="Nome"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField 
                    label="Estado Civil"
                    name="estadocivil"
                    value={values.estadocivil}
                    onChange={handleChange}
                />
                <FormField 
                    label="RG"
                    name="rg"
                    value={values.rg}
                    onChange={handleChange}
                />
                <FormField 
                    label="CPF"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                />
                <FormField 
                    type="date"
                    label="Data de Nascimento"
                    name="dtnasc"
                    value={values.dtnasc}
                    onChange={handleChange}
                />
                <FormField 
                    label="Escolaridade"
                    name="escola"
                    value={values.escola}
                    onChange={handleChange}
                />
                <FormField 
                    label="Endereço"
                    name="endereco"
                    value={values.endereco}
                    onChange={handleChange}
                />
                
                <h2>Perguntas sobre o grupo familiar</h2>
                
                <label className="questionlabel">1.) a</label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="q1"
                    value={values.q1}
                    onChange={handleChange}
                />

                <button type="submit" className="default-button">
                    Enviar Respostas
                </button>
            </form>
        </div>
        
    )
}