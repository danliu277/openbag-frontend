import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setCart } from '../action/actionCreator';

function Game(props) {
    const { id, name, genre, sales_price, vendor_cost, stock, threshold } = props.game;
    const [className, setClassName] = useState('')

    const inCart = useCallback(() => {
        let inCart = false
        if (props.cart.find(game => game.id === id))
            inCart = true
        return inCart
    }, [id, props.cart])

    useEffect(() => {
        if(inCart())
            setClassName("fa fa-minus")
        else
            setClassName("fa fa-plus")
    },[props.cart, inCart])

    const onClick = () => {
        if (inCart())
            props.setCart(props.cart.filter(game => game.id !== id))
        else
            props.setCart([...props.cart, {...props.game, quantity: 1}])
    }

    return (
        <tr className={stock < threshold ? 'table-danger' : undefined}>
            <th scope="row">{stock < threshold && <i className="fa fa-warning" style={{ color: "red" }}></i>}{id}</th>
            <td>{name}</td>
            <td>{genre}</td>
            <td>{sales_price}</td>
            <td>{vendor_cost}</td>
            <td>{stock}</td>
            <td>
                <button onClick={() => onClick()}>
                    <i className={className} aria-hidden="true"></i>
                </button>
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

export default connect(msp, mdp)(Game)
