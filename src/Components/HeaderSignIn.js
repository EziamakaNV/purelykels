import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderSignIn extends Component {
    render(){
        return (
            <React.Fragment>
                <section id = 'header-sign-in'>
                    <Link to = '/signin'>SIGN IN</Link>
                </section>
            </React.Fragment>
        );
    }
}

export default HeaderSignIn;