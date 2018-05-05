// http://blog.scoutapp.com/articles/2009/07/31/understanding-load-averages

// const { execSync } = require('child_process')
// execSync('uptime', { stdio: 'inherit' })

const si = require('systeminformation')

async function load(req, res) {
  si.currentLoad().then(({ avgload }) => res.json({ load: avgload }))
}

module.exports = load
