import React from 'react';

import './ToDoSearchBar.css';

export default class ToDoSearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            term: ''
        }

        this.onSearchChange = event => {
            const term = event.target.value;
            this.setState({
                term: term
            });
            this.props.onSearchChange(term);
        }
    }

    render() {
        return (
            <input className="todo-search-input" placeholder="Type to filter"
                   onChange={ this.onSearchChange }
                   value={ this.state.term } />
        );
    }
};