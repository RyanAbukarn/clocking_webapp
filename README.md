# Clock App
## _A work-shift time tracker for employees_

[![N|Solid](https://cdn-media-1.freecodecamp.org/images/YPGVGgxYKzPpRZzTZIgfWgTvQ4T0E8zaLpkZ)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

 ## Live Hosted Application  Link
 
 http://ec2-54-176-217-232.us-west-1.compute.amazonaws.com:5000/
 
 Test Data for deployed application- 
-  email: test@test.com
-  password: 1234

## Installation

Clock App requires [Node.js](https://nodejs.org/) to run.

Clone github repository and install packages

```sh
git clone https://github.com/RyanAbukarn/clocking_webapp.git

```
To run the frontend code
```sh
cd app
npm install
npm start
```
To setup database configuration:
- Install MySQL and SequelPro(or any MySQL database management application) 
- Import the SQL database from the `server/db.sql`
- Update user, password and database values based on your database configurations in `server/config.js` as shown below

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clocking_app",
});
```
To run the backend code: Run the commands below in another terminal 
```sh
cd server
npm install
npm run devStart
```
## Test Data
Test Data 1
- email : test@test.com
- password : 1234

Test Data 2
- email : test1@test.com
- password : 1234

## Features

- Register and Sign In
- Clock-In/Clockout button to track work hours
- Timesheets to display clock-in/clock-out and total hours worked
- Teams to display status of all team members
