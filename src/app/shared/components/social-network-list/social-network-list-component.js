import React from 'react';

import './style.scss';

export default class SocialNetworkList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social-network-list">
                <a href="#" target="_blank"><img src="./assets/red1.png" /></a>
                <a href="#" target="_blank"><img src="./assets/red2.png" /></a>
                <a href="#" target="_blank"><img src="./assets/red3.png" /></a>
            </div>
        );
    }
}
