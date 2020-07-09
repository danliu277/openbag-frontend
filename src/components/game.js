import React from 'react';

function Game(props) {
    const { id, name, genre, sales_price, vendor_cost, stock, threshold } = props.game;

    return (
        <tr className={stock < threshold ? 'table-danger' : undefined}>
            <th scope="row">{stock < threshold && <i className="fa fa-warning" style={{ color: "red" }}></i>}{id}</th>
            <td>{name}</td>
            <td>{genre}</td>
            <td>{sales_price}</td>
            <td>{vendor_cost}</td>
            <td>{stock}</td>
            <td>
                {
                    props.inCart ?
                    <button><i class="fa fa-minus" aria-hidden="true"></i></button> :
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                }
            </td>
        </tr>
    )
}

export default Game
