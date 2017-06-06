import React from 'react';

import { SocialNetworkList } from '../../../shared/components/social-network-list';
import { PandaInput } from '../../../shared/components/panda-input';

import './style.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__info-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">preguntas frecuentes</div>
                            <div className="col-md-4">como comprar</div>
                            <div className="col-md-4">promociones bancarias</div>
                        </div>
                    </div>
                </div>
                <div className="footer__contact-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-8 col-md-pull-4">
                                <PandaInput onValueChange={() => { }} />
                                <p>suscribirme al newsletter</p>
                                <SocialNetworkList />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
