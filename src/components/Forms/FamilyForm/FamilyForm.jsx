import React from "react";
import { useForm } from "../../../hooks/useForm";
import { FormField } from "../FormField/FormField";
import { FormSelect } from "../FormSelect/FormSelect";
import { select_school, select_marital, select_worksstatus, select_income, select_qtd, select_residencia, select_escolaridade_criancas, select_istrue } from "../FormSelect/SelectDefaultValues/SelectDefaultValues";

const select_user_school = select_school("user_school")
const select_user_marital= select_marital("user_marital")
const select_user_worksstatus= select_worksstatus("user_worksstatus")
const select_user_income = select_income("user_income")
const select_qtd_quartos = select_qtd("quartos")
const select_qtd_banheiros = select_qtd("banheiros")
const select_qtd_tvs = select_qtd("tvs")
const select_qtd_familia = select_qtd("familia")
const select_renda_familia = select_income("renda_familia")
const select_especial = select_istrue("especial")
const select_rendasuficiente = select_istrue("rendasuficiente")
const select_bolsafamilia = select_istrue("bolsafamilia")
const select_loas = select_istrue("loas")

export function FamilyForm() {

    const {handleChange, values, clearForm} = useForm({
        //User
        user_name: "",
        user_rg: "",
        user_cpf: "",
        user_dtbirth: "",
        user_school: "",
        user_marital: "",
        user_worksstatus: "",
        user_income: "",
        user_lifelongdream: "",
        user_carrerdream: "",
        //Familia
        endereco: "",
        residencia: "",
        quartos: "",
        banheiros: "",
        tvs: "",
        familia: "",
        parentesco: "",
        escolaridade_familia: "",
        escolaridade_criancas: "",
        especial: "",
        cuidadosespecial: "",
        //Financas
        emprego_familia: "",
        renda_familia: "",
        despesasgerais: "",
        despesassaude: "",
        despesasaslimentacao: "",
        despesasespeciais: "",
        rendasuficiente: "",
        //Beneficios
        bolsafamilia: "",
        loas: "",
        cadunico: "",
        outrobeneficio: "",
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (

        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>

                <h2>Informações pessoais</h2>
                <FormField
                    label="Nome"
                    name="user_name"
                    value={values.user_name}
                    onChange={handleChange}
                />
                <FormField 
                    label="RG"
                    name="user_rg"
                    value={values.user_rg}
                    onChange={handleChange}
                />
                <FormField 
                    label="CPF"
                    name="user_cpf"
                    value={values.user_cpf}
                    onChange={handleChange}
                />
                <FormField 
                    type="date"
                    label="Data de Nascimento"
                    name="user_dtbirth"
                    value={values.user_dtbirth}
                    onChange={handleChange}
                />
                <FormSelect
                    label="Escolaridade"
                    name="user_school"
                    values={select_user_school}
                    onChange={handleChange}
                />
                <FormSelect 
                    label="Estado Civil"
                    name="user_marital"
                    values={select_user_marital}
                    onChange={handleChange}
                />
                <FormSelect
                    label="Situação de Emprego"
                    name="worksstatus"
                    values={select_user_worksstatus}
                    onChange={handleChange}
                />
                <label htmlFor="id_user_income" className="questionlabel">
                    Geralmente, qual seu valor de renda mensal? 
                </label>
                <FormSelect
                    label="Renda Mensal"
                    name="user_income"
                    values={select_user_income}
                    onChange={handleChange}
                />
                <FormField 
                    type="textarea"
                    label="Qual seu maior sonho de vida?"
                    name="user_lifelongdream"
                    value={values.user_lifelongdream}
                    hidetxtarealabel={false}
                    onChange={handleChange}
                />
                <FormField 
                    type="textarea"
                    label="Qual seu maior sonho profissional?"
                    name="user_carrerdream"
                    value={values.user_carrerdream}
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
                    label="Qual o tipo de moradia?"
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
                <label htmlFor="id_familia" className="questionlabel">
                    Moram quantas pessoas? (Contando com você)
                </label>
                <FormSelect
                    label="Moram quantas pessoas?"
                    name="familia"
                    values={select_qtd_familia}
                    onChange={handleChange}
                />
                <label htmlFor="id_parentesco" className="questionlabel">
                    Qual o seu grau de parentesco com as pessoas que moram com você e a idade delas? Há crianças?
                </label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="parentesco"
                    value={values.parentesco}
                    onChange={handleChange}
                />
                <label htmlFor="id_escolaridade_familia" className="questionlabel">
                    Qual o grau de escolaridade das pessoas que moram com você?
                </label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="escolaridade_familia"
                    value={values.escolaridade_familia}
                    onChange={handleChange}
                />
                <FormSelect
                    label="As crianças estudam?"
                    name="escolaridade_criancas"
                    values={select_escolaridade_criancas}
                    onChange={handleChange}
                />
                <label htmlFor="id_especial" className="questionlabel">
                    Há alguma pessoa com necessidades especiais?
                </label>
                <FormSelect
                    label="Necessidade Especial"
                    name="especial"
                    values={select_especial}
                    onChange={handleChange}
                />
                <label htmlFor="id_cuidadosespecial" className="questionlabel">
                A pessoa com deficiência depende única e exclusivamente de um cuidador (pode ser uma pessoa do grupo familiar)?
                </label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="cuidadosespecial"
                    value={values.cuidadosespecial}
                    onChange={handleChange}
                />


                <h3>Financeiro</h3>
                <label htmlFor="id_emprego_familia" className="questionlabel">
                    Qual a situação de emprego de cada pessoa do grupo familiar?
                </label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="emprego_familia"
                    value={values.emprego_familia}
                    onChange={handleChange}
                />
                <label htmlFor="id_renda_familia" className="questionlabel">
                    Geralmente, qual a soma dos valores de renda mensal de todos do grupo familiar? 
                </label>
                <FormSelect
                    label="Renda Mensal Familiar"
                    name="renda_familia"
                    values={select_renda_familia}
                    onChange={handleChange}
                />
                <FormField 
                    label="Despesas Com a Casa"
                    name="despesasgerais"
                    value={values.despesasgerais}
                    onChange={handleChange}
                />
                <FormField 
                    label="Despesas Com Saúde (ex: Convênio)"
                    name="despesassaude"
                    value={values.despesassaude}
                    onChange={handleChange}
                />
                <FormField 
                    label="Despesas Com Alimentação"
                    name="despesasaslimentacao"
                    value={values.despesasaslimentacao}
                    onChange={handleChange}
                />
                <FormField 
                    label="Despesas Com Cuidados de Pessoal Deficiente"
                    name="despesasespeciais"
                    value={values.despesasespeciais}
                    onChange={handleChange}
                />
                <label htmlFor="id_rendasuficiente" className="questionlabel">
                    Atualmente, a renda do grupo familiar é suficiente para o sustento de todos?                 </label>
                <FormSelect 
                    label="A renda é suficiente?"
                    name="rendasuficiente"
                    values={select_rendasuficiente}
                    onChange={handleChange}
                />


                <h3>Benefícios e Direitos</h3>
                <label htmlFor="id_bolsafamilia" className="questionlabel">
                    O grupo familiar recebe Bolsa Família?
                </label>
                <FormSelect 
                    label="Recebem Bolsa Família?"
                    name="bolsafamilia"
                    values={select_bolsafamilia}
                    onChange={handleChange}
                />
                <label htmlFor="id_loas" className="questionlabel">
                    Recebem benefício de prestação continuada BPC/LOAS?
                </label>
                <FormSelect 
                    label="Recebem BCP/LOAS?"
                    name="loas"
                    values={select_loas}
                    onChange={handleChange}
                />
                <label htmlFor="id_cadunico" className="questionlabel">
                    Se possui, qual o número do CadÚnico do grupo familiar?
                </label>
                <FormField
                    type="number"
                    label="N° CadÚnico"
                    name="cadunico"
                    value={values.cadunico}
                    onChange={handleChange}
                />
                <label htmlFor="id_outrobeneficio" className="questionlabel">
                    O grupo familiar recebe algum outro benefício?
                </label>
                <FormField 
                    type="textarea"
                    label="Insira sua resposta"
                    name="outrobeneficio"
                    value={values.outrobeneficio}
                    onChange={handleChange}
                />


                <span>
                    <strong>*No dia da retirada da cesta básica levar os seguintes documentos:</strong>  - RG/CPF de todos que moram na mesma casa e comprovante de endereço.
                </span>

                <button type="submit" className="default-button">
                    Enviar Respostas
                </button>
            </form>
        </div>
        
    )
}