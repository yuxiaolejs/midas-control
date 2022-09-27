const dgram = require('dgram');
const EventEmitter = require("events").EventEmitter
const protocol = require('./protocol')

function Console(server) {
    this.server = server
    EventEmitter.call(this)
    this.events = new EventEmitter()
    this.client = dgram.createSocket('udp4');
    let _this = this
    this.client.on('listening', function () {
        let address = _this.client.address();
        console.log('UDP listening on ' + address.address + ":" + address.port);
        _this.client.setBroadcast(true);
    });
    this.client.bind((e) => {
        if (e) console.log(e)
    })
    this.client.on("message", (d) => {
        let data = protocol.decodeParameters(d)
        this.events.emit("data", data)
    })
}
Console.prototype.send = function (param) {
    let data = protocol.encodeParameters(param)
    this.client.send(data, 10023, this.server, (err, bytes) => { });
}

module.exports = Console