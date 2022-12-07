const data = require('./data.js')
// const data = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`

const rows = data.split('\n')
var stacks = [[], [], [], [], [], [], [], [], []]

for(var i = 0; i < 8; i++) {
  const row = []
  for(var j = 0; j < 9; j++) {
    const index = (j * 4) + 1
    const char = rows[i].charAt(index)
    row.push(char)
  }

  for(var j = 0; j < row.length; j++) {
    if(row[j] != ' ') {
      stacks[j].push(row[j])
    } 
  }
}

stacks = stacks.map(stack => stack.reverse())

// console.log(stacks)

function move(stack, from, to) {
  const item = stack[from].pop()
  stack[to].push(item)
}

function moveCrane(stack, amount, from, to) {
  let moved = []
  for(var i = 0; i < amount; i++) {
    const item = stack[from].pop()
    moved.push(item)
  }

  // moved = moved.reverse()

  for(var i = 0; i < amount; i++) {
    const item = moved.pop()
    stack[to].push(item)
  }
}

function executeMove(command) {
  const parts = command.split(' ')
  const amount = parts[1]
  const from = parts[3]
  const to = parts[5]

  console.log(amount, from, to)

  moveCrane(stacks, amount, from-1, to-1)
}


for(var i = 10; i < rows.length; i++) {
  executeMove(rows[i])
}

let output = ''

for(const s of stacks) {
  output += s[s.length - 1]
}

console.log(output)
