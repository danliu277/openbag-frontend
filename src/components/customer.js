import React from 'react';

function Customer(props) {
    const { name } = props
    return (
        <a href="#about">{name}</a>
    )
}

export default Customer;