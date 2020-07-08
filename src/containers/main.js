import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/navBar';
import Login from '../components/login'
import Inventory from '../components/inventory'

function Main(props) {
    return (
        <div>
            {props.user ? <Navbar /> : <Redirect to="/" />}
            <Switch>
                <Route exact path="/" component={(routerProps) => <Login {...routerProps} />} />
                <Route exact path="/inventory" component={(routerProps) => <Inventory {...routerProps} />} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </div>
    );
}

const msp = state => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {

    }
}

export default connect(msp, mdp)(Main)