import React from 'react';

import './style.scss';

export default class SmallTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className="small-title">
                <span className="small-title__ornament"></span>
                <span className="small-title__text">{this.props.children}</span>
            </h2>
        );
    }
}
