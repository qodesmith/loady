/*
  How many points should the graph show?
  Since we want to ping the server every 10 seconds,
  and our warning potentially go via a 2 minute evaluation,
  we need at least 12 points. BUT... we want 10 minutes
  worth of data, so that's 60 loads.
*/
const GRAPH_POINTS = 60

/*
  How often should we ping the server?
  While developing, it's helpful to ping more frequently.
  For 'production', this will be 10 seconds.
*/
const INTERVAL = 1250

/*
  Since the graph reads from right to left - right being the most recent -
  the idea was to populate the graph with zeroed-out values.
  `starterLoads` is a helper function that does just that.

  The y-axis contains values which are simply all 0 to start with.
  The x-axis contains time stamps, which this function helps to calculate.
*/
const starterLoads = length => {
  let num = length - 1
  const now = Date.now()

  return [...Array(length)].map(() => ({
    value: 0,
    time: new Date(now - (1000 * num--)).toLocaleTimeString()
  }))
}

const initialState = {
  interval: INTERVAL,
  loads: starterLoads(GRAPH_POINTS)
}

const systemInfo = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_RECEIVED':

      // Keep only the latest N loads in the store.
      return {
        ...state,
        loads: state.loads.slice(1).concat({
          value: action.payload,
          time: new Date().toLocaleTimeString()
        })
      }
    default:
      return state
  }
}

export default systemInfo
