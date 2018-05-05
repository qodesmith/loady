# Uptime!

The goal of this project is to create an app that monitors your local computers uptime. How can we do that you ask? Well, don't even _think_ about having access to system stuff like that on the front end. I mean, bro, do you even security? We'll need a sexy back end that pings the things and let's the front end in on all its secrets. Node to the rescue!


## Why?

Because it's fun. Because I can. Because JavaScript, dammit.


## Sanity Check

[ ] What metric _is_ system uptime?
[ ] Find what Node packages can be used to monitor system uptime.
[ ] ~~FE should look like Jarvis!~~
[ ] FE should _not_ look like Jarvis. User friendly plz.
[ ] BE should have a single route that pings the things & sends it to the FE.
[ ] Use localStorage to persist data.


## Requirements

[ ] Display metrics as a history of load over the past 10 minutes.
[ ] Should be in 10s intervals.
[ ] Use something fancy like D3 to display graphy things.
[ ] Things should be updating in real time as the web page is open.
[ ] Whenever the load exceeds 1 for the past 2 minutes on avg., it's alert message time.
[ ] Whenever the load drops below 1 (after an alert) on a 2 minute avg., it's recovered message time.
[ ] Keep a running list of messages visible.
[ ] Write a test for the alerting logic.


This project was created with [Create New App](https://github.com/qodesmith/create-new-app). V2 branch, but that's still a WIP. I know, I know. It'll be up on NPM soon. I'm busy here people!
