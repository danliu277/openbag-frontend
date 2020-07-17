import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getUnderstock } from '../action/actionCreator'

const Restock = (props) => {
    const { getUnderstock } = props

    useEffect(() => {
        getUnderstock()
    }, [getUnderstock])

    return (
        <div>
            <h3>Restock</h3>
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