import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCart, createPurchaseOrder, updatePurchaseOrder } from '../action/actionCreator';

const StockGame = (props) => {
    const { id, name, genre, vendor_cost, stock, threshold } = props.game;
    const { allVendors, createPurchaseOrder, updatePurchaseOrder } = props

    const [quantity, setQuantity] = useState(threshold - stock > 0 ? threshold - stock : 0)
    const [vendor, setVendor] = useState(allVendors[0] && allVendors[0].id)

    useEffect(() => {
        createPurchaseOrder(
            id,
            threshold - stock > 0 ? threshold - stock : 0,
            allVendors[0] && allVendors[0].id
        )
    }, [createPurchaseOrder, id, stock, threshold, allVendors])

    const valueChange = (type, value) => {
        if (type === 'quantity') {
            setQuantity(parseInt(value))
            updatePurchaseOrder(id, parseInt(value), vendor)
        }
        else if (type === 'vendor') {
            setVendor(parseInt(value))
            updatePurchaseOrder(id, quantity, parseInt(value))
        }
    }

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
                    onChange={(e) => valueChange('quantity', e.target.value)} />
            </td>
            <td>
                <select value={vendor} onChange={(e) => valueChange('vendor', e.target.value)}>
                    {allVendors.map(vendor => {
                        return <option key={vendor.id} value={vendor.id}>{vendor.name}</option>
                    })}
                </select>
            </td>
        </tr>
    )
}

const msp = state => {
    return {
        allVendors: state.allVendors,
    }
}

const mdp = (dispatch) => {
    return {
        setCart: (cart) => dispatch(setCart(cart)),
        createPurchaseOrder: (gameId, quantity, vendorId) => dispatch(createPurchaseOrder(gameId, quantity, vendorId)),
        updatePurchaseOrder: (gameId, quantity, vendorId) => dispatch(updatePurchaseOrder(gameId, quantity, vendorId)),
    }
}

export default connect(msp, mdp)(StockGame)
