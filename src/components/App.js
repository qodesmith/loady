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
    const darkTheme = 'fw1 bg-black-85 turquoise'
    const lightTheme = 'fw1 black-85'

    document.body.className = darkTheme
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
    const baseClass = 'ba-1px h-25 pa3'
    const cls = `${baseClass}${inAlertStatus ? ' red' : ''}`

    return (
      <div className='pa3 vw-100 vh-100 overflow-h df flex-col'>
        <Graph className='flex-grow-1 mb3 h-75' />
        <Messages className={cls} />
      </div>
    )
  }
}

const mapStateToProps = ({ systemInfo }) => ({
  interval: systemInfo.interval,
  inAlertStatus: systemInfo.inAlertStatus
})
const mapDispatchToProps = dispatch => ({
  loadReceived: num => dispatch(loadReceived(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
