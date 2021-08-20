import React from 'react';
import './App.css';

import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoSearchBar from "../ToDoSearchBar/ToDoSearchBar";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../ToDoList/ToDoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends React.Component {
    constructor() {
        super();

        this.idStart = 1;

        this.createToDoItem = label => {
            return {
                label: label,
                important: false,
                done: false,
                id: this.idStart++
            }
        }

        this.state = {
            todoData: [
                this.createToDoItem('Drink coffee'),
                this.createToDoItem('Create React App'),
                this.createToDoItem('Have a lunch')
            ],
            term: '',
            filter: 'all'
        }

        this.deleteItem = id => {
            this.setState((state) => {
                const idx = state.todoData.findIndex(element => element.id === id);
                const before = state.todoData.slice(0, idx);
                const after = state.todoData.slice(idx + 1);
                const newState = [...before, ...after];

                return {
                    todoData: newState
                }
            });
        }

        this.addItem = text => {
            const newItem = this.createToDoItem(text);

            this.setState((state) => {
                const newState = [...state.todoData, newItem];

                return {
                    todoData: newState
                }
            })
        }

        this.onToggleDone = id => {
            this.setState((state) => {
                const idx = state.todoData.findIndex(element => element.id === id);
                const previousItem = state.todoData[idx];
                const newItem = {...previousItem, done: !previousItem.done};

                const before = state.todoData.slice(0, idx);
                const after = state.todoData.slice(idx + 1);
                const newState = [...before, newItem, ...after];

                return {
                    todoData: newState
                }
            });
        }

        this.onToggleImportant = id => {
            this.setState((state) => {
                const idx = state.todoData.findIndex(element => element.id === id);
                const previousItem = state.todoData[idx];
                const newItem = {...previousItem, important: !previousItem.important};

                const before = state.todoData.slice(0, idx);
                const after = state.todoData.slice(idx + 1);
                const newState = [...before, newItem, ...after];

                return {
                    todoData: newState
                }
            });
        }

        this.search = function(items, term) {
            if(term.length === 0) {
                return items;
            }

            return items.filter(elem => elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
        }

        this.onSearchChange = term => {
            this.setState({
                term: term
            });
        }

        this.filter = function(items, filter) {
            switch (filter) {
                case 'all':
                    return items;
                case 'active':
                    return items.filter(elem => !elem.done);
                case 'done':
                    return items.filter(elem => elem.done);
                default:
                    return items;
            }
        }

        this.onFilterChange = filter => {
            this.setState({
                filter: filter
            });
        }
    }

    render() {

        const visibleItems = this.filter(this.search(this.state.todoData, this.state.term), this.state.filter);
        const doneCount = this.state.todoData.filter(element => element.done === true).length;
        const unDoneCount = this.state.todoData.length - doneCount;

        return (
            <div className="todoApp">

                <ToDoHeader toDo={ unDoneCount } done={ doneCount }/>

                <div className="topPanel">
                    <ToDoSearchBar onSearchChange={ this.onSearchChange } />
                    <ItemStatusFilter filter={ this.state.filter } onFilterChange={ this.onFilterChange } />
                </div>

                <ToDoList todos={ visibleItems }
                          deleteItem={ this.deleteItem }
                          onToggleImportant={ this.onToggleImportant }
                          onToggleDone={ this.onToggleDone } />

                <ItemAddForm addItem={ this.addItem } />
            </div>
        );
    }
};