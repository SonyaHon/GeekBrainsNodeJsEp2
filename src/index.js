const EventEmitter = require('events');
const {Handler} = require('./handler');
const { generateRandomCustomer } = require('./utils');

class MyEventEmitter extends EventEmitter {
    constructor() {
        super();
    }
}

const eventEmitter = new MyEventEmitter();

eventEmitter.on('send', Handler.send);
eventEmitter.on('receive', Handler.receive);
eventEmitter.on('sign', Handler.sign);

let payEventTotal = 0;
function payHandler(payload) {
    console.log('Pay Event',payload)
    payEventTotal++;

    if (payEventTotal >= 3) {
        // eventEmitter.removeListener('pay', payHandler);
        eventEmitter.removeAllListeners('pay');
    }
}

eventEmitter.on('pay', async () => {
    // some heavy operation
    console.log('another handler');
});

eventEmitter.on('pay', payHandler);


const run = async () => {
    const customer = await generateRandomCustomer();
    eventEmitter.emit(customer.type, customer.payload);

    run();
}

run();
