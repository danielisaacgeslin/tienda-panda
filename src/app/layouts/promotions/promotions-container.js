import React from 'react';
import { connect } from 'react-redux';

import { fetchPromotions } from './promotions-actions';

import './style.scss';

class Promotions extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPromotions();
    }

    render() {
        return (
            <div className="promotions">
                <ol>
                    {!this.props.promotions.items.length && (<li>loading...</li>)}
                    {this.props.promotions.items.map(item => (
                        <li key={item.id}>{item.title} - <strong>${item.price.toLocaleString()}</strong></li>
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