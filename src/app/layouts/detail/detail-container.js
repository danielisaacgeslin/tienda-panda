import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDetail, fetchDetailSuccess } from './detail-actions';
import { PandaSlider } from '../../shared/components/panda-slider';

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
        const pictures = [];
        (this.props.detail.pictures || []).forEach(picture => {
            pictures.push(<div key={picture.id}><img src={picture.url} /></div>);
        });
        return (
            <div className="detail container">
                <div className="row">
                    <div className="col-xs-6">
                        <PandaSlider>
                            {pictures.length ? pictures : <div></div>}
                        </PandaSlider>
                    </div>
                    <div className="col-xs-6">
                        <h1>
                            <Link to={this.props.detail.permalink || ''} target="_blank">{this.props.detail.title}</Link>
                        </h1>
                        <h2>${this.props.detail.price && this.props.detail.price.toLocaleString()}</h2>
                    </div>
                    <div className="col-xs-12">
                        {(this.props.detail.attributes || []).map(attr => (
                            <p key={attr.id}><strong>{attr.name}: </strong>{attr.value_name}</p>
                        ))}
                    </div>
                </div>
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