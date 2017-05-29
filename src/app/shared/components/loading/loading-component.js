import React from 'react';

import './style.scss';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loading">
                <div class="cs-loader">
                    <div class="cs-loader-inner">
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                    </div>
                </div>
            </div>
        );
    }
}
