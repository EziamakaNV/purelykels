import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

class Main extends Component {
    render(){
        return(
            /* React.fragment helps reduce the amount of nodes
            i.e eliminates the need of a div wrapper*/
            <React.Fragment>
                <main>
                    <Header/>
                    <Home/>
                    <Footer year = { 2019 }/>
                </main>
            </React.Fragment>
        )
    }
}

export default Main;