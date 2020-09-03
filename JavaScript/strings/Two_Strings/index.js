function getSubString(s1) {
    let set = new Set();
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 0; j < s1.length; j++) {
            let subString = s1.substr(j, i);
            set.add(subString);
        }
    }
    return set;
}

/// this getting timeout because of huge string.
function twoStrings(s1, s2) {
    let set = getSubString(s1);
    let result = 0;
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 0; j < s1.length; j++) {
            let subString = s1.substr(j, i);
            if(s2.indexOf(subString) > -1)
                return "YES";
        }
    }
    return "NO";
}

function getIntersection(set1, set2) {
    let _intersection = new Set();
    for(let item of set2){
        if(set1.has(item))
            _intersection.add(item);
    }
    return _intersection;
}

function getUniqueSet(s1){
    let set = new Set();
    for (let j = 0; j < s1.length; j++) {
        set.add(s1[j]);
    }
    return set;
}

function twoStrings_v2(s1, s2) {
    let set1 = getUniqueSet(s1);
    let set2 = getUniqueSet(s2);
    let interSection = getIntersection(set1,set2);
    return  interSection.size > 0 ? "YES" : "NO";
}

module.exports = {getSubString, twoStrings, twoStrings_v2};