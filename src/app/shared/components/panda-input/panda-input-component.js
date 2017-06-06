import React from 'react';

import './style.scss';

export default class PandaInput extends React.Component {
    constructor(props) {
        super(props);
        this.defaultType = 'text';
    }

    render() {
        return (
            <div className="panda-input">
                <input
                    disabled={this.props.disabled || false}
                    className="form-control panda-input__input"
                    value={this.props.value || ''}
                    onChange={event => this.props.onValueChange(event)}
                    type={this.props.type || this.defaultType}
                />
            </div>
        );
    }
}
