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
        const articles = [];
        this.props.products.items.forEach((item, index) => {
            articles.push((
                <div key={item.id} className="col-md-3">
                    <Article content={item}></Article>
                </div>
            ));
            if (!((index + 1) % 4)) articles.push((<div key={`clear${item.id}`} className="clearfix"></div>));
        });
        return (
            <div className="products">
                <PandaSlider>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                </PandaSlider>
                <div className="container article-container">
                    <div className="row">
                        {!this.props.products.items.length && (<Loading></Loading>)}
                        {articles}
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