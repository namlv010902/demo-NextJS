"use client";

import React, { useEffect, useState } from 'react'
import AuthForm from '../components/AuthForm'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLoginType, schemaLogin } from '@/app/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/app/api/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/useContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, control, setError } = useForm<FormLoginType | any>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schemaLogin),
    });
    const { login: loginProvider } = useAuth();
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { user } = useAuth()
    useEffect(() => {
        if (user) {
            router.push("/")
        }
    }, [user])
    const onSubmit: SubmitHandler<FormLoginType> = async data => {
        setLoading(true)
        console.log('Form Data:', data);
        await login(data).then((response) => {
            toast.success("Login Success")
            loginProvider(response.data.user)
            router.push("/")
            setLoading(false)
        })
            .catch((errors) => {
                setLoading(false)
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
                    toast.error(message)
            })

    };
    return (
        <div>
            <h1 className='mt-8 text-xl text-center'>Login</h1>
            <AuthForm
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
                control={control}
                btnText='Login'
                loading={loading}
            />
        </div>
    )
}

export default LoginPage