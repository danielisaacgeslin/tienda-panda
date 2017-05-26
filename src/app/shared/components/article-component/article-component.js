import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../../config/constants';

import './style.scss';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="article">
                <Link to={`${routeNames.detail}/${this.props.content.id}`} key={this.props.content.id}>
                    {this.props.content.title} - <strong>${this.props.content.price.toLocaleString()}</strong>
                </Link>
            </article>
        );
    }
}
