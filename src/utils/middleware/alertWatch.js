/*
  Alert Watch!

  2 conditions:
    * Whenever the load exceeds 1 for the past 2 minutes on avg., it's alert message time.
    * Whenever the load drops below 1 (after an alert) on a 2 minute avg.,
      it's recovered message time.
*/

import { alert, recover } from 'actions'


const alertWatch = store => next => action => {
  next(action) // Actions get passed through by default.

  // We'll trigger calculating alerts each time the server is pinged.
  if (action.type !== 'LOAD_RECEIVED') return

  const { loads, inAlertStatus, threshold, interval } = store.getState().systemInfo

  // Get the average of the past 2 minutes worth of loads.
  const avg = calculateAverage(loads, interval, .2)
  console.log('AVG:', avg)

  // Alert or recover.
  if (inAlertStatus) {
    avg < threshold && store.dispatch(recover())
  } else if (avg > threshold) {
    store.dispatch(alert(avg))
  }
}

export const calculateAverage = (loads = [], interval = 10000, minutes = 2) => {
  const pings = Math.round((minutes * 60000) / interval) // How many pings in 2 minutes
  const avg = loads.slice(-pings).reduce((acc, { value }) => (acc + value), 0) / pings

  return +avg.toFixed(2)
}

export default alertWatch
