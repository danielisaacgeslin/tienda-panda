import React from 'react';

import { PandaInput } from '../panda-input';

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
                    <PandaInput onValueChange={() => { }} />
                </div>
            </div>
        );
    }
}
