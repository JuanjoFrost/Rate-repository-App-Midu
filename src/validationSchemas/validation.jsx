import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Debe ser un email válido')
        .required('Ingresa email por favor'),
    password: yup
        .string()
        .min(5, 'Muy corto')
        .max(20,'Muy larga la contraseña')
        .required('Password es requerido')
});