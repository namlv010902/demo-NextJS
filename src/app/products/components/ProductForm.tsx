"use client"
import Input from '@/app/components/Form/Input'
import Select from '@/app/components/Form/Select'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import useQueryCategories from '../hooks/useCategories'

type TypeFormProduct = {
    onSubmit: () => void,
    control: Control<FieldValues | any>,
    btnText?: string

}
const ProductForm: React.FC<TypeFormProduct> = ({ onSubmit, control, btnText = "Submit" }) => {
    // console.log(control);
    const { data } = useQueryCategories()

    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
                <div className="mb-5">
                    <Input
                        id="name"
                        name='title'
                        label="Name"
                        type="text"
                        control={control}
                        required
                    />
                </div>
                <div className="mb-5">
                    <Input
                        id="content"
                        label="Content"
                        type="text"
                        control={control}
                        name='content'
                        required
                    />
                </div>
                <div className="mb-5">
                    <Input
                        id="Image"
                        label="Image"
                        type="text"
                        name='image'
                        control={control}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <Input
                        options={data}
                        name='categoryId'
                        control={control}
                        id='categoryId'
                        label='Category'
                        type='select'
                        textChooseOption='Choose Category'
                        required
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full my-5  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    {btnText}
                </button>

            </form>
        </>
    )
}

export default ProductForm