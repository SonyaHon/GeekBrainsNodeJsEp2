class Handler {
    static send(payload) {
        Handler.log('Send', payload);
    }
    
    static receive(payload) {
        Handler.log('Receive', payload);
    }
    
    static sign(payload) {
        Handler.log('Sign', payload);
    }
    
    static log(type, payload) {
        console.log(`${type} request`);
        console.log(`Custom needs ${payload}`);
    }
}

module.exports = {
    Handler
}