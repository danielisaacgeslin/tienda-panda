import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { Main } from './layouts/base';
import { Products } from './layouts/products';
import { Promotions } from './layouts/promotions';
import { SecondHand } from './layouts/second-hand';

import * as a from './todo-list'

require("../css/style.scss");

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Main path="/">
                            <Switch>
                                <Route path="/products" component={Products}></Route>
                                <Route path="/promotions" component={Promotions}></Route>
                                <Route path="/secondHand" component={SecondHand}></Route>
                                <Route component={Products}></Route>
                            </Switch>
                        </Main>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));