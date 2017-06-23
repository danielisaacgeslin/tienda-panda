import React from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { fetchProducts } from './products-actions';
import { ArticleList } from '../../shared/components/article-list';
import { Loading } from '../../shared/components/loading';
import { SmallTitle } from '../../shared/components/small-title';
import { PandaSlider } from '../../shared/components/panda-slider';

import './style.scss';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.products.items.length) return;
        if (Object.keys(this.props.mlIds).length) this.props.fetchProducts();
        else this.unsubscribe = store.subscribe(() => {
            if (Object.keys(this.props.mlIds).length) return;
            this.unsubscribe();
            this.props.fetchProducts();
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    render() {
        return (
            <div className="products">
                <PandaSlider>
                    <div><img src='/assets/prueba.jpg' /></div>
                    <div><img src='/assets/prueba.jpg' /></div>
                    <div><img src='/assets/prueba.jpg' /></div>
                    <div><img src='/assets/prueba.jpg' /></div>
                    <div><img src='/assets/prueba.jpg' /></div>
                    <div><img src='/assets/prueba.jpg' /></div>
                </PandaSlider>
                <div className="container products__article-container">
                    <div className="row">
                        <div class="col-xs-12">
                            <SmallTitle>productos/colchon y sommier pocket</SmallTitle>
                        </div>
                    </div>
                    <div className="row products__main-content">
                        {!this.props.products.items.length && (<Loading></Loading>)}
                        <ArticleList articles={this.props.products.items}></ArticleList>
                    </div>
                    <div className="row products__delivery">
                        <div class="col-xs-12">
                            <SmallTitle>
                                <span className="products__delivery-text">
                                    El envio de
                                    <span className="products__delivery-big"> colchones y sommiers es sin cargo </span>
                                    en
                                    <span className="products__delivery-small"> Capital Federal </span>
                                    y
                                    <span className="products__delivery-small"> Gran Buenos Aires</span>.
                                </span>
                            </SmallTitle>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { products: state.products, mlIds: state.mlIds };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);