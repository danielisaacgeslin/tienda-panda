import React from 'react';

require("./style.scss");

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                just a header
            </header>
        );
    }
}
