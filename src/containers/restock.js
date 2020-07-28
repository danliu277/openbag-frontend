import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllVendors, getGames, setPurchaseOrders, setGames, submitPurchaseOrders, setPurchaseOrdersSubmitted } from '../action/actionCreator'
import StockGame from '../components/stockGame'
import { Alert } from 'react-bootstrap';

const Restock = (props) => {
    const {
        getAllVendors,
        games,
        purchaseOrders,
        getGames,
        resetPurchaseOrders,
        resetGames,
        submitPurchaseOrders,
        purchaseOrdersSubmitted,
        setPurchaseOrdersSubmitted, } = props

    useEffect(() => {
        getAllVendors()
        getGames()
        return (() => {
            resetPurchaseOrders()
            resetGames()
        })
    }, [getAllVendors, getGames, resetPurchaseOrders, resetGames])

    const onClick = () => {
        submitPurchaseOrders(
            purchaseOrders.filter(purchaseOrder => purchaseOrder.quantity > 0)
        )
        setPurchaseOrdersSubmitted('loading')
    }

    const displayAlert = () => {
        let variant = ''
        let message = ''
        if (purchaseOrdersSubmitted === 'success') {
            variant = 'success'
            message = 'Purchase Order Submitted Successfully'
        } else if (purchaseOrdersSubmitted === 'error') {
            variant = 'danger'
            message = 'Error Submitting Purchase Order'
        } else if (purchaseOrdersSubmitted === 'loading') {
            variant = 'warning'
            message = 'Submitting Purchase Order'
        }
        return (
            <Alert variant={variant} onClose={() => {
                setPurchaseOrdersSubmitted('')
            }} dismissible>
                <Alert.Heading>{message}</Alert.Heading>
            </Alert>
        )
    }

    return (
        <div>
            <h3>Restock</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Vendor Cost</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Threshold</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Vendor</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game, index) => {
                        return <StockGame key={game.id} game={game} index={index} />
                    })}
                </tbody>
            </table>
            {setPurchaseOrdersSubmitted && displayAlert()}
            <button onClick={() => onClick()}>Restock</button>
        </div>
    )
}

const msp = state => {
    return {
        games: state.games,
        purchaseOrders: state.purchaseOrders,
        purchaseOrdersSubmitted: state.purchaseOrdersSubmitted
    }
}

const mdp = (dispatch) => {
    return {
        getAllVendors: () => dispatch(getAllVendors()),
        getGames: () => dispatch(getGames()),
        resetGames: () => dispatch(setGames([])),
        resetPurchaseOrders: () => dispatch(setPurchaseOrders([])),
        submitPurchaseOrders: (purchaseOrders) => dispatch(submitPurchaseOrders(purchaseOrders)),
        setPurchaseOrdersSubmitted: (value) => dispatch(setPurchaseOrdersSubmitted(value))
    }
}

export default connect(msp, mdp)(Restock)