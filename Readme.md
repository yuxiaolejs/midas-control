# Intro
## A sdk for midas mixing consoles, also can be used for X32
### This repo is still TESTING, not stable enough for production use
* Connects using ethernet
* Implements OSC protocol
* Designed for & Tested on Midas-M32R Live

# Installation
```{bash}
npm i midas-control
```

# Short Demo
```{javascript}
const Midas = require("midas-control")
let m32 = new Midas("10.0.10.15") //Connect to console via udp protocol

//Listen on data sent by the console
m.events.on("data", (d) => {
    console.log(d) //Parsed method data here
})

//renew subscription, expires in 10s
function renew() {
    m.send(["/xremote"])  //Renews subscription to control flow of the console
    m.send(["/meters", ",si", "/meters/0", 1])  //Renews subscription to meter values (level)
}

renew()
setInterval(() => {
    renew()
}, 8000) //renew every 8 seconds to prevent data loss
```

# Methods
## Midas(string ipAddress)
```{javascript}
let midas = new Midas("10.0.10.15") //returns an midas object with 
```

## midas.events
A event emitter which calls data event everytime there's incoming message from the console
```{javascript}
m.events.on("data", (d) => {
    if (d[0] == "/meters/0") {
        console.log(d[2][16])
    } else {
        console.log(d)
    }
    // console.log(m.methodList.indexOf(d[0])) //Check if this method is supported by the methods.json
})
```

## midas.search()
Execute a search for consoles by broadcasting /xinfo
```{javascript}
m.search() // returns nothing, if there're any consoles, they will reply via data event
```

## midas.send(Array params[])
```{javascript}
// Input array: data to midas, params as array elements
// Input format: [functionName,dataTypes,data1,data2,...]
midas.send(["/meters", ",si", "/meters/0", 1]) // returns nothing
```
For all function names and params, please refer to [OSC api document](https://wiki.munichmakerlab.de/images/1/17/UNOFFICIAL_X32_OSC_REMOTE_PROTOCOL_%281%29.pdf) (This is what I used, for reference only).

Or, you can just use the exec method (see below) instead

## midas.exec(method, param1, param2, ...)
```{javascript}
midas.exec(midas.methods.ch[0].mix.fader, 1)// returns nothing
```
Same as above, but parsed methods into an object for easier access.

You can print (method).params to see required data types

Eg. console.log(midas.methods.ch[0].mix.fader.params)

Note that midas.methods is a static object containing only strings, so ...

### To enable your IDE for giving you hints on possible methods:
Please save midas.methods into an object or json file for IDEs to access
Eg.
```{javascript}
let midas = new Midas("10.0.10.15") //Connect to console via udp protocol

//Save a copy of possible methods into current directory
fs.writeFile("./methods.json", JSON.stringify(midas.methods), (e) => { 
    if (e) console.log(e)
})

//Then, everytime you want to call a method, just
const methods = require("./methods.json")
// ... and once you enter methods. the IDE will give you possible choices
```

# Known Issues
* Some of the commands will be dropped if sent at the same time

# About
* This project is not finished yet, any new ideas can be contributed to github
* I will create the github page ASAP

# TODO
* Function call to console using promise
* Return value validation
* Command queue