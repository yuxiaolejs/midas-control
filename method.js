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
            },
            color: {
                method: "/ch/#ch#/config/color",
                params: "i"
            },
            source: {
                method: "/ch/#ch#/config/source",
                params: "i"
            }
        },
        delay: {
            on: {
                method: "/ch/#ch#/delay/on",
                params: "i"
            },
            time: {
                method: "/ch/#ch#/delay/time",
                params: "f"
            }
        },
        preamp: {
            trim: {
                method: "/ch/#ch#/preamp/trim",
                params: "f"
            },
            invert: {
                method: "/ch/#ch#/preamp/invert",
                params: "i"
            },
            hpon: {
                method: "/ch/#ch#/preamp/hpon",
                params: "i"
            },
            hpslope: {
                method: "/ch/#ch#/preamp/hpslope",
                params: "i"
            },
            hpf: {
                method: "/ch/#ch#/preamp/hpf",
                params: "f"
            },
        },
        gate: {
            on: {
                method: "/ch/#ch#/gate/on",
                params: "i"
            },
            mode: {
                method: "/ch/#ch#/gate/mode",
                params: "i"
            },
            thr: {
                method: "/ch/#ch#/gate/thr",
                params: "f"
            },
            range: {
                method: "/ch/#ch#/gate/range",
                params: "f"
            },
            attack: {
                method: "/ch/#ch#/gate/attack",
                params: "f"
            },
            hold: {
                method: "/ch/#ch#/gate/hold",
                params: "f"
            },
            release: {
                method: "/ch/#ch#/gate/release",
                params: "f"
            },
            keysrc: {
                method: "/ch/#ch#/gate/keysrc",
                params: "i"
            },
            filter: {
                on: {
                    method: "/ch/#ch#/gate/filter/on",
                    params: "i"
                },
                type: {
                    method: "/ch/#ch#/gate/filter/type",
                    params: "i"
                },
                f: {
                    method: "/ch/#ch#/gate/filter/f",
                    params: "f"
                },
            }
        },
        dyn: {
            on: {
                method: "/ch/#ch#/dyn/on",
                params: "i"
            },
            mode: {
                method: "/ch/#ch#/dyn/mode",
                params: "i"
            },
            det: {
                method: "/ch/#ch#/dyn/det",
                params: "i"
            },
            env: {
                method: "/ch/#ch#/dyn/env",
                params: "i"
            },
            thr: {
                method: "/ch/#ch#/dyn/thr",
                params: "f"
            },
            ratio: {
                method: "/ch/#ch#/dyn/ratio",
                params: "i"
            },
            knee: {
                method: "/ch/#ch#/dyn/knee",
                params: "f"
            },
            mgain: {
                method: "/ch/#ch#/dyn/mgain",
                params: "f"
            },
            attack: {
                method: "/ch/#ch#/dyn/attack",
                params: "f"
            },
            pos: {
                method: "/ch/#ch#/dyn/pos",
                params: "i"
            },
            keysrc: {
                method: "/ch/#ch#/dyn/keysrc",
                params: "i"
            },
            mix: {
                method: "/ch/#ch#/dyn/mix",
                params: "f"
            },
            auto: {
                method: "/ch/#ch#/dyn/auto",
                params: "i"
            },
            filter: {
                on: {
                    method: "/ch/#ch#/dyn/filter/on",
                    params: "i"
                },
                type: {
                    method: "/ch/#ch#/dyn/filter/type",
                    params: "i"
                },
                f: {
                    method: "/ch/#ch#/dyn/filter/f",
                    params: "f"
                },
            },
            insert: {
                on: {
                    method: "/ch/#ch#/dyn/insert/on",
                    params: "i"
                },
                pos: {
                    method: "/ch/#ch#/dyn/insert/pos",
                    params: "i"
                },
                sel: {
                    method: "/ch/#ch#/dyn/insert/sel",
                    params: "i"
                },
            }
        },
        eq: {
            _dup: 4,
            on: {
                method: "/ch/#ch#/eq/on",
                params: "i"
            },
            type: {
                method: "/ch/#ch#/eq/#eq#/type",
                params: "i"
            },
            f: {
                method: "/ch/#ch#/eq/#eq#/f",
                params: "f"
            },
            g: {
                method: "/ch/#ch#/eq/#eq#/g",
                params: "f"
            },
            q: {
                method: "/ch/#ch#/eq/#eq#/q",
                params: "f"
            },
        },
        mix: {
            on: {
                method: "/ch/#ch#/mix/on",
                params: "i"
            },
            fader: {
                method: "/ch/#ch#/mix/fader",
                params: "f"
            },
            st: {
                method: "/ch/#ch#/mix/st",
                params: "i"
            },
            pan: {
                method: "/ch/#ch#/mix/pan",
                params: "f"
            },
            mono: {
                method: "/ch/#ch#/mix/mono",
                params: "i"
            },
            mlevel: {
                method: "/ch/#ch#/mix/mlevel",
                params: "f"
            },
            grp: {
                dca: {
                    method: "/ch/#ch#/mix/grp/dca",
                    params: "i"
                },
                mute: {
                    method: "/ch/#ch#/mix/grp/mute",
                    params: "i"
                }
            },
            send: {
                _dup: 16,
                on: {
                    method: "/ch/#ch#/mix/#send#/on",
                    params: "i"
                },
                level: {
                    method: "/ch/#ch#/mix/#send#/level",
                    params: "f"
                },
                pan: {
                    method: "/ch/#ch#/mix/#send#/pan",
                    params: "f"
                },
                type: {
                    method: "/ch/#ch#/mix/#send#/type",
                    params: "i"
                },
            }
        }
    },
    auxin: {
        _dup: 8,
        config: {
            name: {
                method: "/auxin/#auxin#/config/name",
                params: "s"
            },
            icon: {
                method: "/auxin/#auxin#/config/icon",
                params: "i"
            },
            color: {
                method: "/auxin/#auxin#/config/color",
                params: "i"
            },
            source: {
                method: "/auxin/#auxin#/config/source",
                params: "i"
            }
        },
        preamp: {
            trim: {
                method: "/auxin/#auxin#/preamp/trim",
                params: "f"
            },
            invert: {
                method: "/auxin/#auxin#/preamp/invert",
                params: "i"
            },
        },
        eq: {
            _dup: 4,
            on: {
                method: "/auxin/#auxin#/eq/on",
                params: "i"
            },
            type: {
                method: "/auxin/#auxin#/eq/#eq#/type",
                params: "i"
            },
            f: {
                method: "/auxin/#auxin#/eq/#eq#/f",
                params: "f"
            },
            g: {
                method: "/auxin/#auxin#/eq/#eq#/g",
                params: "f"
            },
            q: {
                method: "/auxin/#auxin#/eq/#eq#/q",
                params: "f"
            },
        },
        mix: {
            on: {
                method: "/auxin/#auxin#/mix/on",
                params: "i"
            },
            fader: {
                method: "/auxin/#auxin#/mix/fader",
                params: "f"
            },
            st: {
                method: "/auxin/#auxin#/mix/st",
                params: "i"
            },
            pan: {
                method: "/auxin/#auxin#/mix/pan",
                params: "f"
            },
            mono: {
                method: "/auxin/#auxin#/mix/mono",
                params: "i"
            },
            mlevel: {
                method: "/auxin/#auxin#/mix/mlevel",
                params: "f"
            },
            grp: {
                dca: {
                    method: "/auxin/#auxin#/mix/grp/dca",
                    params: "i"
                },
                mute: {
                    method: "/auxin/#auxin#/mix/grp/mute",
                    params: "i"
                }
            },
            send: {
                _dup: 16,
                on: {
                    method: "/auxin/#auxin#/mix/#send#/on",
                    params: "i"
                },
                level: {
                    method: "/auxin/#auxin#/mix/#send#/level",
                    params: "f"
                },
                pan: {
                    method: "/auxin/#auxin#/mix/#send#/pan",
                    params: "f"
                },
                type: {
                    method: "/auxin/#auxin#/mix/#send#/type",
                    params: "i"
                },
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
    if (args.length != 0 && args.length != methodTypes.length) {
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
    if (args.length == 0) output.pop()
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