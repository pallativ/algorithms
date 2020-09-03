const commandType = {
    append: 1,
    deleteLastK: 2,
    printKthChar: 3,
    undo: 4
};

function processCommand(editor, line) {
    let arr = line.split(' ');
    let cmd = parseInt(arr[0]);
    let k = 0;
    let backupString = editor.backUpString;
    switch (cmd) {
        case commandType.append:
            backupString.push(editor.currState);
            editor.currState += arr[1];
            break;
        case commandType.printKthChar:
            k = parseInt(arr[1]);
            console.log(editor.currState[k - 1]);
            break;
        case commandType.deleteLastK:
            backupString.push(editor.currState);
            k = parseInt(arr[1]);
            editor.currState = editor.currState.substr(0, editor.currState.length - k);
            break;
        case commandType.undo:
            editor.currState = backupString.pop();
            break;
    }
}


function processData(input) {
    let lines = input.split('\n');
    let editor = {
        currState: "",
        backUpString: []
    };
    for (let line of lines) {
        processCommand(editor, line);
    }
}

module.exports = {processData, processCommand};