import React from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { ArticleList } from '../../shared/components/article-list';
import { fetchSecondHand } from './second-hand-actions';
import { Article } from '../../shared/components/article';
import { Loading } from '../../shared/components/loading';

import './style.scss';

class SecondHand extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.secondHand.items.length) return;
        if (Object.keys(this.props.mlIds).length) this.props.fetchSecondHand();
        else this.unsubscribe = store.subscribe(() => {
            if (Object.keys(this.props.mlIds).length) return;
            this.unsubscribe();
            this.props.fetchSecondHand();
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    render() {
        return (
            <div className="second-hand container">
                <div className="row">
                    <div className="col-xs-12">
                        <ol>
                            {!this.props.secondHand.items.length && (<Loading></Loading>)}
                            <ArticleList articles={this.props.secondHand.items}></ArticleList>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { secondHand: state.secondHand, mlIds: state.mlIds };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSecondHand: () => dispatch(fetchSecondHand())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondHand);