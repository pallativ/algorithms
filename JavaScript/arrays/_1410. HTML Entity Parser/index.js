const entityParser = function (text) {
    let entities = ["&quot;", "&apos;", "&amp;", "&gt;", "&lt;", "&frasl;"];
    let specialChars = ["\"", "'", "&", ">", "<", "/"];

    let result = "";
    let stack = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '&') {
            result += stack.join('');
            stack = [];
            stack.push(text[i]);
        } else if (text[i] === ';') {
            stack.push(text[i]);
            let index = entities.indexOf(stack.join(''));
            if (index !== -1)
                result += specialChars[index];
            else
                result += stack.join('');
            stack = [];
        } else if (stack.length > 0) {
            stack.push(text[i])
        } else {
            result += text[i];
        }
    }
    result += stack.join('');
    return result;
};


const entityParserUsingReplace = function (text) {
    return text
        .replace(/&quot;/g, "\"")
        .replace(/&apos;/g, "\'")
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&frasl;/g, "/")
        .replace(/&amp;/g, "&");
};

module.exports = {entityParser}