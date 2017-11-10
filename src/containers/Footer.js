import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default footer">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a to="/" className="navbar-brand">Footer</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Footer;