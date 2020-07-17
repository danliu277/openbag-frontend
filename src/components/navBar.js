import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUser } from '../action/actionCreator'
import {withRouter} from 'react-router'

const Navbar = (props) => {
    const { location } = props

    const checkPath = (path) => {
        if(location && location.path === path)
            return "nav-item active"
        else 
            return "nav-item"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/main">Open Bag</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-end">
                    <li className={checkPath('/inventory')}>
                        <Link className="nav-link" to="/inventory">Inventory</Link>
                    </li>
                    <li className={checkPath('/sales')}>
                        <Link className="nav-link" to="/sales">Create Sales</Link>
                    </li>
                    <li className={checkPath('/all-sales')}>
                        <Link className="nav-link" to="/all-sales">All Sales</Link>
                    </li>
                    <li className={checkPath('/trends')}>
                        <Link className="nav-link" to="/trends">Trends</Link>
                    </li>
                    <li className={checkPath('/restock')}>
                        <Link className="nav-link" to="/restock">Purchase Stock</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='#' onClick={props.logout}>Log Out</Link>
                    </li>
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
        logout: () => dispatch(setUser(null))
    }
}

export default connect(msp, mdp)(withRouter(Navbar))
