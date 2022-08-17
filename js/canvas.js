// I need to add a type hint for Intellisense to figure out what canvas should be and show the canvas methods at all.
// This will also help with showing context stuff too.
// This will need to be done for other DOM API things and supposedly other libraries if intellisense isn't showing them.
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
ctx.fillRect(10, 10, 50, 50);