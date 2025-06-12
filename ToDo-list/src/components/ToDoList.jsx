import TodoItem from "./ToDoItem";
import { Plus, Trash2, Check, X } from 'lucide-react';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="space-y-4">
            {totalCount > 0 && (
                <div className="flex justify-between items-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <span>Total: {totalCount} tasks</span>
                    <span>Completed: {completedCount}</span>
                </div>
            )}

            <div className="space-y-3 max-h-96 overflow-y-auto">
                {todos.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <div className="text-4xl mb-4">📝</div>
                        <p className="text-lg">No tasks yet</p>
                        <p className="text-sm">Add your first task above!</p>
                    </div>
                ) : (
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
export default TodoList