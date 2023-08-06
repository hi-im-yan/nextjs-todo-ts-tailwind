import React from 'react';

import { Check, Pencil, Trash2 } from "lucide-react";

interface TableDataProps {
    content: string[];
    onDelete: (index: number) => void; 
}

interface Todo {
    name: string;
}

export default function Table({ content, onDelete }: TableDataProps) {
    const handleDelete = (index: number) => {
        content.splice(index, 1)
    }

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {content.map((bodyItem, index) => (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                        <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {bodyItem}
                        </td>
                        <td className="px-6 py-4 flex justify-start align-center gap-4">
                            <a
                                href="#"
                                className="font-medium text-white dark:text-blue-500 hover:underline"
                            >
                                <Pencil className="bg-amber-400 rounded" />
                            </a>

                            <a
                                href="#"
                                className="font-medium text-white dark:text-blue-500 hover:underline"
                            >
                                <Check className="bg-green-400 secondary rounded" />
                            </a>

                            <a
                                href="#"
                                className="font-medium text-white dark:text-blue-500 hover:underline"
                                onClick={() => onDelete(index)}
                            >
                                <Trash2 className="bg-red-400 secondary rounded" />
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
