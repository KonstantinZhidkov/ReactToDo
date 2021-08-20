import React from 'react';
import styles from './ItemAddForm.module.css';

export default class ItemAddForm extends React.Component {
    constructor() {
        super();

        this.state = {
            label: ''
        }

        this.onLabelChange = event => {
            this.setState({
              label: event.target.value
            });
        }

        this.onSubmit = event => {
            event.preventDefault();

            if(this.state.label.length > 0) {
                this.props.addItem(this.state.label);
            }

            this.setState({
                label: ''
            });
        }
    }

    render() {
        return (
            <form className={`${styles.itemAddForm} d-flex`} onSubmit={ this.onSubmit }>
                <input className={`${styles.itemAddForm__input} form-control`}
                       type="text"
                       placeholder="What needs to be done"
                       onChange={ this.onLabelChange }
                       value={ this.state.label } />
                <button className={`${styles.itemAddForm__button} btn btn-outline-secondary`}>Add Item</button>
            </form>
        )
    }
}