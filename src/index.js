module.exports = function reverse(n) {
    if (n < 0) return Array.from(String(-n)).reverse().join("");
    return Array.from(String(n)).reverse().join("");
};
