const methods_template = {
    ch: {
        _dup: 3,
        config: {
            _dup: 2,
            name: {
                a: "/ch/#ch#/config/#config#"
            }
        }
    }
}


function parseMethodParams(method, ...args) {

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
                obj[kys[j]] = getItem(obj[kys[j]], kys[j], variables)
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
    console.log((methods.ch[2].config))
}

getMethods()

module.exports = {
    parseMethodParams
}