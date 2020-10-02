/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (!path) return '';
    let arr =  path.split('/').filter(t => t !== "." && t !== '');
    //console.log(arr);
    let stack = [];
    let item  = null;
    while(arr.length){
        item = arr.shift();
        if(item === "..")
            stack.pop();
        else
            stack.push(item);
    }
    return "/" + stack.join("/");
};