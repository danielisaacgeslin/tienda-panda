import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../../config/constants';

import './style.scss';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imageUrl = this.props.content.pictures.length && this.props.content.pictures[0].url;
        return (
            <article className="article">
                {/*<Link className="article__link" to={`${routeNames.detail}/${this.props.content.id}`}>*/}
                <a href={this.props.content.permalink} target="_blank" className="article__link">
                    <div
                        className="article__thumb"
                        style={{ backgroundImage: `url("${imageUrl || this.props.content.thumbnail}")` }}>
                    </div>
                    <h3 className="article__title">{this.props.content.title}</h3>
                    <div className="row">
                        <h6 className="col-md-6 article__price">${this.props.content.price.toLocaleString()}</h6>
                        <button className="col-md-6 btn btn-success article__cta">ver más</button>
                    </div>
                {/*</Link>*/}
                </a>
            </article>
        );
    }
}
