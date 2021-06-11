import React from 'react';

import './ToDoSearchBar.css';

const ToDoSearchBar = () => {
    const searchBarText = 'Type here to search';

    return (
        <input className="todo-search-input" placeholder={searchBarText}/>
    );
};

export default ToDoSearchBar;