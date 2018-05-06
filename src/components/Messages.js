import React from 'react'
import { connect } from 'react-redux'

const Messages = ({ className, messages }) => (
  <div className={className}>
    {
      messages.map(({ type, msg }, i) => {

        return (
          <div key={i} className={type === 'alert' ? 'red' : 'turquoise'}>
            {msg}
          </div>
        )
      })
    }
  </div>
)

const mapStateToProps = ({ systemInfo }) => ({ messages: systemInfo.messages })

export default connect(mapStateToProps)(Messages)
