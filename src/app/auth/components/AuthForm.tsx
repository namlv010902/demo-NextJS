
import Input from '@/app/components/Form/Input'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

type TypeForm = {
    onSubmit: () => void,
    control: Control<FieldValues | any>,
    register: any,
    errors: any
}
const AuthForm: React.FC<TypeForm> = ({ onSubmit, errors, control, register }) => {

    
    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
                <div className="mb-5">
                    <Input
                        id="name"
                        label="Email"
                        type="text"
                        register={register('email')}
                        error={errors.email?.message}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        id="price"
                        label="Password"
                        type="password"
                        register={register('password')}
                        error={errors.password?.message}
                    />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AuthForm