import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoSearchBar from './components/ToDoSearchBar';
import ItemStatusFilter from './components/ItemStatusFilter';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 'dc'},
        {label: 'Create React App', important: true, id: 'cra'},
        {label: 'Have a lunch', important: false, id: 'hl'}
    ];

    return (
        <div className="todo-app">

            <ToDoHeader toDo={1} done={3}/>

            <div className="top-panel">
                <ToDoSearchBar />
                <ItemStatusFilter />
            </div>

            <ToDoList todos={todoData}/>

        </div>
    );
};

ReactDOM.render(< App />, document.getElementById('root'));