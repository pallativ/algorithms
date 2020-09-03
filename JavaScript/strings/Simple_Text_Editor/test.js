const {processData, processCommand} = require('./index');

test("Simple Text Editor", () => {
    let editor = {
        backUpString: [],
        currState: ''
    };
    expect(processCommand(editor, "1 abc"));
    //expect(processCommand(editor, "1 abc"));
    expect(processCommand(editor, "3 3"));
    //expect(processCommand(editor, "4"));
    //expect(processCommand(editor, "3 1"));
    //expect(processCommand(editor, "2 3"));
    console.log(editor.currState);
    console.log(editor.backUpString);
});