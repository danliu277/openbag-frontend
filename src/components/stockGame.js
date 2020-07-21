import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { setCart } from '../action/actionCreator';

const StockGame = (props) => {
    const { name, genre, vendor_cost, stock, threshold } = props.game;
    const { allVendors } = props

    const [quantity, setQuantity] = useState(threshold - stock)
    const [vendor, setVendor] = useState(allVendors[0])

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
            <td>
                <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                    {allVendors.map(vendor => {
                        return <option value={vendor}>{vendor.name}</option>
                    })}
                </select>
            </td>
        </tr>
    )
}

const msp = state => {
    return {
        allVendors: state.allVendors
    }
}

const mdp = (dispatch) => {
    return {
        setCart: (cart) => dispatch(setCart(cart))
    }
}

export default connect(msp, mdp)(StockGame)
