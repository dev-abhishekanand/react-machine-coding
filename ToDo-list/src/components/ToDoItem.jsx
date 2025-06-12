import { Trash2, Check, X, Edit3, Save } from 'lucide-react';
import { useEffect, useState } from 'react';


const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    useEffect(() => {
        setEditText(todo.text);
    }, [todo.text]);
    const handleSave = () => {
        if (editText.trim() && editText.trim() !== todo.text) {
            onEdit(todo.id, editText.trim());
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditText(todo.text);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };
    return (
        <div className={`group flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all duration-200 ${todo.completed ? 'border-green-400 bg-green-50' : 'border-blue-400'
            }`}>
            <div className="flex items-center space-x-3 flex-1">
                <button
                    onClick={() => onToggle(todo.id)}
                    disabled={isEditing}
                    className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors duration-200 ${todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                        } ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {todo.completed && <Check size={14} />}
                </button>
                {isEditing ? (
                    <div className="flex-1 flex items-center space-x-2">
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyPress}
                            onBlur={handleSave}
                            autoFocus
                            className="flex-1 px-2 py-1 text-gray-800 bg-white border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={handleSave}
                            className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded transition-colors duration-200"
                        >
                            <Save size={16} />
                        </button>
                        <button
                            onClick={handleCancel}
                            className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors duration-200"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <span
                        onDoubleClick={() => !todo.completed && setIsEditing(true)}
                        className={`flex-1 text-gray-800 transition-all duration-200 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'hover:text-blue-600'
                            } ${!todo.completed ? 'select-none' : ''}`}
                        title={!todo.completed ? "Double-click to edit" : ""}
                    >
                        {todo.text}
                    </span>
                )}
            </div>
            <div className="flex items-center space-x-1">
                {!isEditing && !todo.completed && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="p-2 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
                    >
                        <Edit3 size={16} />
                    </button>
                )}
                <button
                    onClick={() => onDelete(todo.id)}
                    disabled={isEditing}
                    className={`p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ${isEditing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
};
export default TodoItem