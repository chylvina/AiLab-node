let sp = require('ailab').sp
console.log(sp.parameter)
const path = require('path')
const moduleName = sp.parameter.nodeRedModule
let EventEmitter = require("events").EventEmitter
let spEvent = new EventEmitter()
let moduleDir = path.dirname(__dirname)
console.log(moduleDir)
let requirePath = path.join(moduleDir, moduleName, 'package.json')
console.log(requirePath)
let moduleJson = require(requirePath)
console.log(moduleJson)
let node_red = moduleJson["node-red"]
let nodesList = node_red.nodes
let nodes = []

for (const node in nodesList) {
    let js = require(path.join(moduleDir, moduleName, nodesList[node]))
    nodes.push(js)
}
let runner = {
    runFunction: null,
    on: spEvent.on,
    send: function (msg) {
        sp.sendSuccessMessage({
            out1: JSON.stringify(msg)
        })
    },
    error: function () {
        for (let arg of arguments) {
            console.log(arg)
        }
    }
    status: function () {
        console.log("status",arguments)
    }
}
let fakeRED = {
    nodes: {
        registerType: function (name, nodeFunc) {
            // console.log(name, nodeFunc)
            runner.runFunction = nodeFunc
        },
        createNode: function () {

        }
    }
}
let fakeThisNode = {
}
console.log('start RED_')
for (let key in sp.parameter) {
    if (key.startsWith("Red_")) {
        fakeThisNode[key.slice(4)] = sp.parameter[key]
    }
}
console.log('fake RED', fakeThisNode)
nodes[0](fakeRED)
runner.runFunction(fakeThisNode)
// fakeRED.run()

// let worker=require('./ping')