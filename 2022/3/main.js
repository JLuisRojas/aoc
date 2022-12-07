const data = require('./data.js')
// const data = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

const parsed = data.split('\n')
const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let sum = 0

for(var i = 0; i < parsed.length; i+=3) {
  const first = parsed[i]
  const second = parsed[i+1]
  const third = parsed[i+2]

  let unique

  // find repeted values
  unique = first.split('').filter((char) => {
    if(second.indexOf(char) >= 0 && third.indexOf(char) >= 0) {
      return char
    }
  })

  console.log(unique)

  if(unique.length > 0) {
    const found = unique[0]

    const index = values.indexOf(found)

    sum += index + 1
  }
}

console.log(sum)
