import React from 'react';

const Customer =(props) => {
    const { name, email } = props.customer

    const test = () => {
        props.selectCustomer(props.customer)
    }
    return (
        <p onClick={() => test()}>{name}, {email}</p>
    )
}

export default Customer;