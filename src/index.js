import React from 'react';
import ReactDOM from 'react-dom';

import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoSearchBar from './components/ToDoSearchBar';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 'dc'},
        {label: 'Create React App', important: true, id: 'cra'},
        {label: 'Have a lunch', important: false, id: 'hl'}
    ];

    return (
        <div>
            <ToDoHeader />
            <ToDoSearchBar />
            <ToDoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(< App />, document.getElementById('root'));