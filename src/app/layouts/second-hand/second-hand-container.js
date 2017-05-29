import React from 'react';
import { connect } from 'react-redux';

import { fetchSecondHand } from './second-hand-actions';
import { Article } from '../../shared/components/article';
import { Loading } from '../../shared/components/loading';

import './style.scss';

class SecondHand extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.secondHand.items.length) this.props.fetchSecondHand();
    }

    render() {
        return (
            <div className="second-hand container">
                <div className="row">
                    <div className="col-xs-12">
                        <ol>
                            {!this.props.secondHand.items.length && (<Loading></Loading>)}
                            {this.props.secondHand.items.map(item => (
                                <Article key={item.id} content={item}></Article>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { secondHand: state.secondHand };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSecondHand: () => dispatch(fetchSecondHand())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondHand);