import React from 'react'
import { connect } from 'react-redux'
import ReactHighcharts from 'react-highcharts'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// http://recharts.org
// { value: 0.24, time: '6:49:28 PM' }

const Graph = ({ className, loads, date }) => {
  return (
    <div className={className}>

      {/* Defaults to 100% width & height. */}
      <ResponsiveContainer>
        <LineChart data={loads}>
          <XAxis dataKey='time' />
          <YAxis domain={[0, 0.5]} width={25} />
          <CartesianGrid strokeDasharray='3 3' stroke='#363636' />
          <Tooltip />
          {/*<Legend />*/}
          <Line
            type='monotone'
            dataKey='value'
            stroke='#8884d8'
            activeDot={{r: 8}}
            isAnimationActive
            animationDuration={250}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


const mapStateToProps = ({ systemInfo }) => ({ loads: systemInfo.loads })

export default connect(mapStateToProps)(Graph)
