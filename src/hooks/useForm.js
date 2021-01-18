import { useState } from "react";

export const useForm = (datosFormIniciales) => {
    const [datosForm, setDatosForm] = useState(datosFormIniciales);

    const onChangeCampo = (e) => {
        const campo = e.target.id;
        const valor = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setDatosForm({
            ...datosForm,
            [campo]: valor
        });
    }

    return { datosForm, onChangeCampo };
}