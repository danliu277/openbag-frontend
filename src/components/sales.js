import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchCustomer } from '../action/actionCreator'
import Customer from './customer'

function Sales(props) {
    const [customer, setCustomer] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        // props.signup({ username, password, email })
    }

    return (
        <div>
            <h3>Sales</h3>
            <form onSubmit={onSubmit}>
                <div id="myDropdown" class="dropdown-content">
                    <input type="customer" placeholder="Customer"
                        name="customer"
                        value={customer}
                        onChange={(e) => searchCustomer(e.target.value)} />
                    {props.customers.map(customer => <Customer name={customer.name} />)}
                </div>
                <button variant="primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

const msp = state => {
    return {
        customers: state.customers
    }
}

const mdp = (dispatch) => {
    return {
        searchCustomer: (input) => dispatch(searchCustomer(input))
    }
}

export default connect(msp, mdp)(Sales)
