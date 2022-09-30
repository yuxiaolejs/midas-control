const dgram = require('dgram');
const EventEmitter = require("events").EventEmitter
const protocol = require('./protocol')
const methods = require('./method')

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
    this.client.on("message", (d, i) => {
        let data = protocol.decodeParameters(d)
        this.events.emit("data", data, i)
    })
}
Console.prototype.send = function (param) {
    let data = protocol.encodeParameters(param)
    if (!data) return false;
    this.client.send(data, 10023, this.server, (err, bytes) => { });
}

Console.prototype.search = function () {
    let data = protocol.encodeParameters(["/xinfo"])
    this.client.send(data, 10023, "255.255.255.255", (err, bytes) => { });
}

Console.prototype.exec = function (...agrs) {
    let data = protocol.encodeParameters(methods.parseMethodParams(...agrs))
    if (!data) return false;
    this.client.send(data, 10023, this.server, (err, bytes) => { });
}

Console.prototype.methods = methods.getMethods()
Console.prototype.methodList = methods.getMethodList()

module.exports = Console