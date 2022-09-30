const Console = require('./console')
let m = new Console("10.0.10.15")
m.events.on("data", (d) => {
    console.log(d)
    console.log(m.methodList.indexOf(d[0]))
})
m.search()
const fs = require("fs")

const methods = require("./methods.json")
// m.exec(m.methods.ch[0].config.name, "1145")
fs.writeFile("./methods.json", JSON.stringify(m.methods), (e) => {
    if (e) console.log(e)
})
m.exec(methods.headamp[0].gain)
m.exec(m.methods.ch[0].mix.fader, 1)
setInterval(() => {
    m.send(["/xremote"])
}, 8000)