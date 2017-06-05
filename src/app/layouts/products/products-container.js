import React from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { fetchProducts } from './products-actions';
import { ArticleList } from '../../shared/components/article-list';
import { Loading } from '../../shared/components/loading';
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
                {/*<PandaSlider>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                    <div><img src='/assets/banner1.jpg' /></div>
                    <div><img src='/assets/banner3.jpg' /></div>
                </PandaSlider>*/}
                <div className="container article-container">
                    <div className="row">
                        <div class="col-xs-12">
                            <h2>productos/colchon y sommier pocket</h2>
                        </div>
                    </div>
                    <div className="row">
                        {!this.props.products.items.length && (<Loading></Loading>)}
                        <ArticleList articles={this.props.products.items}></ArticleList>
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