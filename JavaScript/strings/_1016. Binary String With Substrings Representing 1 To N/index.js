const queryString = function (S, N) {
    const ToBinary = function (num) {
        let result = '';
        while (num > 0) {
            result += num % 2;
            num = Math.floor(num / 2);
        }
        return result;
    }

};