import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import './style.scss';

export default class PandaSlider extends React.Component {
    constructor(props) {
        super(props);
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true
        };
    }

    render() {
        return (
            <div className="panda-slider">
                <Slider settings={Object.assign({}, this.settings, (this.props.settings || {}))}>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}
