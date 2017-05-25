import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../../config/constants';

require("./style.scss");

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                just a header
                <nav>
                    <ul>
                        <li><Link to={routeNames.products}>Productos</Link></li>
                        <li><Link to={routeNames.promotions}>Promociones</Link></li>
                        <li><Link to={routeNames.secondHand}>Segunda Mano</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
