import React from 'react';
import { connect } from 'react-redux';

import { fetchSecondHand } from './second-hand-actions';
import { Article } from '../../shared/components/article-component';

import './style.scss';

class SecondHand extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.secondHand.items.length) this.props.fetchSecondHand();
    }

    render() {
        return (
            <div className="second-hand">
                <ol>
                    {!this.props.secondHand.items.length && (<li>loading...</li>)}
                    {this.props.secondHand.items.map(item => (
                        <Article key={item.id} content={item}></Article>
                    ))}
                </ol>
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