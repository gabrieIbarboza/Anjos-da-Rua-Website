import DefaultPage from "../../../components/DefaultPage/DefaultPage";
import { VolunteerForm } from "../../../components/Forms/VolunteerForm/VolunteerForm";

export function Volunteer() {
    return (
        <DefaultPage>
            <h1>Cadastro de Voluntário</h1>
            <VolunteerForm />
        </DefaultPage>
    )
}