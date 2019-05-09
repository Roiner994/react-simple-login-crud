export const isRequired = value => (
    !value && "Este campo es requerido"
);

export const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser numerico"
);


export const toNumber = value => value && Number(value);