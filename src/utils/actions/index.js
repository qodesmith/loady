export const loadReceived = num => ({ type: 'LOAD_RECEIVED', payload: num })
export const alert = avg => ({ type: 'ALERT', payload: avg })
export const recover = () => ({ type: 'RECOVER' })
