import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../../config/constants';
import { Article } from '../article';

import './style.scss';

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const articles = [];
        (this.props.articles || []).forEach((item, index) => {
            articles.push((
                <div key={item.id} className="col-md-3">
                    <Article content={item}></Article>
                </div>
            ));
            if (!((index + 1) % 4)) articles.push((<div key={`clear${item.id}`} className="clearfix"></div>));
        });
        return (
            <div className="article-list">
                {articles}
            </div>
        );
    }
}
