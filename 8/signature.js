"use strict";
function callbackFunction(text) {
    console.log("inside callbackFunction " + text);
}
function doSomethingWithACallback(initialText, callback) {
    console.log("inside doSomethingWithACallback " + initialText);
    callback(initialText);
}
function callbackFunctionWithNumber(arg1) {
    console.log("inside callbackFunctionWithNumber " + arg1);
}
doSomethingWithACallback("myText", callbackFunction);
// == error ==
// doSomethingWithACallback("myText", "this is not a function");
// doSomethingWithACallback("myText", callbackFunctionWithNumber);
