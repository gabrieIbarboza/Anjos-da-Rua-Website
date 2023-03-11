import React from "react";
import { useForm } from "../../../hooks/useForm";
import { FormField } from "../FormField/FormField";
import { FormSelect } from "../FormSelect/FormSelect";
import { select_qtd, select_escolaridade, select_estadocivil, select_residencia } from "../FormSelect/SelectDefaultValues/SelectDefaultValues";

export function FamilyForm() {

    const {handleChange, values, clearForm} = useForm({
        nome: "",
        rg: "",
        cpf: "",
        dtnasc: "",
        escolaridade: "",
        estadocivil: "",
        sonhovida: "",
        sonhoprof: "",
        endereco: "",
        residencia: "",
        quartos: "",
        banheiros: "",
        tvs: "",
        familia: "",
        q1: "",
    })

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const select_qtd_quartos = select_qtd("quartos")
    const select_qtd_banheiros = select_qtd("banheiros")
    const select_qtd_tvs = select_qtd("tvs")
    const select_qtd_familia = select_qtd("familia")

    return (

        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>

                <h2>Informações pessoais</h2>
                <FormField
                    label="Nome"
                    name="nome"
                    value={values.nome}
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
                <FormSelect
                    label="Escolaridade"
                    name="escolaridade"
                    values={select_escolaridade}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Estado Civil"
                    name="estadocivil"
                    values={select_estadocivil}
                    onChange={handleChange}
                />
                //Está empregado
                //Renda
                <FormField 
                    type="textarea"
                    label="Qual seu maior sonho de vida?"
                    name="sonhovida"
                    value={values.sonhovida}
                    hidetxtarealabel={false}
                    onChange={handleChange}
                />
                <FormField 
                    type="textarea"
                    label="Qual seu maior sonho profissional?"
                    name="sonhoprof"
                    value={values.sonhoprof}
                    hidetxtarealabel={false}
                    onChange={handleChange}
                />


                <h2>Perguntas sobre o grupo familiar</h2>
                <h3>Lar</h3>
                <FormField 
                    label="Endereço"
                    name="endereco"
                    value={values.endereco}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Qual o tipo de residência?"
                    name="residencia"
                    values={select_residencia}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Há quantos quartos?"
                    name="quartos"
                    values={select_qtd_quartos}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Há quantos banheiros?"
                    name="quartos"
                    values={select_qtd_banheiros}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Há quantos televisões?"
                    name="quartos"
                    values={select_qtd_tvs}
                    onChange={handleChange}
                />
                <label htmlForm="id_familia" className="questionlabel">
                    Você mora com quantas pessoas?
                </label>
                <FormSelect
                    id="id_familia"
                    label="Você mora com quantas pessoas?"
                    name="familia"
                    values={select_qtd_familia}
                    onChange={handleChange}
                />


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