import React from 'react';

const ToDoSearchBar = () => {
    const searchBarText = 'Type here something to seearch';

    return (
        <input placeholder={searchBarText}/>
    );
};

export default ToDoSearchBar;