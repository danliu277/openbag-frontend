import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inventory extends Component {
  render() {
    return (
        <div>
            Inventory
        </div>
    )
  }
}


const msp = state => {
    return {
        user: state.user
    }
}

const mdp = (dispatch) => {
    return {
    }
}

export default connect(msp, mdp)(Inventory)
