import { FormField } from "../FormField/FormField";

export function FamilyForm() {
    return (
        <form action="">
            <FormField label="Nome" name="nome" />
            <FormField label="História" name="historia" type="textarea" />
        </form>
    )
}