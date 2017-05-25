import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

class Promotions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="promotions">
                promotions go here
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);