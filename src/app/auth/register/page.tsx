"use client";

import React from 'react'
import AuthForm from '../components/AuthForm'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormRegisterType,schemaRegister } from '@/app/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from '@/app/api/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, control, setError } = useForm<FormRegisterType | any>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            phoneNumber: ""

        },
        resolver: yupResolver(schemaRegister),
    });
    const router = useRouter()
    const onSubmit: SubmitHandler<FormRegisterType | any> = async data => {
        console.log('Form Data:', data);
        await signUp(data).then((response) => {
            toast.success("Success");
            router.push("/auth/login")
        })
            .catch((errors) => {
                console.log(errors);

                const { error, message } = errors.response.data
      
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
            <h1 className='mt-8 text-xl text-center'>Register</h1>
            <AuthForm
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
                control={control}
                isNoLogin
            />
        </div>
    )
}

export default LoginPage