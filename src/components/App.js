import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loadReceived } from 'utils/actions'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentWillMount() {
    document.body.className = 'bg-black-85 f4 turquoise fw1'
  }

  componentDidMount() {
    // Every 10 seconds, fetch the CPU load.
    this.interval = setInterval(() => {
      fetch('/load')
        .then(res => res.json())
        .then(({ load }) => this.props.loadReceived(load))
    }, 1000)
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

    return <div>No page yet</div>
  }
}

const mapStateToProps = ({ location }) => ({ location })
const mapDispatchToProps = dispatch => ({
  loadReceived: num => console.log(num) || dispatch(loadReceived(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
