module.exports = function reverse (n) {
   const stric = String(n)
   const array = stric.split("").reverse().join("");
   return parseInt(array)
}
