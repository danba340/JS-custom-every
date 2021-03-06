function customEvery(cb, thisArg) {
  for(const [index, item] of this.entries()) {
    if(!cb.call(thisArg, item, index, this)) {
      return false
    }
  }
  return true
}
Array.prototype.customEvery = customEvery

const mixedApples = ["🍏","🍎"];
const greenApples = ["🍏","🍏"];

console.log("Standard every")
console.log("All apples green:",
greenApples.every(function(apple, index, arr) {
  console.log("item",apple)
  console.log("index:",index)
  console.log("arr:",arr)
  console.log("this:",this)
  return apple === '🍏'
}, mixedApples))

console.log("Custom Every")
console.log("All apples green:",
greenApples.customEvery(function(apple, index, arr) {
  console.log("item",apple)
  console.log("index:",index)
  console.log("arr:",arr)
  console.log('this', this)
  return apple === '🍏'
}, mixedApples))
