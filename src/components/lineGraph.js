import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTopFive } from '../action/actionCreator'
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineGraph = (props) => {
    const { getTopFive } = props

    useEffect(() => {
        getTopFive()
    }, [getTopFive])

    const options = {
        animationEnabled: true,
        title: {
            text: "Sales"
        },
        axisY: {
            title: "Copies Sold",
            includeZero: false
        },
        toolTip: {
            shared: true
        },
        data: props.topFive.map(record => {
            console.log('record: ', record.game.name)
            return {
                type: 'spline',
                name: record.game && record.game.name,
                showInLegend: true,
                dataPoints: record.sales && record.sales.map(sale => {
                    return {
                        y: sale.sales,
                        label: sale.date
                    }
                })
            }
        })
    }

    return (
        <div>
            {
                console.log(props.topFive.map(record => {
                    return {
                        type: 'spline',
                        name: record.game && record.game.name,
                        showInLegend: true,
                        dataPoints: record.sales && record.sales.map(sale => {
                            return {
                                y: sale.sales,
                                label: sale.date
                            }
                        })
                    }
                }))
            }
            <CanvasJSChart options={options} />
        </div>
    )
}

const msp = state => {
    return {
        topFive: state.topFive
    }
}

const mdp = (dispatch) => {
    return {
        getTopFive: () => dispatch(getTopFive()),
    }
}

export default connect(msp, mdp)(LineGraph)