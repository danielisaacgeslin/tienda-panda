import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../../config/constants';

import { SearchInput } from '../../../shared/components/search-input';
import { SocialNetworkList } from '../../../shared/components/social-network-list';

import './style.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 main-logo">
                            <img className="main-logo__image" src="./assets/tpanda.png" alt="TIENDA PANDA" />
                        </div>
                        <div className="col-sm-3">
                            <SocialNetworkList></SocialNetworkList>
                            <div className="search-input">
                                <SearchInput></SearchInput>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul>
                                    <li className="nav__item-container">
                                        <Link className="nav__item" to={routeNames.products}>Productos</Link>
                                    </li>
                                    <li className="nav__item-container">
                                        <Link className="nav__item" to={routeNames.promotions}>Promociones</Link>
                                    </li>
                                    <li className="nav__item-container">
                                        <Link className="nav__item" to={routeNames.secondHand}>Segunda Mano</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
