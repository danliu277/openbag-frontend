import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/navBar';
import Login from '../components/login'
import Inventory from '../components/inventory'
import CreateSales from '../components/createSales'
import AllSales from '../components/allSales'

function Main(props) {
    return (
        <div>
            {props.user ? <Navbar /> : <Redirect to="/" />}
            <Switch>
                <Route exact path="/" component={(routerProps) => <Login {...routerProps} />} />
                <Route exact path="/inventory" component={(routerProps) => <Inventory {...routerProps} />} />
                <Route exact path="/sales" component={(routerProps) => <CreateSales {...routerProps} />} />
                <Route exact path="/all-sales" component={(routerProps) => <AllSales {...routerProps} />} />
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