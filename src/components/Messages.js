import React from 'react'
import { connect } from 'react-redux'

const Messages = ({ className, messages, theme }) => (
  <div className={className}>
    {
      messages.map(({ type, msg }, i) => {
        const color = theme === 'light' ? 'black-85' : 'turquoise'
        const cls = `mono mb2 ${type === 'alert' ? 'red' : color}`
        return (
          <div key={i} className={cls}>
            {msg}
          </div>
        )
      })
    }
  </div>
)

const mapStateToProps = ({ systemInfo }) => ({
  messages: systemInfo.messages,
  theme: systemInfo.theme
})

export default connect(mapStateToProps)(Messages)
