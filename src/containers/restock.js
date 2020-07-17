import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getUnderstock } from '../action/actionCreator'
import UnderstockGame from '../components/understockGame'

const Restock = (props) => {
    const { getUnderstock, understock } = props

    useEffect(() => {
        getUnderstock()
    }, [getUnderstock])

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
                    </tr>
                </thead>
                <tbody>
                    {props.understock.map((game, index) => {
                        return <UnderstockGame key={game.id} game={game} index={index} />
                    })}

                </tbody>
            </table>
        </div>
    )
}

const msp = state => {
    return {
        understock: state.understock
    }
}

const mdp = (dispatch) => {
    return {
        getUnderstock: () => dispatch(getUnderstock())
    }
}

export default connect(msp, mdp)(Restock)