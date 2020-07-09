import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGames, setGames } from '../action/actionCreator'
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
                    </tr>
                </thead>
                <tbody>
                    {props.games.map(game => <Game key={game.id} game={game} />)}
                </tbody>
            </table>
        </div>
    )
}


const msp = state => {
    return {
        games: state.games
    }
}

const mdp = (dispatch) => {
    return {
        getGames: () => dispatch(getGames()),
        resetGames: () => dispatch(setGames([]))
    }
}

export default connect(msp, mdp)(Inventory)
