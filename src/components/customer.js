import React from 'react';

function Customer(props) {
    const { name, email } = props.customer

    const test = () => {
        console.log('Selected')
        props.selectCustomer(props.customer)
    }
    return (
        <a onClick={() => test()}>{name}, {email}</a>
    )
}

export default Customer;