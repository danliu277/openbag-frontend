import React, { useState } from 'react';

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
                <input type="customer" placeholder="Customer"
                    name="customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)} />
                <button variant="primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Sales
