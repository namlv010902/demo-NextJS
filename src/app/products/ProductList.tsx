"use client"
import React from 'react'
import Table from '../components/Table/ReactTable'
import useMutationProductRm from './hooks/useRemoveProduct';
import { useRouter } from 'next/navigation';
import useQueryProducts from './hooks/useListProducts';
import { ColumnDef } from '@tanstack/react-table';
import { Product } from '../types/products';
import TableSkeleton from '../components/Table/TableSkeleton';

const ProductList = () => {

    const { data, status, refetch } = useQueryProducts();
    const { mutate } = useMutationProductRm();
    const router = useRouter();
    if (status === 'pending') return <TableSkeleton columnNumber={4}/>;
    if (status === 'error') return <h1>Error</h1>;

    const handleClick = (id: string) => {
        router.push(`/products/edit/${id}`);
    };
    const handleRemove = (id: string) => {
        if (window.confirm('Are you sure you want to remove')) {
            mutate(id, {
                onSuccess: () => {
                    console.log("success")
                    refetch()
                },
                onError: () => {
                    console.log("error")
                }
            })

        }
    };
    const columns: ColumnDef<Product>[] = [
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Price',
            accessorKey: 'price',
        },
        {
            header: 'Image',
            accessorKey: 'image',
            cell: info => <img src={info.getValue<string>()} alt="Product" className="w-20 h-20 object-cover" />,
        },
        {
            header: 'Action',
            accessorKey: 'action',
            cell: ({ row }) => (
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClick(row.original.id)}
                    >
                        Update
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemove(row.original.id)}
                    >
                        Remove
                    </button>

                </>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} data={data?.data as Product[]} />
        </div>

    )
}

export default ProductList