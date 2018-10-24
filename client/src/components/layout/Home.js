import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className="container">

                <ul>
                    <li>
                        <Link className="LinkButton" to="/student">
                            add dtudent
                            </Link>
                    </li>
                    <li>
                        <Link className="LinkButton" to="/pairing">
                            pairing
                            </Link>
                    </li>
                    <li>
                        <Link className="LinkButton" to="/history">
                            history
                            </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Home;

