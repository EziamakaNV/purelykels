import React, { Component } from 'react';

class NavLinks extends Component {
    render(){
        return (
                <section>
                    <nav>
                        <a href = '#home'>HOME</a>
                        <a href = "#ourakara">OUR AKARA</a>
                        <a href = '#whoweare'>WHO WE ARE</a>
                        <a href = '#contactus'>CONTACT US</a>
                    </nav>
                </section>
        );
    }
}

export default NavLinks;