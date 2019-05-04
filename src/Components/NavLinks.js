import React, { Component } from 'react';

class NavLinks extends Component {
    render(){
        return (
            <React.Fragment>
                <section>
                    <nav>
                        <a href = '#home'>HOME</a>
                        <a href = "#ourakara">OUR AKARA</a>
                        <a href = '#whoweare'>WHO WE ARE</a>
                        <a href = '#contactus'>CONTACT US</a>
                    </nav>
                </section>
            </React.Fragment>
        );
    }
}

export default NavLinks;