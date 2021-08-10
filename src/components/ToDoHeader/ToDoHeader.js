import React from 'react';

import './ToDoHeader.css';

const ToDoHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h2>{toDo} more to do, {done} done.</h2>
        </div>
    );
}

export default ToDoHeader;