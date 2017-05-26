import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from './products-actions';

import './style.scss';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className="products">
                <ol>
                    {!this.props.products.items.length && (<li>loading...</li>)}
                    {this.props.products.items.map(item => (
                        <li key={item.id}>{item.title} - <strong>${item.price.toLocaleString()}</strong></li>
                    ))}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);