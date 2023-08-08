import React, { useState } from 'react';

import { Check, Pencil, Trash2 } from "lucide-react";
import { TaskStatus, todoType } from '@/types/todoType';

interface TableDataProps {
    todos: todoType[];
    onDelete: (index: number) => void;
    onComplete: (index: number) => void;
    onEdit: (index: number, taskName: string) => void;
}

export default function Table({ todos, onDelete, onComplete, onEdit }: TableDataProps) {
    const [editingTask, setEditingTask] = useState<todoType>({ id: '', task: '', status: TaskStatus.NOT_DONE });

    const handleEdit = (todo: todoType) => {
        setEditingTask(todo);
    };

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((task, index) => (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                        <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {task.status === TaskStatus.DONE ? (
                                <del>{task.task}</del>
                            ) : (
                                editingTask.status === TaskStatus.EDITING && editingTask.id === task.id ? (
                                    <form onSubmit={(e) => {onEdit(index, editingTask.task); setEditingTask({...editingTask, status: TaskStatus.NOT_DONE, task: ''})}}>
                                    <input
                                        type="text"
                                        value={editingTask.task}
                                        onChange={(e) => setEditingTask({ ...editingTask, task: e.target.value })}
                                        className="rounded-lg ring-1 mx-2 placeholder-gray-500 border-main-accent focus:placeholder-gray-200 p-2"
                                        placeholder="What needs to be done?"
                                    />
                                    </form>
                                ) : (task.task)
                            )}
                            {/* {task.status === TaskStatus.DONE ? <del>{task.task}</del> : task.task} */}
                        </td>
                        <td className="px-6 py-4 flex justify-start align-center gap-4">
                            <a
                                href="#"
                                className="font-medium text-white dark:text-blue-500 hover:underline"
                                onClick={() => setEditingTask({...task, status: TaskStatus.EDITING})}
                            >
                                <Pencil className="bg-amber-400 rounded" />
                            </a>

                            <a
                                href="#"
                                className="font-medium text-white dark:text-blue-500 hover:underline"
                                onClick={() => onComplete(index)}
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
