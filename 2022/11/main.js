const data = require('./data.js')
// const data = `Monkey 0:
//   Starting items: 79, 98
//   Operation: new = old * 19
//   Test: divisible by 23
//     If true: throw to monkey 2
//     If false: throw to monkey 3
// 
// Monkey 1:
//   Starting items: 54, 65, 75, 74
//   Operation: new = old + 6
//   Test: divisible by 19
//     If true: throw to monkey 2
//     If false: throw to monkey 0
// 
// Monkey 2:
//   Starting items: 79, 60, 97
//   Operation: new = old * old
//   Test: divisible by 13
//     If true: throw to monkey 1
//     If false: throw to monkey 3
// 
// Monkey 3:
//   Starting items: 74
//   Operation: new = old + 3
//   Test: divisible by 17
//     If true: throw to monkey 0
//     If false: throw to monkey 1`

const rows = data.split('\n')
const monkeyBehaivours = []
const itemsCopy = []

var i = 0
while (i < rows.length) {
  const row = rows[i]

  if (row.startsWith('Monkey')) {
    const items = rows[i + 1].split(': ')[1].split(', ').map((e) => parseInt(e))
    const operation = rows[i + 2].split(': ')[1].split('old ')[1]
    const test = parseInt(rows[i + 3].split(': ')[1].split(' ')[2])
    const testIfTrue = parseInt(rows[i + 4].split(': ')[1].split(' ')[3])
    const testIfFalse = parseInt(rows[i + 5].split(': ')[1].split(' ')[3])

    monkeyBehaivours.push({
      items,
      operation,
      test,
      testIfTrue,
      testIfFalse,
      inspectedItems: 0,
    })

    itemsCopy.push([...items])

    i += 6
  }

  i++
}

let rounds = 0

const divisors = monkeyBehaivours.map((m) => m.test);
const lcm = divisors.reduce((acc, curr) => acc * curr, 1);

console.log(monkeyBehaivours)

while (rounds < 10000) {
  for (let i = 0; i < monkeyBehaivours.length; i++) {
    const monkey = monkeyBehaivours[i]
    const items = monkey.items

    while (items.length > 0) {
      const item = items.shift()
      let [operand, value] = monkey.operation.split(' ')

      if (value == 'old') {
        value = item
      } else {
        value = parseInt(value)
      }

      switch (operand) {
        case '*':
          value = item * value
          break
        case '+':
          value = item + value
          break
        case '-':
          value = item - value
          break
      }


      value = value % lcm;

      if (value % monkey.test == 0) {
        throwToMonkey = monkey.testIfTrue
      } else {
        throwToMonkey = monkey.testIfFalse
      }

      monkeyBehaivours[throwToMonkey].items.push(value)
      monkey.inspectedItems++
    }
  }

  // for (var i = 0; i < monkeyBehaivours.length; i++) {
  //   const monkey = monkeyBehaivours[i]
  //   monkey.items = [...itemsCopy[i]]
  // }

  rounds++
}

console.log(monkeyBehaivours)

const arr = []
for (const monkey of monkeyBehaivours) {
  arr.push(monkey.inspectedItems)
}

arr.sort((a, b) => b - a)

console.log(arr[0] * arr[1])
