const dgram = require('dgram');

const target = "10.0.10.15"

var client = dgram.createSocket('udp4');

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true);
});


client.bind((d)=>{
    console.log(d)
})

//setName buffToSend.push(new Buffer.from('/ch/01/config/name\0\0,s\0\0unics\0\0\0'))

//setFader
// buffToSend.push(new Buffer.from('/ch/01/mix/fader\0\0\0\0,f\0\0'))
// buffToSend.push(new Buffer.from([0x3f, 0x7f, 0x00, 0x00]))
//endSetFader

function setFader(ch, val) {
    ch = ch < 10 ? "0" + ch : ch
    let buffToSend = []
    let b = new Buffer.alloc(4);
    b.fill(0);
    b.writeFloatBE(val);
    buffToSend.push(new Buffer.from('/ch/' + ch + '/mix/fader\0\0\0\0,f\0\0'))
    buffToSend.push(b)
    let buff = Buffer.concat(buffToSend)
    return buff
}





// buffToSend.push(new Buffer.from('0.8\0'))
// client.send(encodeParameters(['/ch/01/mix/fader']), 10023, target, function (err, bytes) {});
client.send(encodeParameters(['/config/chlink/1-2']), 10023, target, function (err, bytes) { });
client.send(encodeParameters(['/ch/01/mix/fader', ',f', 0.1]), 10023, target, function (err, bytes) { });
// for (i = 0; i < 8; i++) {
//     client.send(setFader(i + 1, 0), 10023, target, function (err, bytes) {
//     });
// }
client.on("message", (d) => {
    decodeParameters(d)
})
// client.send(encodeParameters(["/xinfo", ","]), 10023, "255.255.255.255", function (err, bytes) {
// });

