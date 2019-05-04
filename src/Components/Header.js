import React, { Component } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import HeaderSignIn from './HeaderSignIn';

class Header extends Component {
    render(){
        return(
            /* React.fragment helps reduce the amount of nodes
            i.e eliminates the need of a div wrapper*/
            <React.Fragment>
                <header class = 'display-flex'>
                    <section class = 'display-flex'>
                        <Logo/>
                        <NavLinks/>
                    </section>
                    <HeaderSignIn/>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;