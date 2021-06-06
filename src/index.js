import React from 'react';
import ReactDOM from 'react-dom';

const ToDoHeader = () => <h1>My ToDo List</h1>;

const ToDoSearchBar = () => <input placeholder='search' />;

const ToDoList = () => {
    return (
      <ul>
          <li>Learn React</li>
          <li>Create App</li>
      </ul>
    );
};

const App = () => {
    return (
        <div>
            <ToDoHeader />
            <ToDoSearchBar />
            <ToDoList />
        </div>
    );
};

ReactDOM.render(< App />, document.getElementById('root'));