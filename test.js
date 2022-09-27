const Console = require('./console')
let m = new Console("10.0.10.15")
m.events.on("data", (d) => {
    console.log(d)
})
setInterval(() => {
    m.send(["/xremote"])
}, 8000)