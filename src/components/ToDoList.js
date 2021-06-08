import React from 'react';

import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos}) => {

    const elements = todos.map(item => {
       return (
           <li>
               <ToDoListItem label={item.label} important={item.important} />
           </li>
       )
    });

    console.log(elements);

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default ToDoList;