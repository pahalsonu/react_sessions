
import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        console.log(this.props)
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github"></i> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default NavBar;