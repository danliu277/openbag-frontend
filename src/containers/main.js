import React, { useState } from 'react'
import { connect } from 'react-redux';
import { loginActionCreater } from '../action/actionCreator'
import { Redirect } from 'react-router-dom';
import Navbar from '../components/navBar';

function Main(props) {

    return (
        <div>
            {!props.user && <Redirect to='/' />}
            <Navbar />
        </div>
    )
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