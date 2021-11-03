function doSomethingWithCallback(initialText, callback) {
    console.log('inside doSomethingWithCallback ' + initialText);
    if (typeof callback === "function") {
        callback(initialText);
    }
    else {
        console.log(callback + ' is not a function!!');
    }
}
doSomethingWithCallback('myText', 'anotherText');
