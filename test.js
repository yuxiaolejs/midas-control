const Console = require('./console')
let m = new Console("10.0.10.15")
m.events.on("data", (d) => {
    console.log(d)
})
m.search()

// m.exec(m.methods.ch[0].config.name, "1145")
m.exec(m.methods.ch[0].config.icon,1)
setInterval(() => {
    m.send(["/xremote"])
}, 8000)