import React from 'react';
import { connect } from 'react-redux';

require("./style.scss");

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="products">
                products go here
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);