export const calculateAverage = (loads = [], interval = 10000, minutes = 2) => {
  const pings = Math.round((minutes * 60000) / interval) // How many pings in N minutes.
  const avg = loads.slice(-pings).reduce((acc, { value }) => (acc + value), 0) / pings

  return +avg.toFixed(2)
}
