import React from 'react';

function Sale(props) {
    const { id, employee, customer, game, quantity } = props.sale

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{employee && employee.name}</td>
            <td>{customer && customer.name}</td>
            <td>{game && game.name}</td>
            <td>{quantity}</td>
            <td>{game && game.sales_price}</td>
            <td>${game && game.sales_price * quantity}</td>
        </tr>
    )
}

export default Sale
