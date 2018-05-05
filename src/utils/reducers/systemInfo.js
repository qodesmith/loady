const initialState = {
  loads: []
}

const systemInfo = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_RECEIVED':
      let loads;
      const freshLoad = { value: action.payload, time: new Date().toLocaleTimeString() }

      if (state.loads.length === 10) {
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
