import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGamesActionCreater, setGamesCreator } from '../action/actionCreator'
import Game from './game';

function Inventory(props) {
    useEffect(() => {
        if (!props.games || props.games.length === 0)
            props.getGames()
        // return () => {
        //     props.resetGames()
        // }
    }, [props])


    const warning = () => {
        const audio = new Audio(process.env.PUBLIC_URL + '/warning.mp3')
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(_ => {
                    console.log("audio played auto");
                })
                .catch(error => {
                    console.log("playback prevented");
                });
        }
    }

    const check = () => {
        const warn = props.games.find(game => game.stock < game.threshold)
        if(warn)
            warning()
    }

    return (
        <div>
            {check()}
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
        getGames: () => dispatch(getGamesActionCreater()),
        resetGames: () => dispatch(setGamesCreator([]))
    }
}

export default connect(msp, mdp)(Inventory)
