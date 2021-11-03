function callbackFunction(text: string) {
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithACallback(
    initialText: string,
    callback: (initialText: string) => void
) {
    console.log(`inside doSomethingWithACallback ${initialText}`);
    callback(initialText);
}

function callbackFunctionWithNumber(arg1: number) {
    console.log(`inside callbackFunctionWithNumber ${arg1}`);
}

doSomethingWithACallback("myText", callbackFunction);
// == error ==
// doSomethingWithACallback("myText", "this is not a function");
// doSomethingWithACallback("myText", callbackFunctionWithNumber);