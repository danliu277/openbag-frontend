import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/navBar';
import Login from '../components/login'
import Inventory from '../components/inventory'
import Sales from '../components/sales'

function Main(props) {
    return (
        <div>
            {props.user && <Navbar />}
            <Switch>
                <Route exact path="/" component={(routerProps) => <Login {...routerProps} />} />
                <Route exact path="/inventory" component={(routerProps) => <Inventory {...routerProps} />} />
                <Route exact path="/sales" component={(routerProps) => <Sales {...routerProps} />} />
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

export default connect(msp)(Main)