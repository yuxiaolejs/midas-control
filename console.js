const dgram = require('dgram');

function Console() {
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
}
Console.prototype.ca = function(){
    
}

console.log(new Console().ca())