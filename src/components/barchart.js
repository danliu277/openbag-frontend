import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3';

const BarChart = () => {
    const [data, setData] = useState([25, 30, 45, 60, 0])
    const svgRef = useRef()

    useEffect(() => {
        const svg = select(svgRef.current)
        svg
            .selectAll("circle")
            .data(data)
            .join("circle")
            .attr('r', value => value)
            .attr('cx', value => value * 2)
            .attr('cy', value => value * 2)
            .attr('stroke', 'red')
    }, [data])

    return (
        <div id="chart">
            <svg ref={svgRef} />
        </div>
    )
}


export default BarChart;