import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../css/style.scss';

import { routeNames } from './config/constants';
import { store } from './store';

import { Base } from './layouts/base';
import { Products } from './layouts/products';
import { Promotions } from './layouts/promotions';
import { SecondHand } from './layouts/second-hand';
import { Detail } from './layouts/detail';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Base path="/">
                            <Switch>
                                <Route path={routeNames.products} component={Products}></Route>
                                <Route path={routeNames.promotions} component={Promotions}></Route>
                                <Route path={routeNames.secondHand} component={SecondHand}></Route>
                                <Route path={`${routeNames.detail}/:id`} component={Detail}></Route>
                                <Route component={Products}></Route>
                            </Switch>
                        </Base>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));