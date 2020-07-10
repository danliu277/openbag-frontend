import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchCustomer, setCustomers, createSales } from '../action/actionCreator'
import Customer from './customer'

function CreateSales(props) {
    const [customer, setCustomer] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        let sales = {
            employee_id: props.user && props.user.id,
            customer_id: selectedCustomer && selectedCustomer.id,
            games: props.cart
        }
        props.createSales(sales)
    }

    const customerChange = (input) => {
        setCustomer(input)
        if (input)
            props.searchCustomer(input)
    }

    const selectCustomer = (customer) => {
        setCustomer('')
        setSelectedCustomer(customer)
        props.resetCustomers()
    }

    return (
        <div>
            <h3>Sales</h3>
            <form onSubmit={onSubmit}>
                <h5>
                    Search Customer
                    </h5>
                <div id="myDropdown" className="dropdown-content">
                    <input type="text" placeholder="Customer" className="customer-input"
                        name="customer"
                        value={customer}
                        onChange={(e) => customerChange(e.target.value)} />
                    {props.customers.map(customer => <Customer key={customer.id} customer={customer} selectCustomer={selectCustomer} />)}
                </div>
                <h5>
                    Customer
                </h5>
                <p>
                    {selectedCustomer && selectedCustomer.name} {selectedCustomer && selectedCustomer.email}
                </p>
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
        searchCustomer: (input) => dispatch(searchCustomer(input)),
        resetCustomers: () => dispatch(setCustomers([])),
        createSales: (sales) => dispatch(createSales(sales)),
    }
}

export default connect(msp, mdp)(CreateSales)