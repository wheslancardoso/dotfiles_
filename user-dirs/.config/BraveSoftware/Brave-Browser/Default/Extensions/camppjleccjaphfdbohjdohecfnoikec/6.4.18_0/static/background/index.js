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
        parcelRequire.register("cgRoH", function(module, exports) {
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
        var $cgRoH = parcelRequire("cgRoH");
        var $cgRoH = parcelRequire("cgRoH");
        const $a3fc1e0e73421a64$var$CACHE_INTERVAL = 60000;
        const $a3fc1e0e73421a64$export$b92d47fc58be45a3 = (key)=>{
            try {
                if (key) {
                    (0, $parcel$interopDefault($cgRoH)).storage.local.remove(key);
                    return;
                }
                (0, $parcel$interopDefault($cgRoH)).storage.local.clear();
            } catch (e) {}
        };
        const $a3fc1e0e73421a64$export$cc6541612c98a830 = async (key, val, staleIn = 1)=>{
            try {
                const { cacheStorage: cacheStorage } = await (0, $parcel$interopDefault($cgRoH)).storage.local.get("cacheStorage");
                if (cacheStorage) await (0, $parcel$interopDefault($cgRoH)).storage.local.set({
                    cacheStorage: {
                        ...cacheStorage,
                        [key]: {
                            data: val,
                            lastUpdatedAt: Date.now(),
                            staleIn: $a3fc1e0e73421a64$var$CACHE_INTERVAL * staleIn
                        }
                    }
                });
                else await (0, $parcel$interopDefault($cgRoH)).storage.local.set({
                    cacheStorage: {
                        [key]: {
                            data: val,
                            lastUpdatedAt: Date.now(),
                            staleIn: $a3fc1e0e73421a64$var$CACHE_INTERVAL * staleIn
                        }
                    }
                });
            } catch (e) {}
        };
        const $a3fc1e0e73421a64$export$a2b9ece0e6f783e0 = async (key)=>{
            try {
                const { cacheStorage: cacheStorage } = await (0, $parcel$interopDefault($cgRoH)).storage.local.get("cacheStorage");
                if (cacheStorage && cacheStorage[key]) {
                    const localData = cacheStorage[key];
                    const validatedData = $a3fc1e0e73421a64$export$60c024fdb76e949e(localData);
                    if (validatedData.isValid) return validatedData?.data;
                    await (0, $parcel$interopDefault($cgRoH)).storage.local.remove(key);
                    return null;
                }
                return null;
            } catch (e) {}
        };
        const $a3fc1e0e73421a64$export$60c024fdb76e949e = (localData)=>{
            try {
                if (localData === null || localData === undefined) return {
                    isValid: false
                };
                if (Number.isNaN(localData.lastUpdatedAt)) return {
                    isValid: false
                };
                const date = new Date(localData.lastUpdatedAt);
                if (date.toString() === "Invalid Date") return {
                    isValid: false
                };
                const timeToCompare = localData?.staleIn ? localData?.staleIn : $a3fc1e0e73421a64$var$CACHE_INTERVAL;
                if (Date.now() - date.getTime() < timeToCompare) return {
                    isValid: true,
                    data: localData
                };
                return {
                    isValid: false
                };
            } catch (e) {
                return {
                    isValid: false
                };
            }
        };
        const $96a9605956c6167d$export$f8609c05911eb37 = {
            DOMAIN: "https://openai-api-paid-yak3s7dv3a-ue.a.run.app"
        };
        const $96a9605956c6167d$export$576f6f09413201e4 = {
            DOMAIN: "https://merlin-uam-yak3s7dv3a-ue.a.run.app",
            ROUTES: {
                USER_CHAT_HISTORY: "/user/getPaginatedUserChatHistory?customJWT=true",
                WEB_CHAT: "/chat/website?customJWT=true",
                WEB_SUMMARIZE: "/summarize/website?customJWT=true",
                WEB_TEXT_UPLOAD: "/upload/websiteText?customJWT=true"
            }
        };
        const $96a9605956c6167d$export$fc15e9cbb0c46e2f = {
            DOMAIN: "https://merlin-backend-text-extractor-yak3s7dv3a-ue.a.run.app",
            ROUTES: {
                EXTRACT_TEXT_DOC_CHAT: "/extract-text-doc-chat"
            }
        };
        const $96a9605956c6167d$export$cad43b1b9a7fd483 = {
            DOMAIN: "https://us-central1-foyer-work.cloudfunctions.net"
        };
        const $96a9605956c6167d$export$d03967e5444cb133 = "https://app.getmerlin.in";
        const $96a9605956c6167d$export$249683c91812d3b7 = "http://localhost:5173";
        const $96a9605956c6167d$export$c81b252245ce8d13 = `${$96a9605956c6167d$export$d03967e5444cb133}/`;
        const $96a9605956c6167d$export$e246f2e6180553fe = `${$96a9605956c6167d$export$d03967e5444cb133}/plans`;
        const $96a9605956c6167d$export$55bd898f657d639 = `${$96a9605956c6167d$export$d03967e5444cb133}/sign-out-from-extension`;
        const $96a9605956c6167d$export$ccc88b4f4c1ce420 = `${$96a9605956c6167d$export$d03967e5444cb133}/sign-in`;
        const $96a9605956c6167d$export$543079bbcb8765ff = `https://forms.gle/v199ZqMVntjHRQNz7`;
        const $96a9605956c6167d$export$29f13fbd38d82550 = "https://merlinbyfoyer.notion.site/Merlin-Product-Wiki-f7729978374c44d5a70b27133f27e117";
        const $96a9605956c6167d$export$7f45538cd35b2135 = `https://gpt-tokenizer-api-yak3s7dv3a-ue.a.run.app`;
        const $96a9605956c6167d$export$3dba685a72f21f1d = {
            INAPPROPRIATE_INPUT: "Your query has been flagged as inappropriate. Please try again by changing it"
        };
        const $96a9605956c6167d$export$4aed3e440f5b32f8 = `https://us-central1-foyer-work.cloudfunctions.net/logger`;
        const $96a9605956c6167d$export$5afe64f9190a2ebc = [
            "We're glad you're loving Merlin, but you've reached the daily limit. We hate limits, but have to put it as the OpenAI API we use is an expensive paid API.",
            "Upgrade to Merlin Pro for a better experience."
        ];
        const $96a9605956c6167d$export$cf7d21c64b5b220 = {
            FREE: "FREE",
            NONE: "NONE",
            PAID: "PAID"
        };
        const $96a9605956c6167d$export$24029ecf7f61f002 = {
            BOOSTER: "premium-booster",
            ELITE: "premium-elite",
            STARTER: "premium-starter"
        };
        const $96a9605956c6167d$export$c06fc6c47997f1b6 = {
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
        const $96a9605956c6167d$export$5e9d5cc6885c5216 = {
            BLOG_SUMMARIZER: "BLOG_SUMMARIZER",
            DEFAULT: "DEFAULT",
            MERLIN_GUI: "MERLIN_GUI",
            MERLIN_GUI_GPT_4: "MERLIN_GUI_GPT_4",
            SEARCH_GPT: "SEARCH_GPT",
            YOUTUBE_SUMMARY: "YOUTUBE_SUMMARY"
        };
        const $96a9605956c6167d$export$9523889e0a5da4ba = {
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
        const $96a9605956c6167d$export$37c67e5bd9db9fe5 = {
            GPT_3: "GPT 3",
            GPT_4: "GPT 4"
        };
        const $96a9605956c6167d$export$d73415caafa59752 = {
            GPT_3: {
                id: "gpt-3.5-turbo",
                name: "GPT 3"
            },
            GPT_4: {
                id: "gpt-4",
                name: "GPT 4"
            }
        };
        const $96a9605956c6167d$export$d885cec31ce7468e = "https://merlin.foyer.work/onboarding";
        const $96a9605956c6167d$export$8c658cdc4a54ace4 = "https://us-central1-foyer-work.cloudfunctions.net/triggerMerlinUninstallFlow";
        const $96a9605956c6167d$export$fc9c76e2815fe520 = "https://us-central1-foyer-work.cloudfunctions.net/merlinExtensionInstall";
        const $96a9605956c6167d$export$b2fe63a482e7e084 = "https://us-central1-foyer-work.cloudfunctions.net/merlinExtensionUpdate";
        const $96a9605956c6167d$export$c4c57b34d312203b = 10;
        const $96a9605956c6167d$export$b530defda6da64eb = `https://merlin-config.s3.amazonaws.com/config.json`;
        const $96a9605956c6167d$export$5bc09adfc06121ad = "https://forms.gle/Qg73WC6LtUSf4PHS8";
        const $96a9605956c6167d$export$e3a2e9adfb9deeaf = "https://forms.gle/Qg73WC6LtUSf4PHS8";
        const $96a9605956c6167d$export$56eecaf50af74dd3 = "https://merlinbyfoyer.notion.site/Change-Keyboard-Shortcut-31fe3b1595b94fec927d31bce05f83b4";
        const $96a9605956c6167d$export$32944d3591146f13 = "phc_sZZBNR08PFM9Mf5GBbb9lBvujTlo4IBdbb15beviIpX";
        const $96a9605956c6167d$export$55f769226cdb50e2 = "https://app.posthog.com";
        const $96a9605956c6167d$export$e47cdf6f68bfa49d = true;
        const $96a9605956c6167d$export$2a8ab147303ce455 = false;
        const $96a9605956c6167d$export$eebf1d5516602059 = 100;
        const $96a9605956c6167d$export$6662ee6a3f574df6 = {
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
        const $96a9605956c6167d$export$c0afa31d362af5f8 = {
            CUSTOM: "custom",
            SUGGESTED: "suggested"
        };
        const $96a9605956c6167d$export$28ba0a5263dd89b0 = {
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
        const $96a9605956c6167d$export$fdd03fd481885bb7 = [
            "Asking our AI overlords what to do...",
            "Thinking of an answer...",
            "Stitching it all together...",
            "Generating a response..."
        ];
        const $96a9605956c6167d$export$1064fe984a240669 = [
            "Asking our AI overlords what to do...",
            "Looking up your query...",
            "Processing results from web...",
            "Accessing even more information...",
            "Stitching it all together...",
            "Generating a response..."
        ];
        const $96a9605956c6167d$export$b883f66c5ea72c16 = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTGFrc2h5YSBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3XzhKekZHMlFMYi1wQTA5OGtsenJLSVlJVXNIMmJISVIxVWdXST1zOTYtYyIsInN0cmlwZVJvbGUiOm51bGwsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9mb3llci13b3JrIiwiYXVkIjoiZm95ZXItd29yayIsImF1dGhfdGltZSI6MTY4MDA3MjIwNCwidXNlcl9pZCI6ImkxeUFDM0RNMGRkYjlEc0Y3QVdVSTZsMWt5RTMiLCJzdWIiOiJpMXlBQzNETTBkZGI5RHNGN0FXVUk2bDFreUUzIiwiaWF0IjoxNjgwMTE3NDU4LCJleHAiOjE2ODAxMjEwNTgsImVtYWlsIjoibGFrc2h5YWt1bWFyLmRldmVsb3BlckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNTQ0MTE0NTAzNDgyMzY5NzE3NSJdLCJlbWFpbCI6WyJsYWtzaHlha3VtYXIuZGV2ZWxvcGVyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.A_b9LGGf4Snd2MIJ7k9azzFSvw1-Y7Y5vhpV1GrrB7Ds2v04_bdtzfE-CIV8tUXziusqDd4CPr6GK4ONneJVShUGic2BIU-UGN0NyM1T4Jdv9ZHKvTjuoC1NG5mfilmGVtc48OIh0bLmyvZN78Cy_imZRBgKjT3ySAVq-okz1BxQN480BENOog_Cmm2OLbWIo2JyqiIYagpxD4c5VwewQPspWqu4Me6r34Ca-hsZpsspQ1czeZ0BNW39lj74mYtHO2nnnlk8R6cmX2ZUHtASREmj2qc2g-WY04PjvN0J6_jid1VewdjwIga3RFiG5VwJaYhiUe9hVugH4DL2ZPodXw";
        const $96a9605956c6167d$export$83f3696a3c09a7a0 = {
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
        const $96a9605956c6167d$export$4b9555e35fc6d02b = {
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
            preferredOpenAiModel: $96a9605956c6167d$export$37c67e5bd9db9fe5.GPT_3,
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
        const $96a9605956c6167d$export$1abce793a0fb5c = {
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
        const $96a9605956c6167d$export$c54624edc045f5fb = {
            BLOG_SUMMARIZER: "blogSummarizer",
            SELECT_CONTEXT_BTN: "selectContextBtn"
        };
        const $96a9605956c6167d$export$e61606eafe4754d5 = 3000;
        const $96a9605956c6167d$export$e9df91b05880242f = {
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
        const $96a9605956c6167d$export$b4f0261deceabf0a = [
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
        const $96a9605956c6167d$export$41007369bd1a8b6b = [
            "click",
            "keydown",
            "keypress",
            "keyup",
            "input"
        ];
        const $e05789a09f9fc95f$var$processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
                const P = options.promiseModule;
                return new P((resolve, reject)=>{
                    if (options.multiArgs) arguments_.push((...result)=>{
                        if (options.errorFirst) {
                            if (result[0]) reject(result);
                            else {
                                result.shift();
                                resolve(result);
                            }
                        } else resolve(result);
                    });
                    else if (options.errorFirst) arguments_.push((error, result)=>{
                        if (error) reject(error);
                        else resolve(result);
                    });
                    else arguments_.push(resolve);
                    const self1 = this === proxy ? unwrapped : this;
                    Reflect.apply(function_, self1, arguments_);
                });
            };
        const $e05789a09f9fc95f$var$filterCache = new WeakMap();
        function $e05789a09f9fc95f$export$2e2bcd8739ae039(input, options) {
            options = {
                exclude: [
                    /.+(?:Sync|Stream)$/
                ],
                errorFirst: true,
                promiseModule: Promise,
                ...options
            };
            const objectType = typeof input;
            if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
            const filter = (target, key)=>{
                let cached = $e05789a09f9fc95f$var$filterCache.get(target);
                if (!cached) {
                    cached = {};
                    $e05789a09f9fc95f$var$filterCache.set(target, cached);
                }
                if (key in cached) return cached[key];
                const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
                const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
                const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
                const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
                const shouldFilter = included && writableOrConfigurableOwn;
                cached[key] = shouldFilter;
                return shouldFilter;
            };
            const cache = new WeakMap();
            const proxy = new Proxy(input, {
                apply (target, thisArg, args) {
                    const cached = cache.get(target);
                    if (cached) return Reflect.apply(cached, thisArg, args);
                    const pified = options.excludeMain ? target : $e05789a09f9fc95f$var$processFunction(target, options, proxy, target);
                    cache.set(target, pified);
                    return Reflect.apply(pified, thisArg, args);
                },
                get (target, key) {
                    const property = target[key];
                    if (!filter(target, key) || property === Function.prototype[key]) return property;
                    const cached = cache.get(property);
                    if (cached) return cached;
                    if (typeof property === "function") {
                        const pified = $e05789a09f9fc95f$var$processFunction(property, options, proxy, target);
                        cache.set(property, pified);
                        return pified;
                    }
                    return property;
                }
            });
            return proxy;
        }
        var $c23188f479294b06$var$h = ()=>{
            try {
                let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (e[1] === "Chrome") return parseInt(e[2]) < 100;
            } catch  {
                return !1;
            }
            return !1;
        };
        var $c23188f479294b06$export$7fd47ffa520ee9da = class {
            #s;
            #e;
            get primaryClient() {
                return this.#e;
            }
            #t;
            get secondaryClient() {
                return this.#t;
            }
            #r;
            get area() {
                return this.#r;
            }
            get hasWebApi() {
                try {
                    return typeof window < "u" && !!window.localStorage;
                } catch (e) {
                    return console.error(e), !1;
                }
            }
            #a = new Map;
            #i;
            get copiedKeySet() {
                return this.#i;
            }
            isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
            #n = !1;
            get allCopied() {
                return this.#n;
            }
            getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
            get hasExtensionApi() {
                try {
                    return !!this.getExtStorageApi();
                } catch (e) {
                    return console.error(e), !1;
                }
            }
            isWatchSupported = ()=>this.hasExtensionApi;
            keyNamespace = "";
            isValidKey = (e)=>e.startsWith(this.keyNamespace);
            getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
            getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
            constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: a = [] } = {}){
                this.setCopiedKeySet(a), this.#r = e, this.#n = t;
                try {
                    this.hasWebApi && (t || a.length > 0) && (this.#t = window.localStorage);
                } catch  {}
                try {
                    this.hasExtensionApi && (this.#s = this.getExtStorageApi(), $c23188f479294b06$var$h() ? this.#e = (0, $e05789a09f9fc95f$export$2e2bcd8739ae039)(this.#s[this.area], {
                        exclude: [
                            "getBytesInUse"
                        ]
                    }) : this.#e = this.#s[this.area]);
                } catch  {}
            }
            setCopiedKeySet(e) {
                this.#i = new Set(e);
            }
            rawGetAll = ()=>this.#e?.get();
            getAll = async ()=>{
                let e = await this.rawGetAll();
                return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [a, s])=>(t[this.getUnnamespacedKey(a)] = s, t), {});
            };
            copy = async (e)=>{
                let t = e === void 0;
                if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
                let a = this.allCopied ? await this.rawGetAll() : await this.#e.get((t ? [
                    ...this.copiedKeySet
                ] : [
                    e
                ]).map(this.getNamespacedKey));
                if (!a) return !1;
                let s = !1;
                for(let r in a){
                    let i = a[r], n = this.#t?.getItem(r);
                    this.#t?.setItem(r, i), s ||= i !== n;
                }
                return s;
            };
            rawGet = async (e)=>this.hasExtensionApi ? (await this.#e.get(e))[e] : this.isCopied(e) ? this.#t?.getItem(e) : null;
            rawSet = async (e, t)=>(this.isCopied(e) && this.#t?.setItem(e, t), this.hasExtensionApi && await this.#e.set({
                    [e]: t
                }), null);
            clear = async (e = !1)=>{
                e && this.#t?.clear(), await this.#e.clear();
            };
            rawRemove = async (e)=>{
                this.isCopied(e) && this.#t?.removeItem(e), this.hasExtensionApi && await this.#e.remove(e);
            };
            removeAll = async ()=>{
                let e = await this.rawGetAll(), t = Object.keys(e);
                await Promise.all(t.map(this.rawRemove));
            };
            watch = (e)=>{
                let t = this.isWatchSupported();
                return t && this.#o(e), t;
            };
            #o = (e)=>{
                for(let t in e){
                    let a = this.getNamespacedKey(t), s = this.#a.get(a)?.callbackSet || new Set;
                    if (s.add(e[t]), s.size > 1) return;
                    let r = (i, n)=>{
                        if (n !== this.area || !i[a]) return;
                        let g = this.#a.get(a);
                        Promise.all([
                            this.parseValue(i[a].newValue),
                            this.parseValue(i[a].oldValue)
                        ]).then(([p, d])=>{
                            for (let m of g.callbackSet)m({
                                newValue: p,
                                oldValue: d
                            }, n);
                        });
                    };
                    this.#s.onChanged.addListener(r), this.#a.set(a, {
                        callbackSet: s,
                        listener: r
                    });
                }
            };
            unwatch = (e)=>{
                let t = this.isWatchSupported();
                return t && this.#c(e), t;
            };
            #c(e) {
                for(let t in e){
                    let a = this.getNamespacedKey(t), s = e[t];
                    if (this.#a.has(a)) {
                        let r = this.#a.get(a);
                        r.callbackSet.delete(s), r.callbackSet.size === 0 && (this.#a.delete(a), this.#s.onChanged.removeListener(r.listener));
                    }
                }
            }
            unwatchAll = ()=>this.#h();
            #h() {
                this.#a.forEach(({ listener: e })=>this.#s.onChanged.removeListener(e)), this.#a.clear();
            }
        }, $c23188f479294b06$export$bf2a15d34f3c441c = class extends $c23188f479294b06$export$7fd47ffa520ee9da {
            get = async (e)=>{
                let t = this.getNamespacedKey(e), a = await this.rawGet(t);
                return this.parseValue(a);
            };
            set = async (e, t)=>{
                let a = this.getNamespacedKey(e), s = JSON.stringify(t);
                return this.rawSet(a, s);
            };
            remove = async (e)=>{
                let t = this.getNamespacedKey(e);
                return this.rawRemove(t);
            };
            setNamespace = (e)=>{
                this.keyNamespace = e;
            };
            parseValue = async (e)=>{
                try {
                    if (e !== void 0) return JSON.parse(e);
                } catch (t) {
                    console.error(t);
                }
            };
        };
        const $c974777c5a77c3f2$var$randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        var $c974777c5a77c3f2$export$2e2bcd8739ae039 = {
            randomUUID: $c974777c5a77c3f2$var$randomUUID
        };
        let $ae9fedbab09a5b84$var$getRandomValues;
        const $ae9fedbab09a5b84$var$rnds8 = new Uint8Array(16);
        function $ae9fedbab09a5b84$export$2e2bcd8739ae039() {
            if (!$ae9fedbab09a5b84$var$getRandomValues) {
                $ae9fedbab09a5b84$var$getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
                if (!$ae9fedbab09a5b84$var$getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            }
            return $ae9fedbab09a5b84$var$getRandomValues($ae9fedbab09a5b84$var$rnds8);
        }
        var $b2ebe9a90a64b859$export$2e2bcd8739ae039 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        function $5ec8e9210cc9b509$var$validate(uuid) {
            return typeof uuid === "string" && (0, $b2ebe9a90a64b859$export$2e2bcd8739ae039).test(uuid);
        }
        var $5ec8e9210cc9b509$export$2e2bcd8739ae039 = $5ec8e9210cc9b509$var$validate;
        const $d20ef1316b79e661$var$byteToHex = [];
        for(let i = 0; i < 256; ++i)$d20ef1316b79e661$var$byteToHex.push((i + 0x100).toString(16).slice(1));
        function $d20ef1316b79e661$export$8fb373d660548968(arr, offset = 0) {
            return ($d20ef1316b79e661$var$byteToHex[arr[offset + 0]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 1]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 2]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 3]] + "-" + $d20ef1316b79e661$var$byteToHex[arr[offset + 4]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 5]] + "-" + $d20ef1316b79e661$var$byteToHex[arr[offset + 6]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 7]] + "-" + $d20ef1316b79e661$var$byteToHex[arr[offset + 8]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 9]] + "-" + $d20ef1316b79e661$var$byteToHex[arr[offset + 10]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 11]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 12]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 13]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 14]] + $d20ef1316b79e661$var$byteToHex[arr[offset + 15]]).toLowerCase();
        }
        function $d20ef1316b79e661$var$stringify(arr, offset = 0) {
            const uuid = $d20ef1316b79e661$export$8fb373d660548968(arr, offset);
            if (!(0, $5ec8e9210cc9b509$export$2e2bcd8739ae039)(uuid)) throw TypeError("Stringified UUID is invalid");
            return uuid;
        }
        var $d20ef1316b79e661$export$2e2bcd8739ae039 = $d20ef1316b79e661$var$stringify;
        function $a93df1c223a9be14$var$v4(options, buf, offset) {
            if ((0, $c974777c5a77c3f2$export$2e2bcd8739ae039).randomUUID && !buf && !options) return (0, $c974777c5a77c3f2$export$2e2bcd8739ae039).randomUUID();
            options = options || {};
            const rnds = options.random || (options.rng || (0, $ae9fedbab09a5b84$export$2e2bcd8739ae039))();
            rnds[6] = rnds[6] & 0x0f | 0x40;
            rnds[8] = rnds[8] & 0x3f | 0x80;
            if (buf) {
                offset = offset || 0;
                for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
                return buf;
            }
            return (0, $d20ef1316b79e661$export$8fb373d660548968)(rnds);
        }
        var $a93df1c223a9be14$export$2e2bcd8739ae039 = $a93df1c223a9be14$var$v4;
        var $cgRoH = parcelRequire("cgRoH");
        async function $eb2956eac9c05e11$export$23fe9b5e06a2f955() {
            const queryOptions = {
                active: true,
                currentWindow: true
            };
            const [tab] = await chrome.tabs.query(queryOptions);
            return tab;
        }
        function $eb2956eac9c05e11$export$ca798a7e6e94638c() {
            let selectedText;
            if (document.location.href.includes("docs.google.com/spreadsheets")) {
                const selectionObj = document.getSelection();
                if ((selectionObj.type === "Range" || selectionObj.type === "Caret") && selectionObj.focusNode.nodeValue) selectedText = selectionObj.focusNode.nodeValue.toString();
            } else selectedText = document.getSelection().toString();
            if (selectedText && selectedText !== "Type your request above and press enter") return selectedText;
            return "";
        }
        async function $eb2956eac9c05e11$export$6aaea116448520d7(message, popup) {
            try {
                chrome.tabs.query({}, (tabs)=>{
                    tabs.forEach((tab)=>{
                        try {
                            chrome.tabs.sendMessage(tab.id, message);
                        } catch (err) {}
                    });
                });
                if (popup) chrome.runtime.sendMessage(message);
            } catch (err) {}
        }
        async function $eb2956eac9c05e11$export$b81fe63a6e2a104d(url) {
            try {
                chrome.runtime.sendMessage({
                    action: (0, $96a9605956c6167d$export$9523889e0a5da4ba).NEW_TAB,
                    payload: {
                        url: url
                    }
                });
            } catch (err) {}
        }
        const $eb2956eac9c05e11$export$75a7b857d20625ea = (callback)=>{
            chrome.storage.sync.get("merlinSettings", (items)=>{
                if (!items.merlinSettings) {
                    const defaultSettings = {
                        isDisabled: false,
                        whiteList: []
                    };
                    items.merlinSettings = defaultSettings;
                    chrome.storage.sync.set({
                        merlinSettings: JSON.stringify(defaultSettings)
                    });
                }
                const settings = JSON.parse(items.merlinSettings);
                callback(settings);
            });
        };
        const $eb2956eac9c05e11$export$b54f766a4833ef69 = (callback, settings)=>{
            chrome.storage.sync.set({
                merlinSettings: JSON.stringify(settings)
            });
            callback(settings);
        };
        const $eb2956eac9c05e11$var$handleError = ()=>{
            const { lastError: lastError } = (0, $parcel$interopDefault($cgRoH)).runtime;
            if (lastError) (0, $parcel$interopDefault($cgRoH)).runtime.reload();
        };
        const $eb2956eac9c05e11$var$doPollingRequest = (message)=>{
            const MAX_ITERATIONS = 25;
            let CURRENT_ITERATIONS = 0;
            const intervalId = setInterval(async ()=>{
                if (CURRENT_ITERATIONS >= MAX_ITERATIONS) {
                    clearInterval(intervalId);
                    $eb2956eac9c05e11$var$handleError();
                    return;
                }
                const pollingRequest = {
                    action: "POLLING"
                };
                const pollingResponse = await (0, $parcel$interopDefault($cgRoH)).runtime.sendMessage(pollingRequest);
                if (pollingResponse && pollingResponse.action && pollingResponse.action === "ACTIVE") {
                    clearInterval(intervalId);
                    await (0, $parcel$interopDefault($cgRoH)).runtime.sendMessage(message);
                }
                CURRENT_ITERATIONS += 1;
            }, 200);
        };
        const $eb2956eac9c05e11$export$fd1b49f116ea73e8 = async (message)=>{
            try {
                const res = await (0, $parcel$interopDefault($cgRoH)).runtime.sendMessage({
                    action: "PING"
                });
                if (res !== null && res.action && res.action === "PONG") $eb2956eac9c05e11$var$doPollingRequest(message);
                else $eb2956eac9c05e11$var$handleError();
            } catch (err) {
                $eb2956eac9c05e11$var$handleError();
            }
        };
        const $eb2956eac9c05e11$export$36639581ea6579a3 = (jsonStr)=>{
            let cleanedJSON = jsonStr.replace(/,\s*([\]}])/g, "$1");
            cleanedJSON = cleanedJSON.replace(/(^\s*\[\s*|\s*\]\s*$)/g, "");
            const firstCurlyIndex = cleanedJSON.indexOf("{");
            const lastCurlyIndex = cleanedJSON.lastIndexOf("}");
            if (firstCurlyIndex !== -1 && lastCurlyIndex !== -1 && firstCurlyIndex < lastCurlyIndex) cleanedJSON = cleanedJSON.slice(firstCurlyIndex, lastCurlyIndex + 1);
            return cleanedJSON;
        };
        const $eb2956eac9c05e11$export$8d13507e7362f6c9 = new (0, $c23188f479294b06$export$bf2a15d34f3c441c)({
            area: "local"
        });
        function $eb2956eac9c05e11$export$8d48dbb0759df1f1(html) {
            const parser = new DOMParser();
            const document1 = parser.parseFromString(html, "text/html");
            const walker = document1.createTreeWalker(document1.body, NodeFilter.SHOW_TEXT);
            let cleanText = "";
            while(walker.nextNode()){
                const currentTextNode = walker.currentNode;
                if (currentTextNode.textContent.trim() !== "") cleanText += `${currentTextNode.textContent}\n`;
            }
            return cleanText;
        }
        function $eb2956eac9c05e11$export$1244e0acd90a6f35() {
            const chatId = (0, $a93df1c223a9be14$export$2e2bcd8739ae039)();
            return chatId;
        }
        function $eb2956eac9c05e11$export$3ae94a2503e890a1(updatedAt) {
            try {
                if (!updatedAt) return "some time ago";
                updatedAt = new Date(updatedAt);
            } catch (err) {
                return "some time ago";
            }
            const now = new Date();
            const isToday = now.toDateString() === updatedAt.toDateString();
            const isYesterday = now.toDateString() === new Date(updatedAt.getTime() + 86400000).toDateString();
            const isSameYear = now.getFullYear() === updatedAt.getFullYear();
            if (isToday) return updatedAt.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });
            if (isYesterday) return updatedAt.toLocaleDateString([], {
                day: "2-digit",
                month: "short"
            });
            if (!isSameYear) return updatedAt.getFullYear().toString();
            return updatedAt.toLocaleDateString([], {
                day: "2-digit",
                month: "short"
            });
        }
        function $eb2956eac9c05e11$var$detectOS() {
            const platform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";
            if (platform === "Windows" || platform === "windows" || platform === "win" || platform === "win32") return "win";
            return "other";
        }
        function $eb2956eac9c05e11$export$85a5192d5b34ddc9() {
            const os = $eb2956eac9c05e11$var$detectOS();
            if (os === "win") return "ctrl+m";
            return "command+m";
        }
        const $eb2956eac9c05e11$export$1109aba56582d692 = async (featureKey)=>{
            const userSitePref = await $eb2956eac9c05e11$export$8d13507e7362f6c9.get("userSitePreferences");
            const currentDomain = window.location.hostname;
            if (userSitePref && userSitePref[featureKey]) {
                const blackListedDomainArr = userSitePref[featureKey];
                if (blackListedDomainArr && blackListedDomainArr.includes(currentDomain)) return true;
            }
            return false;
        };
        const $eb2956eac9c05e11$export$ae2c2e06e0b13c96 = async (featureKey, state = "disable")=>{
            const currentDomain = window.location.hostname;
            const userSitePref = await $eb2956eac9c05e11$export$8d13507e7362f6c9.get("userSitePreferences");
            if (state === "disable") try {
                if (userSitePref && userSitePref[featureKey]) {
                    const currentFeatureDomainArr = userSitePref[featureKey];
                    if (!currentFeatureDomainArr.includes(currentDomain)) await $eb2956eac9c05e11$export$8d13507e7362f6c9.set("userSitePreferences", {
                        ...userSitePref,
                        [featureKey]: [
                            ...currentFeatureDomainArr,
                            currentDomain
                        ]
                    });
                } else await $eb2956eac9c05e11$export$8d13507e7362f6c9.set("userSitePreferences", {
                    ...userSitePref,
                    [featureKey]: [
                        currentDomain
                    ]
                });
            } catch (error) {}
            else if (state === "enable") try {
                if (userSitePref && userSitePref[featureKey]) {
                    const currentFeatureDomainArr = userSitePref[featureKey];
                    if (currentFeatureDomainArr.includes(currentDomain)) await $eb2956eac9c05e11$export$8d13507e7362f6c9.set("userSitePreferences", {
                        ...userSitePref,
                        [featureKey]: currentFeatureDomainArr.filter((domain)=>domain !== currentDomain)
                    });
                }
            } catch (error) {}
        };
        function $eb2956eac9c05e11$export$afa7df77eae551b9(usertype) {
            return usertype === "b2b_admin" || usertype === "b2b_employee";
        }
        function $eb2956eac9c05e11$export$2509fb195b41a694(text) {
            const avgCharsPerToken = 4;
            const numCharacters = text.length;
            const numTokens = Math.ceil(numCharacters / avgCharsPerToken);
            return numTokens;
        }
        function $eb2956eac9c05e11$export$61fc7d43ac8f84b0(func, timeout = 300) {
            let timer;
            return (...args)=>{
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    func.apply(this, args);
                }, timeout);
            };
        }
        function $eb2956eac9c05e11$export$72e33018fad83afe(func, delay = 300) {
            let timer;
            let isFirstCall = true;
            return (...args)=>{
                if (isFirstCall) {
                    func.apply(this, args);
                    isFirstCall = false;
                }
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    func.apply(this, args);
                }, delay);
            };
        }
        const $eb2956eac9c05e11$export$de363e709c412c8a = (func, limit)=>{
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(()=>inThrottle = false, limit);
                }
            };
        };
        function $eb2956eac9c05e11$export$cac9bc8531bf9a1f(promptsFor) {
            const tags = Object.values((0, $96a9605956c6167d$export$6662ee6a3f574df6));
            if (tags.includes(promptsFor)) return promptsFor;
            return "DEFAULT";
        }
        const $657cfa47d15821a0$export$ab2c945874030081 = async (token)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/status?customJWT=true`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    method: "GET"
                });
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$e349cc27a81e9d92 = async (input)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$7f45538cd35b2135)}/batch-blog`, {
                    body: JSON.stringify({
                        query: input
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                let responseJson = await response.json();
                let correctedObjFormat;
                if (response.status === 200) correctedObjFormat = {
                    data: responseJson,
                    status: "success"
                };
                else correctedObjFormat = {
                    error: {
                        message: "Something went wrong.",
                        type: (0, $96a9605956c6167d$export$28ba0a5263dd89b0).MISC
                    },
                    status: "error"
                };
                responseJson = correctedObjFormat;
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$16b8583605e6b453 = async ()=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/getFeatures`);
                let responseJson = await response.json();
                let correctedObjFormat;
                if (response.status === 200) correctedObjFormat = {
                    data: responseJson,
                    status: "success"
                };
                else correctedObjFormat = {
                    error: {
                        message: "Something went wrong.",
                        type: (0, $96a9605956c6167d$export$28ba0a5263dd89b0).MISC
                    },
                    status: "error"
                };
                responseJson = correctedObjFormat;
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$352d51e7e94bd7e2 = async (token, query, key, useCache = true)=>{
            try {
                const UserSettings = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("UserSettings");
                const response = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/summarize/blog?&customJWT=true`, {
                    body: JSON.stringify({
                        key: key,
                        language: UserSettings.language || "AUTO",
                        query: query,
                        useCache: useCache
                    }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$c542b5e295206b2a = async (refreshToken)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/session/refresh`, {
                    body: JSON.stringify({
                        refreshToken: refreshToken
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$8c96a31d12041984 = async (token, query, signal)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/merlin-actions-new?customJWT=true`, {
                    body: JSON.stringify(query),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    signal: signal
                });
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $657cfa47d15821a0$export$18029fd8824da360 = async ()=>{
            try {
                const cachedData = await (0, $a3fc1e0e73421a64$export$a2b9ece0e6f783e0)("extensionConfigs");
                if (cachedData) return cachedData.data;
                const response = await fetch(`${(0, $96a9605956c6167d$export$b530defda6da64eb)}`);
                if (response.status === 200) {
                    const responseJson = await response.json();
                    await (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("extensionConfigs", responseJson, 60);
                    return responseJson;
                }
                return null;
            } catch (err) {
                return null;
            }
        };
        const $657cfa47d15821a0$export$ad1ea8f3ca5adced = async (token, namespace)=>{
            try {
                const res = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/delete/document?customJWT=true`, {
                    body: JSON.stringify({
                        namespace: namespace
                    }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await res.json();
                if (responseJson.status === "error") throw responseJson.error;
                return responseJson;
            } catch (e) {
                throw e;
            }
        };
        const $657cfa47d15821a0$export$6b2e13770a902e2b = async (token, data)=>{
            try {
                const res = await fetch((0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN + (0, $96a9605956c6167d$export$576f6f09413201e4).ROUTES.WEB_SUMMARIZE, {
                    body: JSON.stringify(data),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await res.json();
                if (responseJson.status === "error") throw responseJson.error;
                return responseJson;
            } catch (e) {
                throw e;
            }
        };
        async function $657cfa47d15821a0$export$d88f3a7333a6ee3e(token, formData) {
            try {
                const res = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/chat/document/upload?customJWT=true`, {
                    body: formData,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    method: "POST",
                    redirect: "follow"
                });
                const responseJson = await res.json();
                if (responseJson.status === "error") throw responseJson.error;
                return responseJson;
            } catch (e) {
                throw e;
            }
        }
        async function $657cfa47d15821a0$export$26f4860e96c8c90c(token, formData) {
            const data = formData;
            data.append("token", token);
            const res = await fetch(`${(0, $96a9605956c6167d$export$fc15e9cbb0c46e2f).DOMAIN}${(0, $96a9605956c6167d$export$fc15e9cbb0c46e2f).ROUTES.EXTRACT_TEXT_DOC_CHAT}`, {
                body: data,
                headers: {
                    "Access-Control-Request-Method": "POST"
                },
                method: "POST"
            });
            const responseJson = await res.json();
            const responseDetails = responseJson?.detail;
            if (responseDetails.status === "error") throw responseDetails.error;
            return responseDetails;
        }
        async function $657cfa47d15821a0$export$187546525686e8d2(token, chatId, namespace, useCache, language) {
            try {
                const res = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}/summarize/document?customJWT=true`, {
                    body: JSON.stringify({
                        chatId: chatId,
                        language: language,
                        namespace: namespace,
                        useCache: useCache
                    }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await res.json();
                if (responseJson.status === "error") throw responseJson.error;
                return responseJson;
            } catch (e) {
                throw e;
            }
        }
        async function $657cfa47d15821a0$export$d67536a8967f7274(token, text, webpage, chatId, namespace) {
            try {
                const res = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}${(0, $96a9605956c6167d$export$576f6f09413201e4).ROUTES.WEB_TEXT_UPLOAD}`, {
                    body: JSON.stringify({
                        chatId: chatId,
                        namespace: namespace,
                        text: text,
                        webpage: webpage
                    }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await res.json();
                if (responseJson.status === "error") throw responseJson.error;
                return responseJson;
            } catch (e) {
                throw e;
            }
        }
        const $657cfa47d15821a0$export$adc52654a5569fb0 = async (token, page, ENTRY_PER_PAGE)=>{
            const response = await fetch(`${(0, $96a9605956c6167d$export$576f6f09413201e4).DOMAIN}${(0, $96a9605956c6167d$export$576f6f09413201e4).ROUTES.USER_CHAT_HISTORY}`, {
                body: JSON.stringify({
                    ENTRY_PER_PAGE: ENTRY_PER_PAGE,
                    page: page
                }),
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                method: "POST"
            });
            const responseJson = await response.json();
            if (responseJson.status === "success") return responseJson.data;
            if (responseJson.status === "error") throw responseJson.error;
            throw new Error("Something went wrong");
        };
        const $d85303f17a80bdbb$export$618f8e766eeeea20 = async (token, template)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/userPromptTemplatev2?token=${token}&customJWT=true`, {
                    body: JSON.stringify(template),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("userPromptTemplates", responseJson.data, 30);
                    return responseJson.data;
                }
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$16f7fae4b04508d6 = async (token, template)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/userPromptTemplatev2?token=${token}&customJWT=true`, {
                    body: JSON.stringify(template),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "PATCH"
                });
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("userPromptTemplates", responseJson.data, 30);
                    return responseJson.data;
                }
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$c5f5c463010a64ce = async (token, template)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/userPromptTemplatev2?token=${token}&customJWT=true`, {
                    body: JSON.stringify({
                        id: template.id
                    }),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "DELETE"
                });
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("userPromptTemplates", responseJson.data, 30);
                    return responseJson.data;
                }
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$364a940bd9326d6 = async (token, websiteUrl)=>{
            try {
                const cachedData = await (0, $a3fc1e0e73421a64$export$a2b9ece0e6f783e0)("websitePromptSuggestions");
                if (cachedData) return cachedData.data;
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/getWebsitePromptSuggestions?websiteUrl=${websiteUrl}&token=${token}&customJWT=true`);
                let responseJson = await response.json();
                let correctedObjFormat;
                if (response.status === 200) correctedObjFormat = {
                    data: responseJson.data,
                    status: "success"
                };
                else correctedObjFormat = {
                    error: {
                        message: "Something went wrong.",
                        type: (0, $96a9605956c6167d$export$28ba0a5263dd89b0).MISC
                    },
                    status: "error"
                };
                responseJson = correctedObjFormat;
                if (responseJson.status === "success") {
                    const modifiedArray = [];
                    responseJson.data.forEach((value)=>{
                        const val = {
                            promptName: value.title,
                            promptText: value.suggestion
                        };
                        modifiedArray.push(val);
                    });
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("websitePromptSuggestions", modifiedArray, 720);
                    return modifiedArray;
                }
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$718061833e7b231 = async (token, websiteUrl, id)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/incrementPromptSuggestionUsageCount?websiteUrl=${websiteUrl}&token=${token}&id=${id}&customJWT=true`);
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("websitePromptSuggestions", responseJson.data, 720);
                    return responseJson.data;
                }
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$41ad46fc889f14dc = async (token)=>{
            try {
                const cachedData = await (0, $a3fc1e0e73421a64$export$a2b9ece0e6f783e0)("userPromptTemplates");
                if (cachedData) return cachedData.data;
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/userPromptTemplatev2?token=${token}&customJWT=true`);
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("userPromptTemplates", responseJson.data, 30);
                    return responseJson.data;
                }
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$43b28919de068e1f = async ()=>{
            const FallbackPrompts = [
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
            try {
                const cachedData = await (0, $a3fc1e0e73421a64$export$a2b9ece0e6f783e0)("fabStripPrompts");
                if (cachedData) return cachedData.data;
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/fetchPrompts`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                let responseJson = await response.json();
                let correctedObjFormat;
                if (response.status === 200) correctedObjFormat = {
                    data: {
                        ...responseJson
                    },
                    status: "success"
                };
                else correctedObjFormat = {
                    error: {
                        message: "Something went wrong.",
                        type: (0, $96a9605956c6167d$export$28ba0a5263dd89b0).MISC
                    },
                    status: "error"
                };
                responseJson = correctedObjFormat;
                if (responseJson.status === "success") {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("fabStripPrompts", responseJson.data, 720);
                    return responseJson.data;
                }
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$9ccaefe55eef5a1 = async ()=>{
            try {
                const cachedData = await (0, $a3fc1e0e73421a64$export$a2b9ece0e6f783e0)("merlinFeaturesConfig");
                if (cachedData) return cachedData.data;
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/getConfigForMerlinFeaturesv2`);
                const responseJson = await response.json();
                if (response.status === 200) {
                    (0, $a3fc1e0e73421a64$export$cc6541612c98a830)("merlinFeaturesConfig", responseJson, 180);
                    return responseJson;
                }
                return 0, $96a9605956c6167d$export$83f3696a3c09a7a0;
            } catch (err) {
                return 0, $96a9605956c6167d$export$83f3696a3c09a7a0;
            }
        };
        const $d85303f17a80bdbb$export$5949a312e5249f8d = async (token)=>{
            const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/getUserChatHistory?token=${token}&customJWT=true`);
            const responseJson = await response.json();
            if (responseJson.status === "success") return responseJson.data;
            if (responseJson.status === "error") throw responseJson.error;
        };
        const $d85303f17a80bdbb$export$e91c34c3d2e4121a = async (token, chatId)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/deleteUserChatHistory?token=${token}&chatId=${chatId}&customJWT=true`);
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$6127df0177ff9cb7 = async (token)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/getUserUploadedDocs?token=${token}&customJWT=true`);
                const responseJson = await response.json();
                if (responseJson.status === "success") return responseJson.data;
                if (responseJson.status === "error") throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        const $d85303f17a80bdbb$export$45efd9e1095818d9 = async (type)=>{
            try {
                const response = await fetch(`${(0, $96a9605956c6167d$export$cad43b1b9a7fd483).DOMAIN}/blackListDomainBlogSummarizer`, {
                    body: JSON.stringify({
                        type: type === "COUNT" ? "count" : "rage",
                        url: window.location.hostname
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                });
                const responseJson = await response.json();
                if (response.status === 200) return responseJson.data;
                throw responseJson.error;
            } catch (err) {
                throw err;
            }
        };
        var $cgRoH = parcelRequire("cgRoH");
        var $b560e9699a333eef$export$87c69b2a3a149bea;
        (function(YOUTUBE_SUMMARY) {
            YOUTUBE_SUMMARY["GET_YOUTUBE_SUMMARY"] = "GET_YOUTUBE_SUMMARY";
        })($b560e9699a333eef$export$87c69b2a3a149bea || ($b560e9699a333eef$export$87c69b2a3a149bea = {}));
        var $b560e9699a333eef$export$83c8d7110915321e;
        (function(SOURCE) {
            SOURCE["YOUTUBE_BTN"] = "YOUTUBE_BTN";
            SOURCE["YOUTUBE_SUMMARY"] = "YOUTUBE_SUMMARY";
            SOURCE["BACKGROUND"] = "BACKGROUND";
            SOURCE["YOUTUBE_PAGE_FOREGROUND"] = "YOUTUBE_PAGE_FOREGROUND";
            SOURCE["YOUTUBE_PAGE_MOUNT_REQUEST"] = "YOUTUBE_PAGE_MOUNT_REQUEST";
        })($b560e9699a333eef$export$83c8d7110915321e || ($b560e9699a333eef$export$83c8d7110915321e = {}));
        const $c3277cc0f033a78c$export$46f6d19d28231cb8 = async (sender)=>{
            let tabId;
            if (!sender.tab) {
                const [tab] = await (0, $parcel$interopDefault($cgRoH)).tabs.query({
                    active: true,
                    lastFocusedWindow: true
                });
                tabId = tab.id;
            } else tabId = sender.tab.id;
            if (tabId === undefined) return;
            return tabId;
        };
        const $c3277cc0f033a78c$export$8db269d84aa70a37 = ()=>{
            (0, $parcel$interopDefault($cgRoH)).runtime.onMessage.addListener(async (request, sender)=>{
                const tabId = await $c3277cc0f033a78c$export$46f6d19d28231cb8(sender);
                if (request.from === (0, $b560e9699a333eef$export$83c8d7110915321e).YOUTUBE_BTN) (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabId, {
                    from: (0, $b560e9699a333eef$export$83c8d7110915321e).BACKGROUND,
                    action: "YOUTUBE_BTN_CLICKED"
                });
                if (request.from === (0, $b560e9699a333eef$export$83c8d7110915321e).YOUTUBE_SUMMARY && request.action === "SEND_BATCH_LENGTH") (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabId, {
                    from: (0, $b560e9699a333eef$export$83c8d7110915321e).BACKGROUND,
                    action: "SEND_BATCH_LENGTH",
                    data: request.data
                });
            });
            (0, $parcel$interopDefault($cgRoH)).runtime.onMessageExternal.addListener(async (request, sender)=>{
                const tabId = await $c3277cc0f033a78c$export$46f6d19d28231cb8(sender);
                if (request.from === (0, $b560e9699a333eef$export$83c8d7110915321e).YOUTUBE_PAGE_FOREGROUND) (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabId, {
                    from: (0, $b560e9699a333eef$export$83c8d7110915321e).BACKGROUND,
                    action: "SEND_CAPTIONS",
                    data: request.data
                });
            });
        };
        const $c7d133bbc5c093d3$var$initAuthDetails = {
            authType: "firebase",
            isAuthenticated: false,
            isLoading: true,
            session: {
                refreshToken: null
            },
            token: null,
            usageDetails: {
                limit: 0,
                type: "NONE",
                used: 0
            }
        };
        const $c7d133bbc5c093d3$var$initAuthInStorage = async ()=>{
            const previousAuthDetails = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("authDetails");
            if (previousAuthDetails && previousAuthDetails.isAuthenticated) {
                if (!previousAuthDetails.hasOwnProperty("session")) $c7d133bbc5c093d3$var$updateAuthDetails({
                    ...$c7d133bbc5c093d3$var$initAuthDetails,
                    isLoading: false
                });
            } else $c7d133bbc5c093d3$var$updateAuthDetails({
                ...$c7d133bbc5c093d3$var$initAuthDetails,
                isLoading: false
            });
        };
        function $c7d133bbc5c093d3$var$setupAutoReloadOnCrash() {
            onerror = function() {
                setTimeout(()=>chrome.runtime.reload(), 1000);
                return true;
            };
        }
        const $c7d133bbc5c093d3$var$bgStartupRoutine = async ()=>{
            try {
                $c7d133bbc5c093d3$var$setupAutoReloadOnCrash();
                $c7d133bbc5c093d3$var$initAuthInStorage();
                (0, $d85303f17a80bdbb$export$9ccaefe55eef5a1)();
            } catch (err) {}
        };
        $c7d133bbc5c093d3$var$bgStartupRoutine();
        const $c7d133bbc5c093d3$var$updateAuthDetails = async (newAuthDetails)=>{
            try {
                const previousAuthDetails = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("authDetails");
                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("authDetails", {
                    ...previousAuthDetails,
                    ...newAuthDetails
                }).then(()=>void 0);
            } catch (err) {}
        };
        chrome.runtime.onInstalled.addListener((details)=>{
            $c7d133bbc5c093d3$var$checkShortcut();
            const dataToDumpWithExtensionLifecycleChange = `extensionVersion=${chrome.runtime.getManifest().version}`;
            if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
                fetch(`${(0, $96a9605956c6167d$export$fc9c76e2815fe520)}?${dataToDumpWithExtensionLifecycleChange}`);
                (0, $parcel$interopDefault($cgRoH)).tabs.create({
                    url: (0, $96a9605956c6167d$export$d885cec31ce7468e)
                });
                chrome.runtime.setUninstallURL(`${(0, $96a9605956c6167d$export$8c658cdc4a54ace4)}?${dataToDumpWithExtensionLifecycleChange}`);
                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("UserSettings", {
                    availableLanguages: {
                        AUTO: "AUTO",
                        CHINESE_SIMPLIFIED: "Chinese Si.",
                        CHINESE_TRADITIONAL: "China Tr.",
                        CZECH: "Czech",
                        DANISH: "Danish",
                        DUTCH: "Dutch",
                        ENGLISH: "English",
                        FILIPINO: "Filipino",
                        FRENCH: "French",
                        GERMAN: "German",
                        HINDI: "Hindi",
                        HUNGARIAN: "Hungarian",
                        INDONESIAN: "Indonesian",
                        ITALIAN: "Italian",
                        JAPANESE: "Japanese",
                        KOREAN: "Korean",
                        NORWEGIAN: "Norwegian",
                        POLISH: "Polish",
                        PORTUGUESE: "Portuguese",
                        ROMANIAN: "Romanian",
                        RUSSIAN: "Russian",
                        SPANISH: "Spanish",
                        THAI: "Thai",
                        TURKISH: "Turkish",
                        UKRAINIAN: "Ukrainian",
                        VIETNAMESE: "Vietnamese"
                    },
                    blogSummarizer: {
                        visible: true
                    },
                    isChatUiExpanded: false,
                    language: "AUTO",
                    merlinGUI: {
                        visible: false
                    },
                    merlinOnGmail: {
                        showIconPopup: true,
                        visible: true
                    },
                    merlinOnSocialMedia: {
                        linkedin: {
                            visible: true
                        },
                        twitter: {
                            visible: true
                        },
                        visible: true
                    },
                    preferredOpenAiModel: (0, $96a9605956c6167d$export$37c67e5bd9db9fe5).GPT_3,
                    selectContextBtn: {
                        visible: true
                    },
                    serp: {
                        visible: true
                    },
                    traditionalGUI: false,
                    ytSummarizer: {
                        visible: true
                    }
                });
                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("userThemePreference", "system");
            }
            (0, $parcel$interopDefault($cgRoH)).contextMenus.create({
                contexts: [
                    "selection"
                ],
                id: "merlinExtContextBtn",
                title: "Give context to Merlin"
            });
            if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
                chrome.runtime.setUninstallURL(`${(0, $96a9605956c6167d$export$8c658cdc4a54ace4)}?${dataToDumpWithExtensionLifecycleChange}`);
                fetch(`${(0, $96a9605956c6167d$export$b2fe63a482e7e084)}?${dataToDumpWithExtensionLifecycleChange}`);
                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("gmail").catch(()=>{});
                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("linkedin").catch(()=>{});
            }
        });
        const $c7d133bbc5c093d3$var$BG_SCRIPT_ACTIVE = true;
        chrome.runtime.onMessageExternal.addListener(async (data, sender)=>{
            if (data.from === (0, $96a9605956c6167d$export$c06fc6c47997f1b6).MERLIN_APP) {
                if (data.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).APP_REQUEST.SIGNIN) {
                    if (data.payload.closeTab) (0, $parcel$interopDefault($cgRoH)).tabs.remove(sender.tab.id);
                    if (data.payload?.session) {
                        const usageDetails = await (0, $657cfa47d15821a0$export$ab2c945874030081)(data.payload?.session.accessToken);
                        if (usageDetails) {
                            $c7d133bbc5c093d3$var$updateAuthDetails({
                                isAuthenticated: true,
                                isLoading: false,
                                session: {
                                    refreshToken: data.payload.session.refreshToken
                                },
                                token: data.payload.session.accessToken,
                                usageDetails: {
                                    ...usageDetails.user
                                }
                            });
                            if ((0, $eb2956eac9c05e11$export$afa7df77eae551b9)(usageDetails.user?.type)) {
                                let userSettings = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("UserSettings");
                                userSettings = {
                                    ...userSettings,
                                    traditionalGUI: false
                                };
                                (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("UserSettings", userSettings);
                            }
                        } else $c7d133bbc5c093d3$var$updateAuthDetails({
                            isLoading: false
                        });
                    }
                }
                if (data.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).APP_REQUEST.SIGNOUT) {
                    if (data.payload.closeTab) (0, $parcel$interopDefault($cgRoH)).tabs.remove(sender.tab.id);
                    $c7d133bbc5c093d3$var$updateAuthDetails({
                        ...$c7d133bbc5c093d3$var$initAuthDetails,
                        isAuthenticated: false,
                        isLoading: false
                    });
                    (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("cacheStorage").catch(()=>{});
                    (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("docInteractivityState").catch(()=>{});
                    (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("gmail").catch(()=>{});
                    (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).remove("linkedin").catch(()=>{});
                }
                if (data.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).OPEN_OPTIONS_PAGE) {
                    const URL = chrome.runtime.getURL("options.html");
                    chrome.tabs.update({
                        url: URL
                    });
                }
            }
        });
        (0, $parcel$interopDefault($cgRoH)).commands.onCommand.addListener(async (command)=>{
            const queryOptions = {
                active: true,
                currentWindow: true
            };
            const tabs = await (0, $parcel$interopDefault($cgRoH)).tabs.query(queryOptions);
            if (command === "toggle_merlin") (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabs[0].id, {
                data: {
                    from: "hotKey"
                }
            }).catch(()=>{
                if (tabs[0].url.includes("chrome://") || tabs[0].url.includes("extension://") && tabs[0].url !== chrome.runtime.getURL("/tabs/chat.html") || tabs[0].url === "about:blank") (0, $parcel$interopDefault($cgRoH)).tabs.create({
                    url: chrome.runtime.getURL("/tabs/chat.html")
                });
            });
        });
        (0, $parcel$interopDefault($cgRoH)).contextMenus.onClicked.addListener(async (clickData)=>{
            if (clickData.menuItemId === "merlinExtContextBtn") {
                const queryOptions = {
                    active: true,
                    currentWindow: true
                };
                const tabs = await (0, $parcel$interopDefault($cgRoH)).tabs.query(queryOptions);
                (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabs[0].id, {
                    data: {
                        data: {
                            selectionText: clickData.selectionText
                        },
                        from: "contextMenu"
                    }
                });
            }
        });
        (0, $parcel$interopDefault($cgRoH)).action.onClicked.addListener((tab)=>{
            if (tab.url.includes("chrome://") || tab.url.includes("edge://") || tab.url.includes("extension://") && tab.url !== chrome.runtime.getURL("/tabs/chat.html")) (0, $parcel$interopDefault($cgRoH)).tabs.create({
                url: chrome.runtime.getURL("/tabs/chat.html")
            });
            else (0, $parcel$interopDefault($cgRoH)).tabs.query({
                active: true,
                currentWindow: true
            }).then((tabs)=>{
                (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tabs[0].id, {
                    data: {
                        from: "extPopupButton"
                    }
                });
            });
        });
        (0, $parcel$interopDefault($cgRoH)).runtime.onMessage.addListener(async (request, sender)=>{
            if (request.action === "PING") return {
                action: "PONG"
            };
            if (request.action === "POLLING") return {
                action: $c7d133bbc5c093d3$var$BG_SCRIPT_ACTIVE ? "ACTIVE" : "INACTIVE"
            };
            if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).OPEN_OPTIONS_PAGE) chrome.runtime.openOptionsPage();
            if (request.from === "selectContextBtn") (0, $eb2956eac9c05e11$export$23fe9b5e06a2f955)().then((tab)=>tab && (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(tab.id, {
                    data: {
                        ...request
                    }
                })).catch((err)=>void 0);
            if (request.from === (0, $96a9605956c6167d$export$c06fc6c47997f1b6).CONTENT_SCRIPT) {
                if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).AUTH.REFRESH_TOKEN) try {
                    const authDetails = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("authDetails");
                    const response = await (0, $657cfa47d15821a0$export$c542b5e295206b2a)(authDetails.session.refreshToken);
                    if (response) $c7d133bbc5c093d3$var$updateAuthDetails({
                        token: response.accessToken
                    });
                    else $c7d133bbc5c093d3$var$updateAuthDetails({
                        ...$c7d133bbc5c093d3$var$initAuthDetails,
                        isLoading: false
                    });
                } catch (err) {}
                if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).AUTH.SYNC_USAGE) try {
                    const authDetails = await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).get("authDetails");
                    const response = await (0, $657cfa47d15821a0$export$ab2c945874030081)(authDetails.token);
                    if (response) $c7d133bbc5c093d3$var$updateAuthDetails({
                        usageDetails: {
                            ...authDetails.usageDetails,
                            ...response.user
                        }
                    });
                } catch (err) {}
            }
            if (request.from === (0, $96a9605956c6167d$export$c06fc6c47997f1b6).POPUP) {
                if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).BROWSER.CHANGE_HOTKEY) (0, $parcel$interopDefault($cgRoH)).tabs.create({
                    url: "chrome://extensions/shortcuts"
                });
            }
            if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).NEW_TAB) (0, $parcel$interopDefault($cgRoH)).tabs.create({
                url: request.payload.url
            });
            if (request.action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).BROWSER.CHECK_SHORTCUT) {
                const key = await $c7d133bbc5c093d3$var$checkShortcut();
                (0, $parcel$interopDefault($cgRoH)).tabs.sendMessage(sender.tab.id, {
                    data: {
                        key: key
                    }
                });
            }
        });
        async function $c7d133bbc5c093d3$var$checkShortcut() {
            const commands = await (0, $parcel$interopDefault($cgRoH)).commands.getAll();
            const toggleMerlinCommand = commands.find((command)=>command.name === "toggle_merlin");
            if (toggleMerlinCommand && toggleMerlinCommand.shortcut !== "") await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("shortcut", toggleMerlinCommand.shortcut);
            else await (0, $eb2956eac9c05e11$export$8d13507e7362f6c9).set("shortcut", "");
            return toggleMerlinCommand.shortcut;
        }
        chrome.storage.onChanged.addListener(async (changes, areaName)=>{
            if (areaName === "local") for(const key in changes){
                const change = changes[key];
                const { newValue: newValue, oldValue: oldValue } = change;
                if (newValue && newValue !== oldValue && newValue?.status === "pending") {
                    const { action: action, from: from, id: id, payload: payload, status: status } = newValue;
                    let response = null;
                    if (action === (0, $96a9605956c6167d$export$9523889e0a5da4ba).BROWSER.CHECK_SHORTCUT) response = await $c7d133bbc5c093d3$var$checkShortcut();
                    chrome.storage.local.set({
                        [id]: {
                            ...newValue,
                            response: response,
                            status: "fulfilled"
                        }
                    }, ()=>{
                        chrome.runtime.lastError;
                    });
                }
            }
        });
        (0, $c3277cc0f033a78c$export$8db269d84aa70a37)();
        chrome.runtime.onUpdateAvailable.addListener((details)=>{
            chrome.tabs.query({}, (tabs)=>{
                if (tabs.length < 3) {
                    fetch(`${(0, $96a9605956c6167d$export$b2fe63a482e7e084)}?extensionVersion=${chrome.runtime.getManifest().version}&forceUpdate=true`);
                    chrome.runtime.reload();
                }
            });
        });
    })();
    globalThis.define = __define;
})(globalThis.define);
