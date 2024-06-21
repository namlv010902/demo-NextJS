
import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Column,
    flexRender
} from '@tanstack/react-table';
import Pagination from './Pagination';

interface TableProps {
    columns: Column<any>[];
    data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    const tableInstance = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const {
        getHeaderGroups,
        getRowModel,
        getState,
        nextPage,
        previousPage,
        setPageIndex,
        setPageSize,
    } = tableInstance;

    const { pageIndex, pageSize } = getState().pagination;

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
                {/* <div>
                    <button 
                        className="px-3 py-1 border rounded-md" 
                        onClick={() => previousPage()} 
                        disabled={!tableInstance.getCanPreviousPage()}
                    >
                        Previous
                    </button>
                    <button 
                        className="px-3 py-1 border rounded-md ml-2" 
                        onClick={() => nextPage()} 
                        disabled={!tableInstance.getCanNextPage()}
                    >
                        Next
                    </button>
                </div> */}
                {/* <div>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {tableInstance.getPageCount()}
                        </strong>
                    </span>
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                        className="ml-2 border rounded-md"
                    >
                        {[10, 20, 30, 40, 50].map(size => (
                            <option key={size} value={size}>
                                Show {size}
                            </option>
                        ))}
                    </select>
                </div> */}

              
            </div>
        </div>
    );
};

export default Table;
