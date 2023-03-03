import { FormField } from "../FormField/FormField";
import { useForm } from "../../../hooks/useForm";
import { CheckboxField } from "../CheckboxField/CheckboxField";

export function VolunteerForm() {

    const {handleChange, values} = useForm({
        nome: "",
        estadocivil: "",
        rg: "",
        cpf: "",
        dtnasc: "",
        escola: "",
        endereco: "",
        checkvoluntario: false,
    })

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    //const handleChange = (values: any) => {setValues(values)};

    return (
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <h2>Informações Pessoais:</h2>

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
                <CheckboxField
                    label="Voluntário"
                    name="checkvoluntario"
                    value={values.checkvoluntario}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}