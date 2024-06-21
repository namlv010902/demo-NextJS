"use client";

import React from 'react'
import AuthForm from '../components/AuthForm'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormAuth, schemaAuth } from '@/app/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/app/api/auth';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, control, setError } = useForm<IFormAuth>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schemaAuth),
    });

    const onSubmit: SubmitHandler<IFormAuth> = async data => {
        console.log('Form Data:', data);
        await login(data).then((response) => {
            document.cookie = `accessToken=${response.data.accessToken}; Path=/; Max-Age=${24 * 60 * 60 * 1000};`;
            document.cookie = `refreshToken=${response.data.refreshToken}; Path=/; Max-Age=${7 * 24 * 60 * 60 * 1000};`;
            alert("Login Success")
        })
            .catch((errors) => {
                console.log(errors);

                const { error, message } = errors.response.data
                if (error.password) {
                    setError("password", {
                        type: "manual",
                        message: error.password
                    })
                }
                if (error.email) {
                    setError("email", {
                        type: "manual",
                        message: error.email
                    })
                }
                if (message)
                    alert(message)
            })

    };
    return (
        <div>
            <h1 >Register</h1>
            <AuthForm
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
                control={control}
            />
        </div>
    )
}

export default LoginPage