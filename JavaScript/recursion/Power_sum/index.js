function powerSum(total, power, num = 1) {
    let value = total - Math.pow(num, power);
    if (value === 0)
        return 1;
    else if (value < 0)
        return 0;
    else {
        return powerSum(value, power, num + 1) + powerSum(total, power, num + 1);
    }
}

module.exports = {powerSum};