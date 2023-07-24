(function(define) {
    var __define;
    typeof define === "function" && (__define = define, define = null);
    (()=>{
        function $parcel$interopDefault(a) {
            return a && a.__esModule ? a.default : a;
        }
        var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
        var $parcel$modules = {};
        var $parcel$inits = {};
        var parcelRequire = $parcel$global["parcelRequire299d"];
        if (parcelRequire == null) {
            parcelRequire = function(id) {
                if (id in $parcel$modules) {
                    return $parcel$modules[id].exports;
                }
                if (id in $parcel$inits) {
                    var init = $parcel$inits[id];
                    delete $parcel$inits[id];
                    var module = {
                        id: id,
                        exports: {}
                    };
                    $parcel$modules[id] = module;
                    init.call(module.exports, module, module.exports);
                    return module.exports;
                }
                var err = new Error("Cannot find module '" + id + "'");
                err.code = 'MODULE_NOT_FOUND';
                throw err;
            };
            parcelRequire.register = function register(id, init) {
                $parcel$inits[id] = init;
            };
            $parcel$global["parcelRequire299d"] = parcelRequire;
        }
        parcelRequire.register("4X1a2", function(module, exports) {
            (function(global1, factory) {
                if (typeof define === "function" && define.amd) define("webextension-polyfill", [
                    "module"
                ], factory);
                else {
                    var mod;
                    factory(module);
                }
            })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module1) {
                "use strict";
                if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
                if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
                    const wrapAPIs = (extensionAPIs)=>{
                        const apiMetadata = {
                            "alarms": {
                                "clear": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "clearAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "get": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "bookmarks": {
                                "create": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "get": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getChildren": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getRecent": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getSubTree": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getTree": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "move": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                },
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeTree": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "search": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "update": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                }
                            },
                            "browserAction": {
                                "disable": {
                                    "minArgs": 0,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "enable": {
                                    "minArgs": 0,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "getBadgeBackgroundColor": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getBadgeText": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getPopup": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getTitle": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "openPopup": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "setBadgeBackgroundColor": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "setBadgeText": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "setIcon": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "setPopup": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "setTitle": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                }
                            },
                            "browsingData": {
                                "remove": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                },
                                "removeCache": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeCookies": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeDownloads": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeFormData": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeHistory": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeLocalStorage": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removePasswords": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removePluginData": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "settings": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "commands": {
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "contextMenus": {
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "update": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                }
                            },
                            "cookies": {
                                "get": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getAll": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getAllCookieStores": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "set": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "devtools": {
                                "inspectedWindow": {
                                    "eval": {
                                        "minArgs": 1,
                                        "maxArgs": 2,
                                        "singleCallbackArg": false
                                    }
                                },
                                "panels": {
                                    "create": {
                                        "minArgs": 3,
                                        "maxArgs": 3,
                                        "singleCallbackArg": true
                                    },
                                    "elements": {
                                        "createSidebarPane": {
                                            "minArgs": 1,
                                            "maxArgs": 1
                                        }
                                    }
                                }
                            },
                            "downloads": {
                                "cancel": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "download": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "erase": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getFileIcon": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "open": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "pause": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeFile": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "resume": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "search": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "show": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                }
                            },
                            "extension": {
                                "isAllowedFileSchemeAccess": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "isAllowedIncognitoAccess": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "history": {
                                "addUrl": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "deleteAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "deleteRange": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "deleteUrl": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getVisits": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "search": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "i18n": {
                                "detectLanguage": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getAcceptLanguages": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "identity": {
                                "launchWebAuthFlow": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "idle": {
                                "queryState": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "management": {
                                "get": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "getSelf": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "setEnabled": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                },
                                "uninstallSelf": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                }
                            },
                            "notifications": {
                                "clear": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "create": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "getPermissionLevel": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "update": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                }
                            },
                            "pageAction": {
                                "getPopup": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getTitle": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "hide": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "setIcon": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "setPopup": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "setTitle": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                },
                                "show": {
                                    "minArgs": 1,
                                    "maxArgs": 1,
                                    "fallbackToNoCallback": true
                                }
                            },
                            "permissions": {
                                "contains": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "request": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "runtime": {
                                "getBackgroundPage": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "getPlatformInfo": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "openOptionsPage": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "requestUpdateCheck": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "sendMessage": {
                                    "minArgs": 1,
                                    "maxArgs": 3
                                },
                                "sendNativeMessage": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                },
                                "setUninstallURL": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "sessions": {
                                "getDevices": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "getRecentlyClosed": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "restore": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                }
                            },
                            "storage": {
                                "local": {
                                    "clear": {
                                        "minArgs": 0,
                                        "maxArgs": 0
                                    },
                                    "get": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    },
                                    "getBytesInUse": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    },
                                    "remove": {
                                        "minArgs": 1,
                                        "maxArgs": 1
                                    },
                                    "set": {
                                        "minArgs": 1,
                                        "maxArgs": 1
                                    }
                                },
                                "managed": {
                                    "get": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    },
                                    "getBytesInUse": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    }
                                },
                                "sync": {
                                    "clear": {
                                        "minArgs": 0,
                                        "maxArgs": 0
                                    },
                                    "get": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    },
                                    "getBytesInUse": {
                                        "minArgs": 0,
                                        "maxArgs": 1
                                    },
                                    "remove": {
                                        "minArgs": 1,
                                        "maxArgs": 1
                                    },
                                    "set": {
                                        "minArgs": 1,
                                        "maxArgs": 1
                                    }
                                }
                            },
                            "tabs": {
                                "captureVisibleTab": {
                                    "minArgs": 0,
                                    "maxArgs": 2
                                },
                                "create": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "detectLanguage": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "discard": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "duplicate": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "executeScript": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "get": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getCurrent": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                },
                                "getZoom": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "getZoomSettings": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "goBack": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "goForward": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "highlight": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "insertCSS": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "move": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                },
                                "query": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "reload": {
                                    "minArgs": 0,
                                    "maxArgs": 2
                                },
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "removeCSS": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "sendMessage": {
                                    "minArgs": 2,
                                    "maxArgs": 3
                                },
                                "setZoom": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "setZoomSettings": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "update": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                }
                            },
                            "topSites": {
                                "get": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "webNavigation": {
                                "getAllFrames": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "getFrame": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                }
                            },
                            "webRequest": {
                                "handlerBehaviorChanged": {
                                    "minArgs": 0,
                                    "maxArgs": 0
                                }
                            },
                            "windows": {
                                "create": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "get": {
                                    "minArgs": 1,
                                    "maxArgs": 2
                                },
                                "getAll": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "getCurrent": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "getLastFocused": {
                                    "minArgs": 0,
                                    "maxArgs": 1
                                },
                                "remove": {
                                    "minArgs": 1,
                                    "maxArgs": 1
                                },
                                "update": {
                                    "minArgs": 2,
                                    "maxArgs": 2
                                }
                            }
                        };
                        if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class DefaultWeakMap extends WeakMap {
                            constructor(createItem, items){
                                super(items);
                                this.createItem = createItem;
                            }
                            get(key) {
                                if (!this.has(key)) this.set(key, this.createItem(key));
                                return super.get(key);
                            }
                        }
                        const isThenable = (value)=>{
                            return value && typeof value === "object" && typeof value.then === "function";
                        };
                        const makeCallback = (promise, metadata)=>{
                            return (...callbackArgs)=>{
                                if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                                else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                                else promise.resolve(callbackArgs);
                            };
                        };
                        const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments";
                        const wrapAsyncFunction = (name, metadata)=>{
                            return function asyncFunctionWrapper(target, ...args) {
                                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                                return new Promise((resolve, reject)=>{
                                    if (metadata.fallbackToNoCallback) try {
                                        target[name](...args, makeCallback({
                                            resolve: resolve,
                                            reject: reject
                                        }, metadata));
                                    } catch (cbError) {
                                        console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                                        target[name](...args);
                                        metadata.fallbackToNoCallback = false;
                                        metadata.noCallback = true;
                                        resolve();
                                    }
                                    else if (metadata.noCallback) {
                                        target[name](...args);
                                        resolve();
                                    } else target[name](...args, makeCallback({
                                        resolve: resolve,
                                        reject: reject
                                    }, metadata));
                                });
                            };
                        };
                        const wrapMethod = (target, method, wrapper)=>{
                            return new Proxy(method, {
                                apply (targetMethod, thisObj, args) {
                                    return wrapper.call(thisObj, target, ...args);
                                }
                            });
                        };
                        let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
                        const wrapObject = (target, wrappers = {}, metadata = {})=>{
                            let cache = Object.create(null);
                            let handlers = {
                                has (proxyTarget, prop) {
                                    return prop in target || prop in cache;
                                },
                                get (proxyTarget, prop, receiver) {
                                    if (prop in cache) return cache[prop];
                                    if (!(prop in target)) return undefined;
                                    let value = target[prop];
                                    if (typeof value === "function") {
                                        if (typeof wrappers[prop] === "function") value = wrapMethod(target, target[prop], wrappers[prop]);
                                        else if (hasOwnProperty(metadata, prop)) {
                                            let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                            value = wrapMethod(target, target[prop], wrapper);
                                        } else value = value.bind(target);
                                    } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]);
                                    else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]);
                                    else {
                                        Object.defineProperty(cache, prop, {
                                            configurable: true,
                                            enumerable: true,
                                            get () {
                                                return target[prop];
                                            },
                                            set (value) {
                                                target[prop] = value;
                                            }
                                        });
                                        return value;
                                    }
                                    cache[prop] = value;
                                    return value;
                                },
                                set (proxyTarget, prop, value, receiver) {
                                    if (prop in cache) cache[prop] = value;
                                    else target[prop] = value;
                                    return true;
                                },
                                defineProperty (proxyTarget, prop, desc) {
                                    return Reflect.defineProperty(cache, prop, desc);
                                },
                                deleteProperty (proxyTarget, prop) {
                                    return Reflect.deleteProperty(cache, prop);
                                }
                            };
                            let proxyTarget = Object.create(target);
                            return new Proxy(proxyTarget, handlers);
                        };
                        const wrapEvent = (wrapperMap)=>({
                                addListener (target, listener, ...args) {
                                    target.addListener(wrapperMap.get(listener), ...args);
                                },
                                hasListener (target, listener) {
                                    return target.hasListener(wrapperMap.get(listener));
                                },
                                removeListener (target, listener) {
                                    target.removeListener(wrapperMap.get(listener));
                                }
                            });
                        const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                            if (typeof listener !== "function") return listener;
                            return function onRequestFinished(req) {
                                const wrappedReq = wrapObject(req, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                listener(wrappedReq);
                            };
                        });
                        const onMessageWrappers = new DefaultWeakMap((listener)=>{
                            if (typeof listener !== "function") return listener;
                            return function onMessage(message, sender, sendResponse) {
                                let didCallSendResponse = false;
                                let wrappedSendResponse;
                                let sendResponsePromise = new Promise((resolve)=>{
                                    wrappedSendResponse = function(response) {
                                        didCallSendResponse = true;
                                        resolve(response);
                                    };
                                });
                                let result;
                                try {
                                    result = listener(message, sender, wrappedSendResponse);
                                } catch (err) {
                                    result = Promise.reject(err);
                                }
                                const isResultThenable = result !== true && isThenable(result);
                                if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                                const sendPromisedResult = (promise)=>{
                                    promise.then((msg)=>{
                                        sendResponse(msg);
                                    }, (error)=>{
                                        let message;
                                        if (error && (error instanceof Error || typeof error.message === "string")) message = error.message;
                                        else message = "An unexpected error occurred";
                                        sendResponse({
                                            __mozWebExtensionPolyfillReject__: true,
                                            message: message
                                        });
                                    }).catch((err)=>{
                                        console.error("Failed to send onMessage rejected reply", err);
                                    });
                                };
                                if (isResultThenable) sendPromisedResult(result);
                                else sendPromisedResult(sendResponsePromise);
                                return true;
                            };
                        });
                        const wrappedSendMessageCallback = ({ reject, resolve }, reply)=>{
                            if (extensionAPIs.runtime.lastError) {
                                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                                else reject(new Error(extensionAPIs.runtime.lastError.message));
                            } else if (reply && reply.__mozWebExtensionPolyfillReject__) reject(new Error(reply.message));
                            else resolve(reply);
                        };
                        const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                            if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                            if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                            return new Promise((resolve, reject)=>{
                                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                                    resolve: resolve,
                                    reject: reject
                                });
                                args.push(wrappedCb);
                                apiNamespaceObj.sendMessage(...args);
                            });
                        };
                        const staticWrappers = {
                            devtools: {
                                network: {
                                    onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                                }
                            },
                            runtime: {
                                onMessage: wrapEvent(onMessageWrappers),
                                onMessageExternal: wrapEvent(onMessageWrappers),
                                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        };
                        const settingMetadata = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                        apiMetadata.privacy = {
                            network: {
                                "*": settingMetadata
                            },
                            services: {
                                "*": settingMetadata
                            },
                            websites: {
                                "*": settingMetadata
                            }
                        };
                        return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
                    };
                    module1.exports = wrapAPIs(chrome);
                } else module1.exports = globalThis.browser;
            });
        });
        var $4X1a2 = parcelRequire("4X1a2");
        const $66d8c44094b61148$export$f8609c05911eb37 = {
            DOMAIN: "https://openai-api-paid-yak3s7dv3a-ue.a.run.app"
        };
        const $66d8c44094b61148$export$576f6f09413201e4 = {
            DOMAIN: "https://merlin-uam-yak3s7dv3a-ue.a.run.app",
            ROUTES: {
                USER_CHAT_HISTORY: "/user/getPaginatedUserChatHistory?customJWT=true",
                WEB_CHAT: "/chat/website?customJWT=true",
                WEB_SUMMARIZE: "/summarize/website?customJWT=true",
                WEB_TEXT_UPLOAD: "/upload/websiteText?customJWT=true"
            }
        };
        const $66d8c44094b61148$export$fc15e9cbb0c46e2f = {
            DOMAIN: "https://merlin-backend-text-extractor-yak3s7dv3a-ue.a.run.app",
            ROUTES: {
                EXTRACT_TEXT_DOC_CHAT: "/extract-text-doc-chat"
            }
        };
        const $66d8c44094b61148$export$cad43b1b9a7fd483 = {
            DOMAIN: "https://us-central1-foyer-work.cloudfunctions.net"
        };
        const $66d8c44094b61148$export$d03967e5444cb133 = "https://app.getmerlin.in";
        const $66d8c44094b61148$export$249683c91812d3b7 = "http://localhost:5173";
        const $66d8c44094b61148$export$c81b252245ce8d13 = `${$66d8c44094b61148$export$d03967e5444cb133}/`;
        const $66d8c44094b61148$export$e246f2e6180553fe = `${$66d8c44094b61148$export$d03967e5444cb133}/plans`;
        const $66d8c44094b61148$export$55bd898f657d639 = `${$66d8c44094b61148$export$d03967e5444cb133}/sign-out-from-extension`;
        const $66d8c44094b61148$export$ccc88b4f4c1ce420 = `${$66d8c44094b61148$export$d03967e5444cb133}/sign-in`;
        const $66d8c44094b61148$export$543079bbcb8765ff = `https://forms.gle/v199ZqMVntjHRQNz7`;
        const $66d8c44094b61148$export$29f13fbd38d82550 = "https://merlinbyfoyer.notion.site/Merlin-Product-Wiki-f7729978374c44d5a70b27133f27e117";
        const $66d8c44094b61148$export$7f45538cd35b2135 = `https://gpt-tokenizer-api-yak3s7dv3a-ue.a.run.app`;
        const $66d8c44094b61148$export$3dba685a72f21f1d = {
            INAPPROPRIATE_INPUT: "Your query has been flagged as inappropriate. Please try again by changing it"
        };
        const $66d8c44094b61148$export$4aed3e440f5b32f8 = `https://us-central1-foyer-work.cloudfunctions.net/logger`;
        const $66d8c44094b61148$export$5afe64f9190a2ebc = [
            "We're glad you're loving Merlin, but you've reached the daily limit. We hate limits, but have to put it as the OpenAI API we use is an expensive paid API.",
            "Upgrade to Merlin Pro for a better experience."
        ];
        const $66d8c44094b61148$export$cf7d21c64b5b220 = {
            FREE: "FREE",
            NONE: "NONE",
            PAID: "PAID"
        };
        const $66d8c44094b61148$export$24029ecf7f61f002 = {
            BOOSTER: "premium-booster",
            ELITE: "premium-elite",
            STARTER: "premium-starter"
        };
        const $66d8c44094b61148$export$c06fc6c47997f1b6 = {
            BG_SCRIPT: "BG_SCRIPT",
            CHAT_UI: "CHAT_UI",
            CONTENT_SCRIPT: "CONTENT_SCRIPT",
            MERLIN_APP: "MERLIN_APP",
            MERLIN_BROWSER_CONTEXT_BTN: "MERLIN_BROWSER_CONTEXT_BTN",
            MERLIN_GUI: "MERLIN_GUI",
            POPUP: "POPUP",
            SEARCH_GPT: "SEARCH_GPT",
            SELECT_CONTEXT_BTN: "SELECT_CONTEXT_BTN"
        };
        const $66d8c44094b61148$export$5e9d5cc6885c5216 = {
            BLOG_SUMMARIZER: "BLOG_SUMMARIZER",
            DEFAULT: "DEFAULT",
            MERLIN_GUI: "MERLIN_GUI",
            MERLIN_GUI_GPT_4: "MERLIN_GUI_GPT_4",
            SEARCH_GPT: "SEARCH_GPT",
            YOUTUBE_SUMMARY: "YOUTUBE_SUMMARY"
        };
        const $66d8c44094b61148$export$9523889e0a5da4ba = {
            APP_REQUEST: {
                EXT_AUTH_STATUS: "EXT_AUTH_STATUS",
                SIGNIN: "SIGNIN",
                SIGNOUT: "SIGNOUT"
            },
            AUTH: {
                GET_DETAILS: "GET_DETAILS",
                REFRESH_TOKEN: "REFRESH_TOKEN",
                SIGNED_IN: "SIGNED_IN",
                SIGNED_OUT: "SIGNED_OUT",
                SYNC_USAGE: "SYNC_USAGE"
            },
            BROWSER: {
                CHANGE_HOTKEY: "CHANGE_HOTKEY",
                CHECK_SHORTCUT: "CHECK_SHORTCUT",
                CONTEXTMENU_BTN: "CONTEXTMENU_BTN",
                HOTKEY: "HOTKEY",
                SHOW_ADS: "SHOW_ADS"
            },
            LETS_CHAT: "LETS_CHAT",
            NEW_TAB: "NEW_TAB",
            OPEN_MERLIN_GUI: "OPEN_MERLIN_GUI",
            OPEN_OPTIONS_PAGE: "OPEN_OPTIONS_PAGE",
            SIGNOUT: "SIGNOUT",
            USAGE_UPDATE: "USAGE_UPDATE"
        };
        const $66d8c44094b61148$export$37c67e5bd9db9fe5 = {
            GPT_3: "GPT 3",
            GPT_4: "GPT 4"
        };
        const $66d8c44094b61148$export$d73415caafa59752 = {
            GPT_3: {
                id: "gpt-3.5-turbo",
                name: "GPT 3"
            },
            GPT_4: {
                id: "gpt-4",
                name: "GPT 4"
            }
        };
        const $66d8c44094b61148$export$d885cec31ce7468e = "https://merlin.foyer.work/onboarding";
        const $66d8c44094b61148$export$8c658cdc4a54ace4 = "https://us-central1-foyer-work.cloudfunctions.net/triggerMerlinUninstallFlow";
        const $66d8c44094b61148$export$fc9c76e2815fe520 = "https://us-central1-foyer-work.cloudfunctions.net/merlinExtensionInstall";
        const $66d8c44094b61148$export$b2fe63a482e7e084 = "https://us-central1-foyer-work.cloudfunctions.net/merlinExtensionUpdate";
        const $66d8c44094b61148$export$c4c57b34d312203b = 10;
        const $66d8c44094b61148$export$b530defda6da64eb = `https://merlin-config.s3.amazonaws.com/config.json`;
        const $66d8c44094b61148$export$5bc09adfc06121ad = "https://forms.gle/Qg73WC6LtUSf4PHS8";
        const $66d8c44094b61148$export$e3a2e9adfb9deeaf = "https://forms.gle/Qg73WC6LtUSf4PHS8";
        const $66d8c44094b61148$export$56eecaf50af74dd3 = "https://merlinbyfoyer.notion.site/Change-Keyboard-Shortcut-31fe3b1595b94fec927d31bce05f83b4";
        const $66d8c44094b61148$export$32944d3591146f13 = "phc_sZZBNR08PFM9Mf5GBbb9lBvujTlo4IBdbb15beviIpX";
        const $66d8c44094b61148$export$55f769226cdb50e2 = "https://app.posthog.com";
        const $66d8c44094b61148$export$e47cdf6f68bfa49d = true;
        const $66d8c44094b61148$export$2a8ab147303ce455 = false;
        const $66d8c44094b61148$export$eebf1d5516602059 = 100;
        const $66d8c44094b61148$export$6662ee6a3f574df6 = {
            FALLBACK: "FallbackPrompts",
            GMAIL: "Gmail",
            GMAIL_COMPOSE: "GmailCompose",
            LINKEDIN_COMMENT: "LinkedinComment",
            LINKEDIN_INVITE: "LinkedinInvite",
            LINKEDIN_MESSAGE: "LinkedinMessage",
            LINKEDIN_POST: "LinkedinPost",
            TWEET: "Tweet",
            TWEET_REPLY: "TweetReply"
        };
        const $66d8c44094b61148$export$c0afa31d362af5f8 = {
            CUSTOM: "custom",
            SUGGESTED: "suggested"
        };
        const $66d8c44094b61148$export$28ba0a5263dd89b0 = {
            BAD_REQUEST: "BAD_REQUEST",
            CHAT_ERROR_FETCHING_DOCUMENT: "CHAT_ERROR_FETCHING_DOCUMENT",
            CHAT_ERROR_INITIALIZING_CHAT: "CHAT_ERROR_INITIALIZING_CHAT",
            CHAT_ERROR_UPDATING_DOCUMENT: "CHAT_ERROR_UPDATING_DOCUMENT",
            INPUT_SIZE_TOO_LARGE: "INPUT_SIZE_TOO_LARGE",
            INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
            INVALID_FILE_UPLOAD_FORMAT: "INVALID_FILE_UPLOAD_FORMAT",
            MISC: "MISC",
            PAID_FEATURE: "PAID_FEATURE",
            RATE_LIMITED: "RATE_LIMITED",
            RATE_REFRESH_FAILED: "RATE_REFRESH_FAILED",
            TOKEN_EXPIRED: "TOKEN_EXPIRED",
            TOKEN_INVALID: "TOKEN_INVALID",
            TOKEN_MISSING: "TOKEN_MISSING",
            UNAUTHORIZED: "UNAUTHORIZED",
            UNKNOWN_ERROR: "UNKNOWN_ERROR"
        };
        const $66d8c44094b61148$export$fdd03fd481885bb7 = [
            "Asking our AI overlords what to do...",
            "Thinking of an answer...",
            "Stitching it all together...",
            "Generating a response..."
        ];
        const $66d8c44094b61148$export$1064fe984a240669 = [
            "Asking our AI overlords what to do...",
            "Looking up your query...",
            "Processing results from web...",
            "Accessing even more information...",
            "Stitching it all together...",
            "Generating a response..."
        ];
        const $66d8c44094b61148$export$b883f66c5ea72c16 = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTGFrc2h5YSBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3XzhKekZHMlFMYi1wQTA5OGtsenJLSVlJVXNIMmJISVIxVWdXST1zOTYtYyIsInN0cmlwZVJvbGUiOm51bGwsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9mb3llci13b3JrIiwiYXVkIjoiZm95ZXItd29yayIsImF1dGhfdGltZSI6MTY4MDA3MjIwNCwidXNlcl9pZCI6ImkxeUFDM0RNMGRkYjlEc0Y3QVdVSTZsMWt5RTMiLCJzdWIiOiJpMXlBQzNETTBkZGI5RHNGN0FXVUk2bDFreUUzIiwiaWF0IjoxNjgwMTE3NDU4LCJleHAiOjE2ODAxMjEwNTgsImVtYWlsIjoibGFrc2h5YWt1bWFyLmRldmVsb3BlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNTQ0MTE0NTAzNDgyMzY5NzE3NSJdLCJlbWFpbCI6WyJsYWtzaHlha3VtYXIuZGV2ZWxvcGVyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.A_b9LGGf4Snd2MIJ7k9azzFSvw1-Y7Y5vhpV1GrrB7Ds2v04_bdtzfE-CIV8tUXziusqDd4CPr6GK4ONneJVShUGic2BIU-UGN0NyM1T4Jdv9ZHKvTjuoC1NG5mfilmGVtc48OIh0bLmyvZN78Cy_imZRBgKjT3ySAVq-okz1BxQN480BENOog_Cmm2OLbWIo2JyqiIYagpxD4c5VwewQPspWqu4Me6r34Ca-hsZpsspQ1czeZ0BNW39lj74mYtHO2nnnlk8R6cmX2ZUHtASREmj2qc2g-WY04PjvN0J6_jid1VewdjwIga3RFiG5VwJaYhiUe9hVugH4DL2ZPodXw";
        const $66d8c44094b61148$export$83f3696a3c09a7a0 = {
            fabStrip: {
                gmail: {
                    visible: true
                },
                linkedIn: {
                    visible: true
                },
                twitter: {
                    visible: true
                }
            },
            misc: {
                merlinGUI: {
                    visible: true
                },
                serp: {
                    visible: true
                }
            },
            summarizer: {
                text: {
                    visible: true
                },
                youtube: {
                    visible: true
                }
            }
        };
        const $66d8c44094b61148$export$4b9555e35fc6d02b = {
            blogSummarizer: {
                visible: false
            },
            isChatUiExpanded: false,
            merlinGUI: {
                visible: false
            },
            merlinOnGmail: {
                showIconPopup: false,
                visible: false
            },
            merlinOnSocialMedia: {
                linkedin: {
                    visible: false
                },
                twitter: {
                    visible: false
                },
                visible: false
            },
            preferredOpenAiModel: $66d8c44094b61148$export$37c67e5bd9db9fe5.GPT_3,
            selectContextBtn: {
                visible: false
            },
            serp: {
                visible: false
            },
            ytSummarizer: {
                visible: false
            }
        };
        const $66d8c44094b61148$export$1abce793a0fb5c = {
            chatId: null,
            documentDetails: {
                id: null,
                name: null
            },
            isLoading: false,
            mode: "DEFAULT",
            namespace: null,
            status: "DEFAULT",
            summaryProgress: 0,
            uploadProgress: 0,
            visitedOnce: false
        };
        const $66d8c44094b61148$export$c54624edc045f5fb = {
            BLOG_SUMMARIZER: "blogSummarizer",
            SELECT_CONTEXT_BTN: "selectContextBtn"
        };
        const $66d8c44094b61148$export$e61606eafe4754d5 = 3000;
        const $66d8c44094b61148$export$e9df91b05880242f = {
            GMAIL: {
                GMAIL_COMPOSE: "GMAIL_COMPOSE",
                GMAIL_EXTERNAL_MOUNT: "GMAIL_EXTERNAL_MOUNT",
                GMAIL_REPLY: "GMAIL_REPLY"
            },
            LINKEDIN: {
                COMMENT: "LINKEDIN_COMMENT",
                INVITE: "LINKEDIN_INVITE",
                MESSAGE: "LINKEDIN_MESSAGE",
                POST: "LINKEDIN_POST",
                SHARED_POST_CARD: "LINKEDIN_SHARED_POST_CARD"
            },
            TWITTER: {
                MESSAGE: "TWITTER_MESSAGE",
                TWEET: "TWITTER_TWEET",
                TWEET_REPLY: "TWITTER_TWEET_REPLY"
            }
        };
        const $66d8c44094b61148$export$b4f0261deceabf0a = [
            {
                content: "Generate some data about any random topic",
                name: "Random"
            },
            {
                content: "Write a professional reply to this content",
                name: "Professional reply"
            },
            {
                content: "Write a friendly reply to this content",
                name: "Friendly reply"
            }
        ];
        const $66d8c44094b61148$export$41007369bd1a8b6b = [
            "click",
            "keydown",
            "keypress",
            "keyup",
            "input"
        ];
        window.addEventListener("extensionSignInViaWebspage-jjfiahucnah837jc", (e)=>{
            (0, $parcel$interopDefault($4X1a2)).runtime.sendMessage({
                from: (0, $66d8c44094b61148$export$c06fc6c47997f1b6).CONTENT_SCRIPT,
                action: "SIGN_IN_VIA_CUSTOM_EVENT",
                payload: e.detail
            });
        });
        window.addEventListener("extensionSignOutViaWebspage-dfjafkadjficyua", (e)=>{
            (0, $parcel$interopDefault($4X1a2)).runtime.sendMessage({
                from: (0, $66d8c44094b61148$export$c06fc6c47997f1b6).CONTENT_SCRIPT,
                action: "SIGN_OUT_VIA_CUSTOM_EVENT",
                payload: e.detail
            });
        });
    })();
    globalThis.define = __define;
})(globalThis.define);
