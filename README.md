# Weather-Journal App Project

## Table of Contents

- [Project Description](#description)
- [Usage](#usage)
- [Instructions](#instructions)

## Project Description

This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App. Once user enters US Zip Code and "How are you feeling?," they can click on Submit button which has an eventListener attached to it and triggers an API call to OpenWeatherMap API to retrieve temperature data of the entered ZIP code.The UI is dynamically updated with temperature at the requested ZIP code, current date and feelings of the user. This project uses Node environment with Express, GET and POST routes, Fetch API and also acceses HTML elements with JS and set their properties dynamically.

## Usage

This web application can be used to retrive current temperature information based on ZIP code.

## Instructions

1. Open the project and in the terminal, start the node server by running `node server.js`.
2. In the web browser, open URL `http://localhost:8000/`.
3. Enter any US ZIP code and answer "How are you feeling today?, click `Generate`.
4. The UI will display date, temperature and your feelings.
