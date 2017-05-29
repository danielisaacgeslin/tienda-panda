import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from './products-actions';
import { Article } from '../../shared/components/article';
import { Loading } from '../../shared/components/loading';
import { PandaSlider } from '../../shared/components/panda-slider';

import './style.scss';

class Products extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.products.items.length) this.props.fetchProducts();
    }

    render() {
        return (
            <div className="products">
                <PandaSlider>
                    <div>1111111</div>
                    <div>2222222</div>
                    <div>3333333</div>
                    <div>4444444</div>
                </PandaSlider>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ol>
                                {!this.props.products.items.length && (<Loading></Loading>)}
                                {this.props.products.items.map(item => (
                                    <Article key={item.id} content={item}></Article>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
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