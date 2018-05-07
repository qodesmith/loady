import React from 'react'
import { connect } from 'react-redux'

const centered = 'df justify-center align-items-center'

const Messages = ({ className, messages, theme }) => (
  <div className={className}>
    <h3 className='ma0 mb2'>Messages:</h3>
    <div className={`mono overflow-y-s h-100 ${messages.length ? '' : centered}`}>
      { !!messages.length &&
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
      {
        !messages.length &&
        <div className='gray i'>No messages yet.</div>
      }
    </div>
  </div>
)

const mapStateToProps = ({ systemInfo }) => ({
  messages: systemInfo.messages,
  theme: systemInfo.theme
})

export default connect(mapStateToProps)(Messages)
