import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import './style.scss';

export default class PandaSlider extends React.Component {
    constructor(props) {
        super(props);
        this.settings = {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            pauseOnHover: true,
            centerMode: true
        };
        setTimeout(()=>this.refs.slider.slickNext(), 3000); // workaround, autoplay sometimes freeze on the first slide
    }

    render() {
        return (
            <div className="panda-slider">
                <Slider ref="slider" {...Object.assign({}, this.settings, (this.props.settings || {})) }>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}
