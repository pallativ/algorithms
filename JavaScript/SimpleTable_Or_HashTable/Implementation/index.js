class SimpleTable {
    constructor() {
        this.keys = [];
        this.values = [];
    }

    get(key) {
        if (this.isEmpty())
            return null;
        let i = this.search(key);
        if (i < this.size() && this.keys[i] === key)
            return this.values[i];
        return null;
    }

    isEmpty() {
        return this.keys.length === 0;
    }

    put(key, value) {
        if (this.isEmpty()) {
            this.keys.push(key);
            this.values.push(value);
            return;
        }
        let i = this.search(key);
        if (i < this.size() && this.keys[i] === key) {
            this.values[i] = value;
        } else {
            this.keys.splice(i, 0, key);
            this.values.splice(i, 0, value);
        }
    }

    size() {
        return this.keys.length;
    }

    delete(key) {
        let i = this.search(key);
        if (i < this.size() && this.keys[i] === key) {
            this.keys.splice(0, 1);
            this.values.splice(0, 1);
        }
    }

    search(key) {
        let low = 0;
        let high = this.keys.length - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            let cmp = this.keys[mid].localeCompare(key);
            if (cmp === 0)
                return mid;
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return low;
    }

    containsKey(key) {
        let i = this.search(key);
        return i < this.size() && this.keys[i] === key;
    }

    print() {
        console.log(this.keys);
        console.log(this.values);
    }
}

module.exports = {SimpleTable}