import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setCart } from '../action/actionCreator';

const UnderstockGame = (props) => {
    const { name, genre, vendor_cost, stock, threshold } = props.game;

    const [quantity, setQuantity] = useState(threshold - stock)

    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td>{name}</td>
            <td>{genre}</td>
            <td>{vendor_cost}</td>
            <td>{stock}</td>
            <td>{threshold}</td>
            <td>
                <input type="number" placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)} />
            </td>
        </tr>
    )
}

const msp = state => {
    return {
        cart: state.cart
    }
}

const mdp = (dispatch) => {
    return {
        setCart: (cart) => dispatch(setCart(cart))
    }
}

export default connect(msp, mdp)(UnderstockGame)
