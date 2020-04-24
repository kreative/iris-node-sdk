require('dotenv').config();
const Iris = require("./lib/iris");

const iris = new Iris(process.env.AIDN, process.env.SK);

iris.error('test three', {code:2}, ["#test"]);