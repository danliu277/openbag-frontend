import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUser } from '../action/actionCreator'
import { withRouter } from 'react-router'

const Navbar = (props) => {
    const { location } = props

    const checkPath = (path) => {
        if (location && location.path === path)
            return "nav-item active"
        else
            return "nav-item"
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="mx-auto order-0">
                <Link className="navbar-brand mx-auto" to="/">Open Bag</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
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
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
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
