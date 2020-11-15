const OrderedStream = function (n) {
    this.array = new Array(n + 1).fill(0);
    this.ptr = 1;
    this.length = n + 1;
};

OrderedStream.prototype.insert = function (id, value) {
    this.array[id] = value;
    let ans = [];
    if (id === this.ptr) {
        for (let i = id; i < this.length; i++) {
            if (this.array[i] === 0)
                break;
            ans.push(this.array[i]);
            this.ptr++;
        }
    }
    return ans;
};

module.exports = {OrderedStream}