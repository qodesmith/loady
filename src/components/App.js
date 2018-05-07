import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loadReceived } from 'actions'
import Graph from 'components/Graph'
import Messages from 'components/Messages'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentWillMount() {
    const themes = {
      dark: 'fw1 bg-black-85 turquoise',
      light: 'fw1 black-85'
    }

    document.body.className = themes[this.props.theme]
  }

  componentDidMount() {
    const { interval, loadReceived } = this.props

    // Fetch the CPU load periodically.
    this.interval = setInterval(() => {
      fetch('/load')
        .then(res => res.json())
        .then(({ load }) => loadReceived(load))
    }, interval)
  }

  // React error handling!
  componentDidCatch(error) {
    clearInterval(this.interval)
    this.setState({ error })
    console.log(error)
  }

  render() {
    if (this.state.error) {
      return (
        <Fragment>
          <h2>Uh oh!</h2>
          <p>Looks like the client has encountered a problem.</p>
          <p>
            Please refresh your browser and try again.
            If this issue persists, scream and run around like you're on fire.
            Or, check the console and see what was logged. I mean either one is fine.
          </p>
        </Fragment>
      )
    }

    const { inAlertStatus } = this.props
    const baseClass = 'ba-1px pa3 h-50 df flex-col'
    const cls = `${baseClass}${inAlertStatus ? ' red' : ''}`

    return (
      <div className='pa3 vw-100 vh-100 overflow-h df flex-col'>
        <Graph className='mb3 h-50' />
        <Messages className={cls} />
      </div>
    )
  }
}

const mapStateToProps = ({ systemInfo }) => ({
  interval: systemInfo.interval,
  inAlertStatus: systemInfo.inAlertStatus,
  theme: systemInfo.theme
})
const mapDispatchToProps = dispatch => ({
  loadReceived: num => dispatch(loadReceived(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
