const data = require('./data.js')
const parsed = data.split('\n\n')

const calories = []

for(const d of parsed) {
  const elems = d.split('\n')
  var sum = 0

  for(const elem of elems) {
    const amount = +elem
    sum += amount
  }

  calories.push(sum)
}

calories.sort((a, b) => b - a)

console.log(calories[0])
console.log(calories[1])
console.log(calories[2])

console.log(calories[0] + calories[1] + calories[2])
