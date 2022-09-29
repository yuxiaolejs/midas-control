const methods_template = {
    ch: {
        _dup: 32,
        config: {
            name: {
                method: "/ch/#ch#/config/name",
                params: "s"
            },
            icon: {
                method: "/ch/#ch#/config/icon",
                params: "i"
            }
        }
    }
}


function parseMethodParams(method, ...args) {
    let methodTypes = []
    for (let k = 0; k < method.params.length; k++) {
        if (method.params[k] == 's') methodTypes.push("string")
        if (method.params[k] == 'i') methodTypes.push("number")
        if (method.params[k] == 'f') methodTypes.push("number")
    }
    if (args.length != methodTypes.length) {
        console.log(new Error("Type Error: " + method.method + " requires " + methodTypes.length + " arguments but got " + args.length))
        return false;
    }

    let output = [method.method, "," + method.params]
    for (let i = 0; i < args.length; i++) {
        if (typeof (args[i]) != methodTypes[i]) {
            console.log(new Error("Type Error: " + method.method + " requires " + methodTypes[i] + " but got " + typeof (args[i])))
            return false;
        }
        output.push(args[i])
    }
    return output
}

function getItem(obj, key, variables) {
    obj = Object.assign({}, obj)
    if (!variables) variables = {}
    // console.log(obj, key)
    if (obj._dup && obj._dup > 0) {
        let obj_list = []
        for (let j = 0; j < obj._dup; j++) {
            variables["#" + key + "#"] = j

            let _obj = Object.assign({}, obj)
            _obj._dup = -1
            let newItem = getItem(_obj, key, Object.assign({}, variables))
            // newItem.variables = Object.assign({}, variables)
            obj_list.push(newItem)
        }
        return obj_list
    } else {
        let kys = Object.keys(obj)
        for (let j = 0; j < kys.length; j++) {
            if (typeof (obj[kys[j]]) == "object") {
                obj[kys[j]] = getItem(obj[kys[j]], kys[j], Object.assign({}, variables))
            }
            if (typeof (obj[kys[j]]) == "string") {
                let var_kys = Object.keys(variables)
                for (let v = 0; v < var_kys.length; v++) {
                    variables[var_kys[v]] += 1
                    if (variables[var_kys[v]] < 10) {
                        variables[var_kys[v]] = "0" + variables[var_kys[v]]
                    }
                    let source = "" + var_kys[v]
                    let target = "" + variables[var_kys[v]]
                    obj[kys[j]] = obj[kys[j]].replace(source, target)
                    // console.log("/ch/#ch#/config/#config#".replace(source, target))
                }
            }
        }
        return obj
    }
}

function getMethods() {
    let keys = Object.keys(methods_template)
    let methods = {}
    for (i = 0; i < keys.length; i++) {
        methods[keys[i]] = getItem(methods_template[keys[i]], keys[i])
    }
    return methods
}


module.exports = {
    getMethods,
    parseMethodParams
}