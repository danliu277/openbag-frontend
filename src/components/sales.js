import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchCustomer } from '../action/actionCreator'
import Customer from './customer'

function Sales(props) {
    const [customer, setCustomer] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        // props.signup({ username, password, email })
    }

    const customerChange = (input) => {
        setCustomer(input)
        if (input)
            props.searchCustomer(input)
    }

    const selectCustomer = (customer) => {
        setCustomer(`${customer.name}, ${customer.email}`)
        setSelectedCustomer(customer.id)
    }

    return (
        <div>
            <h3>Sales</h3>
            <form onSubmit={onSubmit}>
                <div id="myDropdown" className="dropdown-content">
                    <label>
                        Customer:
                    </label>
                    <input type="text" placeholder="Customer" className="customer-input"
                        name="customer"
                        value={customer}
                        onChange={(e) => customerChange(e.target.value)} />
                    {props.customers.map(customer => <Customer key={customer.id} customer={customer} selectCustomer={selectCustomer} />)}
                </div>
                <div>
                    <h5>Game List</h5>
                    <div>
                        {
                            props.cart.map(game => <p key={game.id}>{game.name}</p>)
                        }
                    </div>
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
        customers: state.customers,
        user: state.user,
        cart: state.cart
    }
}

const mdp = (dispatch) => {
    return {
        searchCustomer: (input) => dispatch(searchCustomer(input))
    }
}

export default connect(msp, mdp)(Sales)
