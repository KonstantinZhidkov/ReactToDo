import React from 'react';

import './ToDoListItem.css';


export default class ToDoListItem extends React.Component {

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = "todo-list-item";

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>

                <div>
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
                        <i className="fas fa-exclamation"></i>
                    </button>

                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </span>
        );
    }
}