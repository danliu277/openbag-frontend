import React from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity } from '../action/actionCreator';

const gameSale = (props) => {
    const { id, name, quantity } = props.game;

    const onChange = (value) => {
        props.updateCartQuantity(id, parseInt(value))
    }

    return (
        <p>
            {name} &nbsp;
            <input className='game-quantity' type='number' placeholder='Quantity' value={quantity} onChange={(e) => onChange(e.target.value)} />
        </p>
    )
}

const msp = (state) => {
    return {
        cart: state.cart
    }
}

const mdp = (dispatch) => {
    return {
        updateCartQuantity: (gameId, quantity) => dispatch(updateCartQuantity(gameId, quantity))
    }
}

export default connect(msp, mdp)(gameSale)
