import React from 'react'
import { connect } from 'react-redux'

const Graph = ({ className, load, date }) => {
  return (
    <div className={className}>
      <div>{date}</div>
      <div>{load}</div>
    </div>
  )
}

const mapStateToProps = ({ systemInfo }) => ({ load: systemInfo.load, date: Date.now() })

export default connect(mapStateToProps)(Graph)
