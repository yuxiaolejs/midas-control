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
        },
        insert: {
            on: {
                method: "/ch/#ch#/insert/on",
                params: "i"
            },
            pos: {
                method: "/ch/#ch#/insert/pos",
                params: "i"
            },
            sel: {
                method: "/ch/#ch#/insert/sel",
                params: "i"
            },
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
    },
    fxrtn: {
        _dup: 8,
        config: {
            name: {
                method: "/fxrtn/#fxrtn#/config/name",
                params: "s"
            },
            icon: {
                method: "/fxrtn/#fxrtn#/config/icon",
                params: "i"
            },
            color: {
                method: "/fxrtn/#fxrtn#/config/color",
                params: "i"
            },
        },
        eq: {
            _dup: 4,
            on: {
                method: "/fxrtn/#fxrtn#/eq/on",
                params: "i"
            },
            type: {
                method: "/fxrtn/#fxrtn#/eq/#eq#/type",
                params: "i"
            },
            f: {
                method: "/fxrtn/#fxrtn#/eq/#eq#/f",
                params: "f"
            },
            g: {
                method: "/fxrtn/#fxrtn#/eq/#eq#/g",
                params: "f"
            },
            q: {
                method: "/fxrtn/#fxrtn#/eq/#eq#/q",
                params: "f"
            },
        },
        mix: {
            on: {
                method: "/fxrtn/#fxrtn#/mix/on",
                params: "i"
            },
            fader: {
                method: "/fxrtn/#fxrtn#/mix/fader",
                params: "f"
            },
            st: {
                method: "/fxrtn/#fxrtn#/mix/st",
                params: "i"
            },
            pan: {
                method: "/fxrtn/#fxrtn#/mix/pan",
                params: "f"
            },
            mono: {
                method: "/fxrtn/#fxrtn#/mix/mono",
                params: "i"
            },
            mlevel: {
                method: "/fxrtn/#fxrtn#/mix/mlevel",
                params: "f"
            },
            grp: {
                dca: {
                    method: "/fxrtn/#fxrtn#/mix/grp/dca",
                    params: "i"
                },
                mute: {
                    method: "/fxrtn/#fxrtn#/mix/grp/mute",
                    params: "i"
                }
            },
            send: {
                _dup: 16,
                on: {
                    method: "/fxrtn/#fxrtn#/mix/#send#/on",
                    params: "i"
                },
                level: {
                    method: "/fxrtn/#fxrtn#/mix/#send#/level",
                    params: "f"
                },
                pan: {
                    method: "/fxrtn/#fxrtn#/mix/#send#/pan",
                    params: "f"
                },
                type: {
                    method: "/fxrtn/#fxrtn#/mix/#send#/type",
                    params: "i"
                },
            }
        }
    },
    bus: {
        _dup: 16,
        config: {
            name: {
                method: "/bus/#bus#/config/name",
                params: "s"
            },
            icon: {
                method: "/bus/#bus#/config/icon",
                params: "i"
            },
            color: {
                method: "/bus/#bus#/config/color",
                params: "i"
            },
        },
        dyn: {
            on: {
                method: "/bus/#bus#/dyn/on",
                params: "i"
            },
            mode: {
                method: "/bus/#bus#/dyn/mode",
                params: "i"
            },
            det: {
                method: "/bus/#bus#/dyn/det",
                params: "i"
            },
            env: {
                method: "/bus/#bus#/dyn/env",
                params: "i"
            },
            thr: {
                method: "/bus/#bus#/dyn/thr",
                params: "f"
            },
            ratio: {
                method: "/bus/#bus#/dyn/ratio",
                params: "i"
            },
            knee: {
                method: "/bus/#bus#/dyn/knee",
                params: "f"
            },
            mgain: {
                method: "/bus/#bus#/dyn/mgain",
                params: "f"
            },
            attack: {
                method: "/bus/#bus#/dyn/attack",
                params: "f"
            },
            pos: {
                method: "/bus/#bus#/dyn/pos",
                params: "i"
            },
            keysrc: {
                method: "/bus/#bus#/dyn/keysrc",
                params: "i"
            },
            mix: {
                method: "/bus/#bus#/dyn/mix",
                params: "f"
            },
            auto: {
                method: "/bus/#bus#/dyn/auto",
                params: "i"
            },
            filter: {
                on: {
                    method: "/bus/#bus#/dyn/filter/on",
                    params: "i"
                },
                type: {
                    method: "/bus/#bus#/dyn/filter/type",
                    params: "i"
                },
                f: {
                    method: "/bus/#bus#/dyn/filter/f",
                    params: "f"
                },
            },
        },
        insert: {
            on: {
                method: "/bus/#bus#/insert/on",
                params: "i"
            },
            pos: {
                method: "/bus/#bus#/insert/pos",
                params: "i"
            },
            sel: {
                method: "/bus/#bus#/insert/sel",
                params: "i"
            },
        },
        eq: {
            _dup: 6,
            on: {
                method: "/bus/#bus#/eq/on",
                params: "i"
            },
            type: {
                method: "/bus/#bus#/eq/#eq#/type",
                params: "i"
            },
            f: {
                method: "/bus/#bus#/eq/#eq#/f",
                params: "f"
            },
            g: {
                method: "/bus/#bus#/eq/#eq#/g",
                params: "f"
            },
            q: {
                method: "/bus/#bus#/eq/#eq#/q",
                params: "f"
            },
        },
        mix: {
            on: {
                method: "/bus/#bus#/mix/on",
                params: "i"
            },
            fader: {
                method: "/bus/#bus#/mix/fader",
                params: "f"
            },
            st: {
                method: "/bus/#bus#/mix/st",
                params: "i"
            },
            pan: {
                method: "/bus/#bus#/mix/pan",
                params: "f"
            },
            mono: {
                method: "/bus/#bus#/mix/mono",
                params: "i"
            },
            mlevel: {
                method: "/bus/#bus#/mix/mlevel",
                params: "f"
            },
            grp: {
                dca: {
                    method: "/bus/#bus#/mix/grp/dca",
                    params: "i"
                },
                mute: {
                    method: "/bus/#bus#/mix/grp/mute",
                    params: "i"
                }
            },
            send: {
                _dup: 6,
                on: {
                    method: "/bus/#bus#/mix/#send#/on",
                    params: "i"
                },
                level: {
                    method: "/bus/#bus#/mix/#send#/level",
                    params: "f"
                },
                pan: {
                    method: "/bus/#bus#/mix/#send#/pan",
                    params: "f"
                },
                type: {
                    method: "/bus/#bus#/mix/#send#/type",
                    params: "i"
                },
            }
        }
    },
    mtx: {
        _dup: 6,
        config: {
            name: {
                method: "/mtx/#mtx#/config/name",
                params: "s"
            },
            icon: {
                method: "/mtx/#mtx#/config/icon",
                params: "i"
            },
            color: {
                method: "/mtx/#mtx#/config/color",
                params: "i"
            },
            preamp: {
                invert: {
                    method: "/mtx/#mtx#/config/preamp/invert",
                    params: "i"
                }
            }
        },
        dyn: {
            on: {
                method: "/mtx/#mtx#/dyn/on",
                params: "i"
            },
            mode: {
                method: "/mtx/#mtx#/dyn/mode",
                params: "i"
            },
            det: {
                method: "/mtx/#mtx#/dyn/det",
                params: "i"
            },
            env: {
                method: "/mtx/#mtx#/dyn/env",
                params: "i"
            },
            thr: {
                method: "/mtx/#mtx#/dyn/thr",
                params: "f"
            },
            ratio: {
                method: "/mtx/#mtx#/dyn/ratio",
                params: "i"
            },
            knee: {
                method: "/mtx/#mtx#/dyn/knee",
                params: "f"
            },
            mgain: {
                method: "/mtx/#mtx#/dyn/mgain",
                params: "f"
            },
            attack: {
                method: "/mtx/#mtx#/dyn/attack",
                params: "f"
            },
            pos: {
                method: "/mtx/#mtx#/dyn/pos",
                params: "i"
            },
            keysrc: {
                method: "/mtx/#mtx#/dyn/keysrc",
                params: "i"
            },
            mix: {
                method: "/mtx/#mtx#/dyn/mix",
                params: "f"
            },
            auto: {
                method: "/mtx/#mtx#/dyn/auto",
                params: "i"
            },
            filter: {
                on: {
                    method: "/mtx/#mtx#/dyn/filter/on",
                    params: "i"
                },
                type: {
                    method: "/mtx/#mtx#/dyn/filter/type",
                    params: "i"
                },
                f: {
                    method: "/mtx/#mtx#/dyn/filter/f",
                    params: "f"
                },
            },
        },
        insert: {
            on: {
                method: "/mtx/#mtx#/insert/on",
                params: "i"
            },
            pos: {
                method: "/mtx/#mtx#/insert/pos",
                params: "i"
            },
            sel: {
                method: "/mtx/#mtx#/insert/sel",
                params: "i"
            },
        },
        eq: {
            _dup: 6,
            on: {
                method: "/mtx/#mtx#/eq/on",
                params: "i"
            },
            type: {
                method: "/mtx/#mtx#/eq/#eq#/type",
                params: "i"
            },
            f: {
                method: "/mtx/#mtx#/eq/#eq#/f",
                params: "f"
            },
            g: {
                method: "/mtx/#mtx#/eq/#eq#/g",
                params: "f"
            },
            q: {
                method: "/mtx/#mtx#/eq/#eq#/q",
                params: "f"
            },
        },
        mix: {
            on: {
                method: "/mtx/#mtx#/mix/on",
                params: "i"
            },
            fader: {
                method: "/mtx/#mtx#/mix/fader",
                params: "f"
            },
        }
    },
    main: {
        st: {
            config: {
                name: {
                    method: "/main/st/config/name",
                    params: "s"
                },
                icon: {
                    method: "/main/st/config/icon",
                    params: "i"
                },
                color: {
                    method: "/main/st/config/color",
                    params: "i"
                },
            },
            dyn: {
                on: {
                    method: "/main/st/dyn/on",
                    params: "i"
                },
                mode: {
                    method: "/main/st/dyn/mode",
                    params: "i"
                },
                det: {
                    method: "/main/st/dyn/det",
                    params: "i"
                },
                env: {
                    method: "/main/st/dyn/env",
                    params: "i"
                },
                thr: {
                    method: "/main/st/dyn/thr",
                    params: "f"
                },
                ratio: {
                    method: "/main/st/dyn/ratio",
                    params: "i"
                },
                knee: {
                    method: "/main/st/dyn/knee",
                    params: "f"
                },
                mgain: {
                    method: "/main/st/dyn/mgain",
                    params: "f"
                },
                attack: {
                    method: "/main/st/dyn/attack",
                    params: "f"
                },
                pos: {
                    method: "/main/st/dyn/pos",
                    params: "i"
                },
                keysrc: {
                    method: "/main/st/dyn/keysrc",
                    params: "i"
                },
                mix: {
                    method: "/main/st/dyn/mix",
                    params: "f"
                },
                auto: {
                    method: "/main/st/dyn/auto",
                    params: "i"
                },
                filter: {
                    on: {
                        method: "/main/st/dyn/filter/on",
                        params: "i"
                    },
                    type: {
                        method: "/main/st/dyn/filter/type",
                        params: "i"
                    },
                    f: {
                        method: "/main/st/dyn/filter/f",
                        params: "f"
                    },
                },
            },
            insert: {
                on: {
                    method: "/main/st/insert/on",
                    params: "i"
                },
                pos: {
                    method: "/main/st/insert/pos",
                    params: "i"
                },
                sel: {
                    method: "/main/st/insert/sel",
                    params: "i"
                },
            },
            eq: {
                _dup: 6,
                on: {
                    method: "/main/st/eq/on",
                    params: "i"
                },
                type: {
                    method: "/main/st/eq/#eq#/type",
                    params: "i"
                },
                f: {
                    method: "/main/st/eq/#eq#/f",
                    params: "f"
                },
                g: {
                    method: "/main/st/eq/#eq#/g",
                    params: "f"
                },
                q: {
                    method: "/main/st/eq/#eq#/q",
                    params: "f"
                },
            },
            mix: {
                on: {
                    method: "/main/st/mix/on",
                    params: "i"
                },
                fader: {
                    method: "/main/st/mix/fader",
                    params: "f"
                },
                pan: {
                    method: "/main/st/mix/pan",
                    params: "f"
                },
                send: {
                    _dup: 6,
                    on: {
                        method: "/main/st/mix/#send#/on",
                        params: "i"
                    },
                    level: {
                        method: "/main/st/mix/#send#/level",
                        params: "f"
                    },
                    pan: {
                        method: "/main/st/mix/#send#/pan",
                        params: "f"
                    },
                    type: {
                        method: "/main/st/mix/#send#/type",
                        params: "i"
                    },
                }
            }
        },
        m: {
            config: {
                name: {
                    method: "/main/m/config/name",
                    params: "s"
                },
                icon: {
                    method: "/main/m/config/icon",
                    params: "i"
                },
                color: {
                    method: "/main/m/config/color",
                    params: "i"
                },
            },
            dyn: {
                on: {
                    method: "/main/m/dyn/on",
                    params: "i"
                },
                mode: {
                    method: "/main/m/dyn/mode",
                    params: "i"
                },
                det: {
                    method: "/main/m/dyn/det",
                    params: "i"
                },
                env: {
                    method: "/main/m/dyn/env",
                    params: "i"
                },
                thr: {
                    method: "/main/m/dyn/thr",
                    params: "f"
                },
                ratio: {
                    method: "/main/m/dyn/ratio",
                    params: "i"
                },
                knee: {
                    method: "/main/m/dyn/knee",
                    params: "f"
                },
                mgain: {
                    method: "/main/m/dyn/mgain",
                    params: "f"
                },
                attack: {
                    method: "/main/m/dyn/attack",
                    params: "f"
                },
                pos: {
                    method: "/main/m/dyn/pos",
                    params: "i"
                },
                keysrc: {
                    method: "/main/m/dyn/keysrc",
                    params: "i"
                },
                mix: {
                    method: "/main/m/dyn/mix",
                    params: "f"
                },
                auto: {
                    method: "/main/m/dyn/auto",
                    params: "i"
                },
                filter: {
                    on: {
                        method: "/main/m/dyn/filter/on",
                        params: "i"
                    },
                    type: {
                        method: "/main/m/dyn/filter/type",
                        params: "i"
                    },
                    f: {
                        method: "/main/m/dyn/filter/f",
                        params: "f"
                    },
                },
            },
            insert: {
                on: {
                    method: "/main/m/insert/on",
                    params: "i"
                },
                pos: {
                    method: "/main/m/insert/pos",
                    params: "i"
                },
                sel: {
                    method: "/main/m/insert/sel",
                    params: "i"
                },
            },
            eq: {
                _dup: 6,
                on: {
                    method: "/main/m/eq/on",
                    params: "i"
                },
                type: {
                    method: "/main/m/eq/#eq#/type",
                    params: "i"
                },
                f: {
                    method: "/main/m/eq/#eq#/f",
                    params: "f"
                },
                g: {
                    method: "/main/m/eq/#eq#/g",
                    params: "f"
                },
                q: {
                    method: "/main/m/eq/#eq#/q",
                    params: "f"
                },
            },
            mix: {
                on: {
                    method: "/main/m/mix/on",
                    params: "i"
                },
                fader: {
                    method: "/main/m/mix/fader",
                    params: "f"
                },
                pan: {
                    method: "/main/m/mix/pan",
                    params: "f"
                },
                send: {
                    _dup: 6,
                    on: {
                        method: "/main/m/mix/#send#/on",
                        params: "i"
                    },
                    level: {
                        method: "/main/m/mix/#send#/level",
                        params: "f"
                    },
                    pan: {
                        method: "/main/m/mix/#send#/pan",
                        params: "f"
                    },
                    type: {
                        method: "/main/m/mix/#send#/type",
                        params: "i"
                    },
                }
            }
        }
    },
    dca: {
        _dup: 8,
        config: {
            name: {
                method: "/dca/#dca#/config/name",
                params: "s"
            },
            icon: {
                method: "/dca/#dca#/config/icon",
                params: "i"
            },
            color: {
                method: "/dca/#dca#/config/color",
                params: "i"
            },
        },
        on: {
            method: "/dca/#dca#/on",
            params: "i"
        },
        fader: {
            method: "/dca/#dca#/fader",
            params: "f"
        }
    },
    fx: {
        _dup: 8,
        type: {
            method: "/fx/#fx#/type",
            params: "i"
        },
        source: {
            l: {
                method: "/fx/#fx#/source/l",
                params: "i"
            },
            r: {
                method: "/fx/#fx#/source/r",
                params: "i"
            }
        },
        par: {
            _dup: 64,
            method: "/fx/#fx#/par/#par#",
            params: "f"
        }
    },
    outputs: {
        main: {
            _dup: 16,
            src: {
                method: "/outputs/main/#main#/src",
                params: "i"
            },
            pos: {
                method: "/outputs/main/#main#/pos",
                params: "i"
            },
            delay: {
                on: {
                    method: "/outputs/main/#main#/delay/on",
                    params: "i"
                },
                time: {
                    method: "/outputs/main/#main#/delay/time",
                    params: "f"
                },
            },
        },
        aux: {
            _dup: 6,
            src: {
                method: "/outputs/aux/#aux#/src",
                params: "i"
            },
            pos: {
                method: "/outputs/aux/#aux#/pos",
                params: "i"
            },
        },
        rec: {
            _dup: 2,
            src: {
                method: "/outputs/rec/#rec#/src",
                params: "i"
            },
            pos: {
                method: "/outputs/rec/#rec#/pos",
                params: "i"
            },
        }
    },
    headamp: {
        _dup: 128,
        gain: {
            zeroIndex: true,
            threeDigits: true,
            method: "/headamp/#headamp#/gain",
            params: "f"
        },
        phantom: {
            zeroIndex: true,
            threeDigits: true,
            method: "/headamp/#headamp#/phantom",
            params: "i"
        }
    },
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
                    if (!obj['zeroIndex']) variables[var_kys[v]] += 1
                    if (variables[var_kys[v]] < 10) {
                        variables[var_kys[v]] = "0" + variables[var_kys[v]]
                    }
                    if (obj['threeDigits'] && parseInt(variables[var_kys[v]]) < 100) variables[var_kys[v]] = "0" + variables[var_kys[v]]
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

function getObjectMethods(object) {
    if (object.method && typeof (object.method) == "string") {
        return object.method
    } else {
        let list = []
        let keys = Object.keys(object)
        for (let i = 0; i < keys.length; i++) {
            list = list.concat(getObjectMethods(object[keys[i]]))
        }
        return list
    }
}

function getMethodList() {
    return getObjectMethods(getMethods())

}

module.exports = {
    getMethodList,
    getMethods,
    parseMethodParams
}