const now = Date.now()
const initialState = {
  interval: 3000,
  loads: [7,6,5,4,3,2,1,0].map(num => ({
    time: new Date(now - (1000 * num)).toLocaleTimeString(),
    value: 0
  }))
}

const systemInfo = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_RECEIVED':
      const freshLoad = { value: action.payload, time: new Date().toLocaleTimeString() }
      let loads;

      if (state.loads.length === 8) {
        loads = state.loads.slice(1).concat(freshLoad)
      } else {
        loads = state.loads.concat(freshLoad)
      }

      return { ...state, loads }
    default:
      return state
  }
}

export default systemInfo
