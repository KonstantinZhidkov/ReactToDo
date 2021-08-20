import React from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {
    constructor() {
        super();

        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ]
    }

    render() {

        const buttons = this.buttons.map(elem => {
            const isActive = this.props.filter === elem.name;
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';

            return <button key={ elem.name }
                           className={`btn ${buttonClass}`}
                           type="button"
                           onClick={ () => this.props.onFilterChange(elem.name)}>{ elem.label }</button>
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}