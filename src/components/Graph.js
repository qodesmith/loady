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

// { value: 0.24, time: '6:49:28 PM' }

const Graph = ({ className, loads, date }) => {
  return (
    <div className={className}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={loads}>
          <XAxis dataKey='time' />
          <YAxis domain={[0, 0.5]} width={25} />
          {/*<CartesianGrid strokeDasharray='3 3'/>*/}
          <Tooltip/>
          {/*<Legend />*/}
          <Line type='monotone' dataKey='value' stroke='#8884d8' activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


const mapStateToProps = ({ systemInfo }) => ({ loads: systemInfo.loads })

export default connect(mapStateToProps)(Graph)
