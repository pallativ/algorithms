function get_next_number(s, start, no_of_chars) {
    return BigInt(s.substr(start, no_of_chars));
}

function get_next_number_length(num) {
    return num.toString().length;
}

function separateNumbers(s) {
    let arr = s.split('');
    var result_string = 'No';
    for (let i = 0; i < s.length; i++) {
        let start_number = get_next_number(s, 0, i + 1);
        let temp = start_number;
        let j = i + 1;
        let result = false;
        for (; j < s.length;) {
            let length = get_next_number_length(temp + 1n);
            let next_number = get_next_number(s, j, length);
            if ((next_number - temp) !== 1n) {
                result = false;
                console.log(`Break: ${temp} - ${next_number}`);
                break;
            }
            result = true;
            console.log(`Start Number : ${temp} - ${next_number}`);
            j += length;
            temp = next_number;
        }
        if (result) {
            return "YES " + start_number.toString();
        }
    }

    return "NO";
}

module.exports = { separateNumbers };