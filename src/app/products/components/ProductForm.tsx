import Input from '@/app/components/Form/Input'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

type TypeFormProduct = {
    onSubmit: () => void,
    control: Control<FieldValues | any>,
    register: any,
    errors: any

}
const ProductForm: React.FC<TypeFormProduct> = ({ onSubmit, control,register,errors }) => {
    // console.log(control);

    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
                <div className="mb-5">
                    <Input
                        id="name"
                        label="Name"
                        type="text"
                        register={register('name')}
                        error={errors.name?.message}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        id="price"
                        label="Price"
                        type="number"
                        register={register('price')}
                        error={errors.price?.message}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        id="Image"
                        label="Image"
                        type="text"
                        register={register('image')}
                        error={errors.image?.message}
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default ProductForm