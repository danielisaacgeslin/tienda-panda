import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

class SecondHand extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="second-hand">
                second hand go here
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondHand);