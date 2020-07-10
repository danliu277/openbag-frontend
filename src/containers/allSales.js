import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSales } from '../action/actionCreator';
import Sale from '../components/sale';

const  AllSales = (props) => {
    const { getSales } = props

    useEffect(() => {
        getSales()
    }, [getSales])

    return (
        <div>
            <h3>Sales</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Game</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Individual Price</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sales.map(sale => {
                        return <Sale key={sale.id} sale={sale} />
                    })}
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${
                            props.sales.reduce((accumulator,sale) => {
                                return (sale.quantity * sale.game.sales_price) + accumulator
                            }, 0)
                        }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const msp = state => {
    return {
        sales: state.sales
    }
}

const mdp = (dispatch) => {
    return {
        getSales: () => dispatch(getSales())
    }
}

export default connect(msp, mdp)(AllSales)
