import DefaultPage from "../../../components/DefaultPage/DefaultPage";
import { FamilyForm } from "../../../components/Forms/FamilyForm/FamilyForm";

export function Beneficiary() {
    return (
        <DefaultPage>
            <h1>Análise de Grupo Familiar</h1>
            <FamilyForm />
        </DefaultPage>
    )
}
