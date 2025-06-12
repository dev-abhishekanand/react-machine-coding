import React, { useState } from 'react'
import { Plus, Trash2, Check, X } from 'lucide-react';
import TodoList from './ToDolist';

const ToDoApp = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            const newToDo = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false
            }
            setTodos(prev => [...prev, newToDo])
            setInputValue('')
        }
    }
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter(todo => todo.id != id))
    };
    const onEdit = (id, newText) => {
        setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
    }
    const toggleTodo = (id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    };
    const completedTodos = todos.filter(todo => todo.completed)
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Todo List
                    </h1>
                    <p className="text-gray-600">Stay organized and get things done</p>
                </div>

                {/* Input Form */}
                <div className="mb-8">
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                                placeholder="What needs to be done?"
                                className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2 shadow-sm"
                        >
                            <Plus size={20} />
                            Add
                        </button>
                    </div>
                </div>

                {/* Todo List */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <TodoList
                        todos={todos}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onEdit={onEdit}
                    />

                    {/* Actions */}
                    {completedTodos.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <button
                                onClick={clearCompleted}
                                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                            >
                                <X size={16} />
                                Clear completed ({completedTodos.length})
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Built with React & Tailwind CSS</p>
                </div>
            </div>
        </div>
    )
}

export default ToDoApp