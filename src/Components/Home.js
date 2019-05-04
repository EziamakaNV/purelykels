import React, { Component } from 'react';
import Header from './Header'

class Home extends Component {
    render(){
        return(
            /* React.fragment helps reduce the amount of nodes
            i.e eliminates the need of a div wrapper*/
            <React.Fragment>
                <main>
                    <Header/>
                    <section>
                        <h1>
                            The number 1 Akara Joint!
                        </h1>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default Home