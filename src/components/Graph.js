import React from 'react'
import { connect } from 'react-redux'
import { ResponsiveContainer, LineChart, Line } from 'recharts'

const Graph = ({ className, loads, date }) => {
  return (
    <div className={className}>
      <div>{date}</div>
      <div>test</div>
      <ResponsiveContainer>
        <LineChart width={400} height={100} data={loads}>
          <Line
            xAxisId='time'
            yAxisId='value'
            type='monotone'
            dataKey='value'
            stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const mapStateToProps = ({ systemInfo }) => ({ loads: systemInfo.loads, date: Date.now() })

export default connect(mapStateToProps)(Graph)
