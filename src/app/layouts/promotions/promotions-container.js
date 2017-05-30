import React from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { ArticleList } from '../../shared/components/article-list';
import { fetchPromotions } from './promotions-actions';
import { Article } from '../../shared/components/article';
import { Loading } from '../../shared/components/loading';

import './style.scss';

class Promotions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.promotions.items.length) return;
        if (Object.keys(this.props.mlIds).length) this.props.fetchPromotions();
        else this.unsubscribe = store.subscribe(() => {
            if (Object.keys(this.props.mlIds).length) return;
            this.unsubscribe();
            this.props.fetchPromotions();
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    render() {
        return (
            <div className="promotions container">
                <div className="row">
                    <div className="col-xs-12">
                        <ol>
                            {!this.props.promotions.items.length && (<Loading></Loading>)}
                            <ArticleList articles={this.props.promotions.items}></ArticleList>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { promotions: state.promotions, mlIds: state.mlIds };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPromotions: () => dispatch(fetchPromotions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);