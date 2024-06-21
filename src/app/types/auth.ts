import * as yup from 'yup';

export const schemaAuth = yup.object().shape({
    email: yup.string().required('Email is required').email('Address email does not exist'),
    password: yup.string().required('Password is required').min(6,"Password must be at least 6 characters"),
});

type User = {
    email: string;
    password: string;
}

type IFormAuth = {
    email: string;
    password: string;
}

export type {
    User,
    IFormAuth
}