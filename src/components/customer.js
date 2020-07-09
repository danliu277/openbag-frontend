import React from 'react';

function Customer(props) {
    const { name, email, id } = props.customer
    return (
        <a href="#about">{name}, {email}</a>
    )
}

export default Customer;