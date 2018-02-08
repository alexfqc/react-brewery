[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![CircleCI](https://circleci.com/gh/alexfqc/react-brewery/tree/master.svg?style=shield)](https://circleci.com/gh/alexfqc/react-brewery/tree/master)

# react-brewery
This project simulates a system that controls the temperature of beers inside containers

### Why React?
* It has a great control of DOM using virtual DOM.
* It's based on functional programming.
* Uses the functions of javascript inside of itself.
* I have a great experience with React.
* It's easy to build a MVP with react-create-app, and has the PWA config by default.
* I think that it's a good choice for bigger projects.
* It's the most used front-end framework nowadays.
* It's more flexible with libs (Redux, Apollo, Mobx, only React without global control state and etc).

### Highlights of my code
* It's clean and has standard with eslint rules provided by airbnb.
* It has a great quality with eslint, tests, pre-commit and continous integration (circleci).
* It's based on functional programming, so I have better control of the state of my application and I can debug it easily.

### Questions / Assumptions
* How this system works? This system will be based on front-end application that receives mocked data.
* Where the user will see the information? At computer screen.
* Should work on Internet Explorer? No.
* How the data will be mock? Via function that returns random temperatures.

### Version 2.0
* Use [styled-components](https://github.com/styled-components/styled-components) instead of css for better use with higher order components.
* Create the database with node and [GraphQL](http://graphql.org/learn/) for better performance at mobile devices.
* Create PWA
* Use [Apollo](https://www.apollographql.com/) for manage the state of application and data provided from back-end.
* To create the real system, the [Sigfox](https://www.sigfox.com/en) service would be great to send data from the containers to [AWS](https://aws.amazon.com/pt/)
