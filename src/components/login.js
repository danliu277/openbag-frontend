import React, { useState } from 'react'
import { connect } from 'react-redux';
import { login } from '../action/actionCreator'
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        props.login(username, password)
    }

    return (
        <div className="login-background">
            <form onSubmit={onSubmit} className="login">
                <h1 className="title">Open Bag</h1>
                <input type="text" placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button variant="primary" type="submit">
                    Log In
                </button>
            </form>
            {props.user && <Redirect to='/inventory' />}
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
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(msp, mdp)(Login)