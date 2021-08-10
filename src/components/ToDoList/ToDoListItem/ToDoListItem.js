import React from 'react';

import './ToDoListItem.css';


export default class ToDoListItem extends React.Component {

    constructor() {
        super();

        this.onLabelClick = () => {
            console.log(this.props.label);
        }
    }

    render() {
        const {label, important = false} = this.props;

        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
            <span className="todo-list-item-label" style={spanStyle} onClick={this.onLabelClick}>{label}</span>

            <div>
                <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fas fa-exclamation"></i>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </span>
        );
    }
}