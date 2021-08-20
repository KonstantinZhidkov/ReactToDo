import React from 'react';

import ToDoListItem from './ToDoListItem/ToDoListItem';

import './ToDoList.css';

const ToDoList = ({ todos, deleteItem, onToggleImportant, onToggleDone }) => {

    const elements = todos.map(item => {
       return (
           <li key={item.id} className="list-group-item">
               <ToDoListItem label={item.label}
                             important={item.important}
                             done={item.done}
                             onDeleted={ () => deleteItem(item.id)}
                             onToggleImportant={ () => onToggleImportant(item.id) }
                             onToggleDone={ () => onToggleDone(item.id) }/>
           </li>
       )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;