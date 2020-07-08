import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUserCreator } from '../action/actionCreator'

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/main">Open Bag</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-end">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/inventory">Inventory</Link>
                    </li>
                    {props.user ? <li className="nav-item">
                        <Link className="nav-link" to='#' onClick={props.logout}>Log Out</Link>
                    </li> :
                        <li className="nav-item">
                            <Link className="nav-link" to="/logIn">Log In</Link>
                        </li>}
                </ul>
            </div>
        </nav>
    )
}


const msp = state => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(setUserCreator(null))
    }
}

export default connect(msp, mdp)(Navbar)
