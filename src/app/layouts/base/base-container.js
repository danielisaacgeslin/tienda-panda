import React from 'react';
import { connect } from 'react-redux';

import { fetchMLIds } from './base-actions';
import { Header } from './header';
import { Footer } from './footer';

import './style.scss';

class Base extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchMLIds();
    }

    render() {
        return (
            <div className="base">
                <Header></Header>
                <div className="base__content">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { mlIds: state.mlIds };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMLIds: () => dispatch(fetchMLIds())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Base);