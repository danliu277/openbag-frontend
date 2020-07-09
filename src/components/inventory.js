import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGames, setGames, setCart } from '../action/actionCreator'
import Game from './game';

function Inventory(props) {
    useEffect(() => {
        if (!props.games || props.games.length === 0)
            props.getGames()
        return () => {
            if (props.games && props.games.length > 0)
                props.resetGames()
        }
    }, [props])

    return (
        <div>
            <h3>Inventory</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Sales Price</th>
                        <th scope="col">Vendor Cost</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.games.map(game => { 
                        let inCart = false
                        if(props.cart.find(i => i.id === game.id))
                            inCart = true
                        return <Game key={game.id} game={game} inCart={inCart} /> 
                    })}
                </tbody>
            </table>
        </div>
    )
}


const msp = state => {
    return {
        games: state.games,
        cart: state.cart
    }
}

const mdp = (dispatch) => {
    return {
        getGames: () => dispatch(getGames()),
        resetGames: () => dispatch(setGames([])),
        setCart: (cart) => dispatch(setCart(cart))
    }
}

export default connect(msp, mdp)(Inventory)
