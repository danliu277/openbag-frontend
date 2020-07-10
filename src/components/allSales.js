import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSales } from '../action/actionCreator';
// import { setCart } from '../action/actionCreator';

function AllSales(props) {
    const { getSales } = props

    useEffect(() => {
        getSales()
    }, [getSales])

    return (
        <div>
            <h3>Sales</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Game</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {props.games.map(game => {
                        return <Game key={game.id} game={game} />
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

const msp = state => {
    return {
        sales: state.sales
    }
}

const mdp = (dispatch) => {
    return {
        // setCart: (cart) => dispatch(setCart(cart))
        getSales: () => dispatch(getSales())
    }
}

export default connect(msp, mdp)(AllSales)
