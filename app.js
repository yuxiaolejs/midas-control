const dgram = require('dgram');

const target = "10.0.10.15"

var client = dgram.createSocket('udp4');

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true);
});

client.bind(10434, function () {
    client.setBroadcast(true);
});

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

function encodeParameters(param) {
    let bufferOut = []
    for (let i = 0; i < param.length; i++) {
        if (typeof (param[i]) == "string") {
            let intVal = parseInt(param[i])
            //Is a INT?
            if (isNaN(intVal)) {
                //NO
                bufferOut.push(new Buffer.from(param[i]))
                for (let j = 0; j < (4 - param[i].length % 4); j++) {
                    bufferOut.push(new Buffer.from([0x00]))
                }
            } else {
                //YES
                let b = new Buffer.alloc(4);
                b.fill(0);
                b.writeIntBE(intVal, 0, 4);
                bufferOut.push(b)
                console.log(b)
            }
        }
        //ONLY FOR FLOAT
        if (typeof (param[i]) == "number") {
            let b = new Buffer.alloc(4);
            b.fill(0);
            b.writeFloatBE(param[i]);
            bufferOut.push(b)
        }
    }
    return Buffer.concat(bufferOut)
}

function decodeParameters(param) {
    let slicedArray = []
    let arrayBuffer = []
    let out = []
    let upCommingTypes = []
    for (let i = 0; i < param.length; i++) {
        arrayBuffer.push(param[i])
        if (arrayBuffer.length == 4) {
            slicedArray.push(new Buffer.from(arrayBuffer))
            arrayBuffer.length = 0
        }
    }
    for (let i = 0; i < slicedArray.length; i++) {
        if (upCommingTypes.length > 0) {
            //Means this chunck is not string
            let chunckType = upCommingTypes.shift()
            if (chunckType == "string") {
                //String again
                for (i = i; i < slicedArray.length; i++) {
                    for (let j = 0; j < slicedArray[i].length; j++) {
                        if (slicedArray[i][j] != 0x00) {
                            arrayBuffer.push(slicedArray[i][j])
                        }
                    }
                    if (slicedArray[i][3] == 0x00) {
                        //Process end of the string
                        let str = (new Buffer.from(arrayBuffer)).toString()
                        out.push(str)
                        arrayBuffer.length = 0
                    }
                }
            }
            if (chunckType == "float") {
                let a = slicedArray[i].readFloatBE(0)
                out.push(a)
            }
            if (chunckType == "int") {
                let a = slicedArray[i].readIntBE(0, 4)
                out.push(a)
            }
            //Skip default string processing
            continue;
        }
        //Assume this chunck is string
        for (let j = 0; j < slicedArray[i].length; j++) {
            if (slicedArray[i][j] != 0x00) {
                arrayBuffer.push(slicedArray[i][j])
            }
        }
        if (slicedArray[i][3] == 0x00) {
            //Process end of the string
            let str = (new Buffer.from(arrayBuffer)).toString()
            out.push(str)
            if (str.indexOf(",") == 0) {
                //Capture upcomming data types
                for (let k = 0; k < str.length; k++) {
                    if (str[k] == 's') upCommingTypes.push("string")
                    if (str[k] == 'i') upCommingTypes.push("int")
                    if (str[k] == 'f') upCommingTypes.push("float")
                }
            }
            arrayBuffer.length = 0
        }
    }
    console.log(out)

}



// buffToSend.push(new Buffer.from('0.8\0'))
// client.send(encodeParameters(['/ch/01/mix/fader']), 10023, target, function (err, bytes) {});
client.send(encodeParameters(['/config/chlink/1-2']), 10023, target, function (err, bytes) { });
// for (i = 0; i < 8; i++) {
//     client.send(setFader(i + 1, 0), 10023, target, function (err, bytes) {
//     });
// }
client.on("message", (d) => {
    decodeParameters(d)
})
// client.send(encodeParameters(["/xinfo", ","]), 10023, "255.255.255.255", function (err, bytes) {
// });

