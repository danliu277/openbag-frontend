import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllVendors, getGames, setPurchaseOrders, setGames } from '../action/actionCreator'
import StockGame from '../components/stockGame'

const Restock = (props) => {
    const { getAllVendors, games, getGames, resetPurchaseOrders, resetGames } = props

    useEffect(() => {
        getAllVendors()
        getGames()
        return (() => {
            resetPurchaseOrders()
            resetGames()
        })
    }, [getAllVendors, getGames, resetPurchaseOrders, resetGames])

    const onClick = () => {
        console.log(props.purchaseOrders)
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
                        return <StockGame key={index} game={game} index={index} />
                    })}
                </tbody>
            </table>
            <button onClick={() => onClick()}>Restock</button>
        </div>
    )
}

const msp = state => {
    return {
        games: state.games,
        purchaseOrders: state.purchaseOrders
    }
}

const mdp = (dispatch) => {
    return {
        getAllVendors: () => dispatch(getAllVendors()),
        getGames: () => dispatch(getGames()),
        resetGames: () => dispatch(setGames([])),
        resetPurchaseOrders: () => dispatch(setPurchaseOrders([])),
    }
}

export default connect(msp, mdp)(Restock)