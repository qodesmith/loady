/*
  Alert Watch!

  2 conditions:
    * Whenever the load exceeds 1 for the past 2 minutes on avg., it's alert message time.
    * Whenever the load drops below 1 (after an alert) on a 2 minute avg.,
      it's recovered message time.
*/

const alertWatch = store => next => action => {
  next(action) // Actions get passed through by default.

  // We'll trigger calculating alerts each time the server is pinged.
  if (action.type !== 'LOAD_RECEIVED') return

  const { loads } = store.getState().systemInfo

  /*
    Get the average of the past 2 minutes worth of loads.
    10 second pings, 6 pings a minute, 12 pings in 2 minutes.
  */
  const avg = loads.slice(-12).reduce((acc, { value }) => (acc + value), 0) / 12

  console.log('AVG:', avg)
}

export default alertWatch
