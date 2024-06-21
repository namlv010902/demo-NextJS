import React from 'react';

type TableProps = {
    columnNumber?: number
};

const TableSkeleton = ({ columnNumber }: TableProps) => {
    return (
        <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {[...Array(columnNumber)].map((_, i) => (
                            <th key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className={`h-4 bg-gray-300 rounded ${i % 3 === 0 ? 'w-3/4' : i % 3 === 1 ? 'w-2/4' : 'w-1/4'}`}></div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {[...Array(5)].map((_, i) => (
                        <tr className="animate-pulse" key={i}>
                            {[...Array(columnNumber)].map((_, j) => (
                                <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className={`h-4 bg-gray-300 rounded ${j % 3 === 0 ? 'w-3/4' : j % 3 === 1 ? 'w-2/4' : 'w-1/4'}`}></div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </div>
    );
};

export default TableSkeleton;
