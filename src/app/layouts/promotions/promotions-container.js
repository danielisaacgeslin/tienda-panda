import React from 'react';
import { connect } from 'react-redux';

import { fetchPromotions } from './promotions-actions';
import { Article } from '../../shared/components/article-component';

import './style.scss';

class Promotions extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.promotions.items.length) this.props.fetchPromotions();
    }

    render() {
        return (
            <div className="promotions">
                <ol>
                    {!this.props.promotions.items.length && (<li>loading...</li>)}
                    {this.props.promotions.items.map(item => (
                        <Article key={item.id} content={item}></Article>
                    ))}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { promotions: state.promotions };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPromotions: () => dispatch(fetchPromotions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);