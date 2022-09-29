function encodeParameters(param) {
    if (!param) return false;
    //Second parameter must be the types for following ones
    let typeStr = param[1]
    let upCommingTypes = ['string', 'string']
    if (typeStr) {
        for (let k = 0; k < typeStr.length; k++) {
            if (typeStr[k] == 's') upCommingTypes.push("string")
            if (typeStr[k] == 'i') upCommingTypes.push("int")
            if (typeStr[k] == 'f') upCommingTypes.push("float")
        }
    }
    let bufferOut = []
    for (let i = 0; i < param.length; i++) {
        let currentType = upCommingTypes.shift()
        if (currentType == "string") {
            bufferOut.push(new Buffer.from(param[i]))
            for (let j = 0; j < (4 - param[i].length % 4); j++) {
                bufferOut.push(new Buffer.from([0x00]))
            }
        }
        //ONLY FOR FLOAT
        if (currentType == "float") {
            let b = new Buffer.alloc(4);
            b.fill(0);
            b.writeFloatBE(param[i]);
            bufferOut.push(b)
        }
        if (currentType == "int") {
            let b = new Buffer.alloc(4);
            b.fill(0);
            b.writeIntBE(param[i], 0, 4);
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
                //Convert Float
                let a = slicedArray[i].readFloatBE(0)
                out.push(a)
            }
            if (chunckType == "int") {
                //Convert Int
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
    return out
}
module.exports = {
    encodeParameters,
    decodeParameters
}