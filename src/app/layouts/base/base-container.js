import React from 'react';
import { connect } from 'react-redux';

import { Header } from './header';
import { Footer } from './footer';

import './style.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <Header></Header>
                <div className="main__content">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);