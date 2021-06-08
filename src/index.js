import React from 'react';
import ReactDOM from 'react-dom';

import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoSearchBar from './components/ToDoSearchBar';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false},
        {label: 'Create React App', important: true},
        {label: 'Have a lunch', important: false}
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