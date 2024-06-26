import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Column,
    flexRender
} from '@tanstack/react-table';
import Pagination from './Pagination';
import { Product } from '@/app/types/products';
interface TableDataType {
    data: Product[],
    meta: {
        totalPage: number;
        currentPage: number;
        perPage: number;
        totalItems: number;
    };
}
interface TableProps {
    columns: Column<Product>[];
    setCurrentPage: (value: number) => void;
    setPerPage: (value: number) => void;
    perPage: number;
    tableData: TableDataType
}

const Table: React.FC<TableProps> = ({ columns, tableData, setCurrentPage: setPage, setPerPage, perPage }) => {
    const { data, meta } = tableData
    const [currentPage, setCurrentPage] = useState(meta?.currentPage)
    // console.log(currentPage);


    const tableInstance = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        // debugColumns: true,
        // debugHeaders: true,
        // debugTable: true,
        // enableColumnFilters: true,
        // enableColumnResizing: true,
        // enableMultiSort: false,
        manualPagination: true,
        // manualSorting: true,
        autoResetPageIndex: true,
        columnResizeMode: 'onChange',
        state: {
            pagination: {
                pageIndex: currentPage - 1,
                pageSize: perPage,
            },
        },
    });

    console.log("data", data);

    const {
        getHeaderGroups,
        getRowModel,
        getState,
    } = tableInstance;

    const { pageIndex, pageSize } = getState().pagination;
    // console.log(meta);

    const handlePageChange = (page: number) => {
        // console.log(page);
        setPage(page)
        setCurrentPage(page);
        window.scrollTo(0, 0);

    };
    if (data.length == 0) {
        return (
            <div className="flex justify-center items-center mt-8">
                <h1>NO DATA</h1>
            </div>
        )
    }
    return (
        <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <Pagination
                    totalPage={meta.totalPage}
                    currentPage={currentPage}
                    perPage={perPage}
                    setPerPage={setPerPage}
                    onPageChange={handlePageChange}
                    setPage={setPage}
                />
                {/* <span className="text-sm text-gray-500">
                    Showing {pageIndex * pageSize + 1} - {Math.min((pageIndex + 1) * pageSize, meta.totalItems)} of {meta.totalItems} results
                </span> */}
            </div>
        </div>
    );
};

export default Table;
