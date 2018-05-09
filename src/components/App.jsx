import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loadReceived } from 'actions'
import Graph from 'components/Graph'
import Messages from 'components/Messages'
import Menu from 'components/Menu'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
    this.themes = {
      dark: 'fw1 bg-black-85 turquoise',
      light: 'fw1 black-85'
    }
  }

  componentDidMount() {
    this.setInterval(this.props.interval)
  }

  // React error handling!
  componentDidCatch(error) {
    clearInterval(this.interval)
    this.setState({ error })
    console.log(error)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.interval) {
      this.setInterval(nextProps.interval)
    }
  }

  // Fetch the CPU load periodically.
  setInterval(interval, received) {
    clearInterval(this.interval)

    this.interval = setInterval(() => {
      console.log(interval)
      fetch('/load')
        .then(res => res.json())
        .then(({ load }) => this.props.received(load))
    }, interval)
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
    const themeClass = this.themes[this.props.theme]

    return (
      <div className={`pa3 vw-100 vh-100 overflow-h df flex-col ${themeClass}`}>
        <Menu />
        <Graph className='mb3 h-50 relative' />
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
  received: num => dispatch(loadReceived(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
