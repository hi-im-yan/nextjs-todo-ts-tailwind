'use client'

import Table from '@/components/table';
import { TaskStatus, todoType } from '@/types/todoType';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<todoType[]>([]);

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.trim() !== '') {
      setTodos([...todos, {task: todo, status: TaskStatus.NOT_DONE}]);
      setTodo('');
    }
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    console.log("clicked")
  }

  const completeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], status: TaskStatus.DONE };
    setTodos(updatedTodos);
  }

  const editTodo = (index: number, task: todoType) => {
    
  }

  return (
    <main className="bg-main-primary rounded-lg m-16 shadow-2xl">
      <div className="container mx-auto p-8">
        <h1 className="font-assistant flex justify-center mb-8 font-bold">
          Todo App
        </h1>

        <section className="flex justify-center space-2">

          <form onSubmit={addTodo}>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="rounded-lg ring-1 mx-2 placeholder-gray-500 border-main-accent focus:placeholder-gray-200 p-2"
              placeholder="What needs to be done?"
            />
            <button type="submit" className="bg-main-secondary text-white rounded-lg px-4 hover:bg-main-accent p-2">
              add
            </button>
          </form>

        </section>

        <section className="relative overflow-x-auto shadow-md sm:rounded-lg rounded border-2 border-main-accent mt-6 my-16">
          <Table
            todos={todos}
            onDelete={deleteTodo}
            onComplete={completeTodo}
          />
        </section>
      </div>
    </main>
  );
}
