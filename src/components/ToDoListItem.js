import React from 'react';

import './ToDoListItem.css';

const ToDoListItem = ({label, important = false}) => {
    const spanStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={spanStyle}>{label}</span>

            <div>
                <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fas fa-exclamation"></i>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </span>
    );
};

export default ToDoListItem;