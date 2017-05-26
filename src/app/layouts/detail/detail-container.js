import React from 'react';
import { connect } from 'react-redux';

import { fetchDetail, fetchDetailSuccess } from './detail-actions';

import './style.scss';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.getDetail();
    }

    getDetail() {
        const id = this.props.match.params.id;
        let detail;
        ['products', 'promotions', 'secondHand'].forEach(key => {
            if (!detail) for (let item of this.props.state[key].items) {
                if (item.id !== id) continue;
                detail = item;
                break;
            }
        });

        if (!detail) this.props.fetchDetail(id);
        else this.props.fetchDetailSuccess(detail);
    }

    render() {
        return (
            <div className="detail">
                <p>detail for {this.props.match.params.id}</p>
                <p>{JSON.stringify(this.props.detail)}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state, detail: state.detail };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetail: id => dispatch(fetchDetail(id)),
        fetchDetailSuccess: detail => dispatch(fetchDetailSuccess(detail))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);