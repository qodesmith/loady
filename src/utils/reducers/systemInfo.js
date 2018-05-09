/*
  How often should we ping the server?
  While developing, it's helpful to ping more frequently.
  For 'production', this will be 10 seconds.
*/
const INTERVAL = 10000

/*
  What time span do we want to average over?
  For 'production' it's 2 minutes.
*/
const AVG_LENGTH = 120000

/*
  How many points should the graph show?
  Take however often we're pinging the server (INTERVAL),
  and divide it by the the length of time we want to average over.
*/
const GRAPH_POINTS = AVG_LENGTH / INTERVAL

/*
  Whats the threshold?
  For 'production', it's 1, but when developing,
  it's nice to set this lower to test alerting.
*/
const THRESHOLD = 1

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
    time: timeDate(now - (1000 * num--))
  }))
}

var timeDate = (time = Date.now()) => new Date(time).toLocaleTimeString()

const initialState = {
  theme: 'dark',
  inAlertStatus: false,
  interval: INTERVAL,
  threshold: THRESHOLD,
  messages: [],
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
          time: timeDate()
        })
      }
    case 'ALERT':
      return {
        ...state,
        inAlertStatus: true,
        messages: [{
          msg: `${timeDate()}: high load (${action.payload}) detected`,
          type: 'alert'
        }].concat(state.messages)
      }
    case 'RECOVER':
      return {
        ...state,
        inAlertStatus: false,
        messages: [{
          msg: `${timeDate()}: system recovered from a high load`,
          type: 'recover'
        }].concat(state.messages)
      }
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload }
    case 'CHANGE_INTERVAL':
      return { ...state, interval: action.payload }
    default:
      return state
  }
}

export default systemInfo
