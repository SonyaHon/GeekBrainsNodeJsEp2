const { Customer } = require("./customer");
const { REQUEST_TYPES } = require("./request-types");

const generateRandomIntInRange = (minVal, maxVal)  => {
    let min = Math.ceil(minVal);
    let max = Math.floor(maxVal);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const delay = (ms = 0) => {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}

const generateRandomCustomer = async () => {
    const timeout = generateRandomIntInRange(1, 5) * 1000;
    await delay(timeout);
    return new Customer(REQUEST_TYPES[generateRandomIntInRange(0, REQUEST_TYPES.length - 1)]);
}

module.exports = {
    generateRandomIntInRange,
    delay,
    generateRandomCustomer,
}