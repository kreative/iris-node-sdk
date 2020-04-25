require('dotenv').config();
const Iris = require("./index");

const iris = new Iris(process.env.AIDN, process.env.SK);

iris.error('test 5555', {code:2}, ["#test"]);