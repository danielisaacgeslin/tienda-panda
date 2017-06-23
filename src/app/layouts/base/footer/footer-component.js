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
                        <div className="row footer__big-button-container">
                            <div className="col-md-4 footer__big-button">
                                <a className="footer__big-button-inner-container" href="#">
                                    <img src="./assets/preg.png" />
                                    <span>preguntas frecuentes</span>
                                </a>
                            </div>
                            <div className="col-md-4 footer__big-button">
                                <a className="footer__big-button-inner-container" href="#">
                                    <img src="./assets/comp.png" />
                                    <span>como comprar</span>
                                </a>
                            </div>
                            <div className="col-md-4 footer__big-button">
                                <a className="footer__big-button-inner-container" href="#">
                                    <img src="./assets/mp.png" />
                                    <span>promociones bancarias</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__middle-ornament"></div>
                <div className="footer__contact-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-8 col-md-pull-4">
                                <div className="footer__subscription-input">
                                    <PandaInput onValueChange={() => { }} />
                                </div>
                                <p className="footer__subscription-text">suscribirme al newsletter</p>
                                <div className="footer__social-networks">
                                    <SocialNetworkList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
