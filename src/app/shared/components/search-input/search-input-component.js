import React from 'react';

import './style.scss';

export default class SearchInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-input">
                <span className="glyphicon glyphicon-search search-input__icon"></span>
                <div className="search-input__input-container">
                    <input className="form-control search-input__input" type="text" />
                </div>
            </div>
        );
    }
}
