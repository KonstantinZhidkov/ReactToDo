import React from 'react';

import './ToDoListItem.css';


export default class ToDoListItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        }

        this.onLabelClick = () => {
            this.setState((state) => {
                return {
                    done: !state.done
                }
            })
        }

        this.onMarkImportant = () => {
            this.setState((state) => {
                return {
                    important: !state.important
                }
            })
        }
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;
        let classNames = "todo-list-item";

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
            <span className="todo-list-item-label" onClick={ this.onLabelClick }>{ label }</span>

            <div>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={ this.onMarkImportant }>
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