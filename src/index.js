import {conArrow} from "./js/commonjs"
import Person from "./js/class"
import $ from "jquery"

//启动server;
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
':35729/livereload.js?snipver=1"></' + 'script>');
let o = $.extend({a: 1, b: 2}, {b: 22, c: 33})
console.log("o = ", o)

conArrow()

console.log("hello in watch")

let p = new Person("zty", "N")
p.say()
