# Loady!

The goal of this project is to create an app that monitors your servers cpu load. How can we do that you ask? Well, don't even _think_ about having access to system stuff like that on the front end. I mean, bro, do you even security? We'll need a sexy back end that pings the things and let's the front end in on all its secrets. Node to the rescue!


## Why?

Because it's fun. Because I can. Because JavaScript, dammit.


## Sanity Check

- [X] What metric _is_ cpu load?
- [X] Find what Node packages can be used to monitor cpu load.
- [ ] ~~FE should look like Jarvis!~~
- [ ] ~~FE should _not_ look like Jarvis. User friendly plz.~~
- [X] Supply multiple themes - dark themes rule!
- [X] BE should have a single route that pings the things & sends it to the FE.


## Requirements

- [X] Display metrics as a history of load over the past 10 minutes.
- [X] Should be in 10s intervals.
- [X] Use something fancy like D3 to display graphy things.
- [X] Things should be updating in real time as the web page is open.
- [X] Whenever the load exceeds 1 for the past 2 minutes on avg., it's alert message time.
- [X] Whenever the load drops below 1 (after an alert) on a 2 minute avg., it's recovered message time.
- [X] Keep a running list of messages visible.
- [X] Write a test for the alerting logic.


## Try It Out

1. Clone this repo
2. `npm i && npm start`
3. Light'em if you got'em


This project was created with [Create New App](https://github.com/qodesmith/create-new-app). [V2](https://github.com/qodesmith/create-new-app/tree/v2) branch, but that's still a WIP. I know, I know. It'll be up on NPM soon. I'm busy here people!
