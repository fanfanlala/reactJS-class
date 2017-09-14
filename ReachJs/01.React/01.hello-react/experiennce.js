/**
 * Created by dllo on 17/8/11.
 */
var EventEmitter = require('event');
class MyEmitter extends EventEmitter{

}
const em = new MyEmitter()
em.on('hello',function (name) {
    console.log('hello'+name)
})
em.emit('hello','班长');


var EventEmitter = require('event');
class MyEmitter extends EventEmitter{

}
const em = new MyEmitter()
em.on('hello',function (name) {
    console.log('hell0')
})