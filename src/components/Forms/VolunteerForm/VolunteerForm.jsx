import { useForm } from "../../../hooks/useForm";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";
import { FormField } from "../FormField/FormField";
import { FormSelect } from "../FormSelect/FormSelect";
import { select_school, select_marital, select_worksstatus } from "../FormSelect/SelectDefaultValues/SelectDefaultValues";

const select_user_school = select_school("user_school")
const select_user_marital= select_marital("user_marital")
const select_user_worksstatus= select_worksstatus("user_worksstatus")

export function VolunteerForm() {

    const {handleChange, values, clearForm} = useForm({
        user_name: "",
        user_rg: "",
        user_cpf: "",
        user_dtbirth: "",
        user_school: "",
        user_marital: "",
        user_worksstatus: "",
        user_adress: "",
        user_lifelongdream: "",
        user_carrerdream: "",
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
                <FormField 
                    label="Endereço"
                    name="user_adress"
                    value={values.user_adress}
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