import React from 'react';

require("./style.scss");

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                just a footer
            </footer>
        );
    }
}
