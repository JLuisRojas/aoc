const data = require('./data.js')
// const data = `R 4
// U 4
// L 3
// D 1
// R 4
// D 1
// L 5
// R 2`

const commands = data.split('\n')
let cycles = 0
let x = 1
let width = 40
let height = 6

const crt = []

function loop() {
  let cycle = cycles

  if (cycle >= width) {
    cycle -= (Math.floor(cycle / width) * width)
  }

  if (cycle >= x - 1 && cycle <= x + 1) {
    // draw x
    crt.push('x')
  } else {
    // draw .
    crt.push('.')
  }
  cycles++

}

for (let i = 0; i < commands.length; i++) {
  const command = commands[i]
  const [action, value] = command.split(' ')
  if (action === 'addx') {
    const num = parseInt(value)
    loop()
    loop()
    x += num
  } else {
    loop()
  }
}

let str = crt[0]
for (let i = 1; i < crt.length; i++) {
  str += crt[i]

  if ((i + 1) % width === 0) {
    str += '\n'
  }
}

console.log(str)
