const initialState = {
  load: 0
}

const systemInfo = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_RECEIVED':
      return { ...state, load: action.payload }
    default:
      return state
  }
}

export default systemInfo
