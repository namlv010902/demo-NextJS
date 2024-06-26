import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
    email: yup.string().required('Email is required').email('Address email does not exist'),
    password: yup.string().required('Password is required').min(6, "Password must be at least 6 characters"),
});

export const schemaRegister = yup.object().shape({
    ...schemaLogin.fields,
    confirmPassword: yup.string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    name: yup.string().required('Name is required'),
    phoneNumber: yup.string().required('Phone Number is required').min(10, 'Phone Number must be at least 10 characters')
});

type User = {
    role:number,
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phoneNumber: string;
}

type FormLoginType = {
    email: string;
    password: string;
}

type FormRegisterType = FormLoginType & {
    confirmPassword: string;
    name: string;
    phoneNumber: string;
}

export type {
    User,
    FormLoginType,
    FormRegisterType
}