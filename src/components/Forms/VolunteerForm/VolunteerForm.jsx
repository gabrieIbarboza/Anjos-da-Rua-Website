import { FormField } from "../FormField/FormField";
import { useForm } from "../../../hooks/useForm";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";

export function VolunteerForm() {

    const {handleChange, values, clearForm} = useForm({
        nome: "",
        estadocivil: "",
        rg: "",
        cpf: "",
        dtnasc: "",
        escola: "",
        endereco: "",
        checkvoluntario: false,
        checkcompras: false,
        checkcontagem: false,
        checkmontagem: false,
        checksocial: false,
        checkdoacao: false,
        checkcaixas: false,
        checkplanejamento: false,
        checkempresas: false,
        checkcadastro: false,
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

                <h2>Interesse em qual(is) grupos?</h2>
                <FormCheckbox
                    label="Voluntário"
                    name="checkvoluntario"
                    value={values.checkvoluntario}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Compras"
                    name="checkcompras"
                    value={values.checkcompras}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Contagem"
                    name="checkcontagem"
                    value={values.checkcontagem}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Montagem"
                    name="checkmontagem"
                    value={values.checkmontagem}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Redes Sociais"
                    name="checksocial"
                    value={values.checksocial}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Doações"
                    name="checkvdoacao"
                    value={values.checkvdoacao}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Caixas de Doação"
                    name="checkcaixas"
                    value={values.checkcaixas}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Planejamento de Novos Projetos"
                    name="checkplanejamento"
                    value={values.checkplanejamento}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Empresas Parceiras"
                    name="checkempresas"
                    value={values.checkempresas}
                    onChange={handleChange}
                />
                <FormCheckbox
                    label="Cadastro de Famílias"
                    name="checkcadastro"
                    value={values.checkcadastro}
                    onChange={handleChange}
                />

                <button type="submit" className="default-button">
                    Enviar Respostas
                </button>
            </form>
        </div>
    )
}