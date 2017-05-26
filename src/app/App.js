import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../css/style.scss';

import { routeNames } from './config/constants';
import { store } from './store';

import { Main } from './layouts/base';
import { Products } from './layouts/products';
import { Promotions } from './layouts/promotions';
import { SecondHand } from './layouts/second-hand';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Main path="/">
                            <Switch>
                                <Route path={routeNames.products} component={Products}></Route>
                                <Route path={routeNames.promotions} component={Promotions}></Route>
                                <Route path={routeNames.secondHand} component={SecondHand}></Route>
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