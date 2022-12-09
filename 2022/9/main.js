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
//             x  y
const headM = [0, 0]
const knots = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
]

const tailMoves = []

function distanceBetweenHeadAndTail(head, tail) {
  return Math.abs(head[0] - tail[0]) + Math.abs(head[1] - tail[1])
}

function horizontalDistanceBetweenHeadAndTail(head, tail) {
  return Math.abs(head[0] - tail[0])
}

function verticalDistanceBetweenHeadAndTail(head, tail) {
  return Math.abs(head[1] - tail[1])
}

function resolveTail(head, tail) {
  const distance = distanceBetweenHeadAndTail(head, tail)
  const horDistance = horizontalDistanceBetweenHeadAndTail(head, tail)
  const verDistance = verticalDistanceBetweenHeadAndTail(head, tail)

  if (horDistance == 2 && verDistance == 0) {
    if (head[0] > tail[0]) {
      tail[0] += 1
    }

    if (head[0] < tail[0]) {
      tail[0] -= 1
    }
  } else if (horDistance == 0 && verDistance == 2) {
    if (head[1] > tail[1]) {
      tail[1] += 1
    }

    if (head[1] < tail[1]) {
      tail[1] -= 1
    }
  } else if (distance >= 3) {
    if (head[0] > tail[0]) {
      tail[0] += 1
    }

    if (head[0] < tail[0]) {
      tail[0] -= 1
    }

    if (head[1] > tail[1]) {
      tail[1] += 1
    }

    if (head[1] < tail[1]) {
      tail[1] -= 1
    }
  }
}

function move(command, head, tail) {
  switch (command) {
    case 'U':
      head[1] += 1
      break;
    case 'D':
      head[1] -= 1
      break;
    case 'L':
      head[0] -= 1
      break;
    case 'R':
      head[0] += 1
      break;
  }

  // resolveTail(head, tail)
}

for (const command of commands) {
  const [dir, dist] = command.split(' ')
  const steps = parseInt(dist)


  for (let i = 0; i < steps; i++) {
    let head = headM
    let tail = knots[0]

    move(dir, head, tail)

    for (var j = 0; j < knots.length; j++) {
      tail = knots[j]

      resolveTail(head, tail)

      if (j == knots.length - 1) {
        tailMoves.push(`${tail[0]},${tail[1]}`)
      }

      head = tail
    }
  }

}

// console.log(tailMoves)
console.log(new Set(tailMoves).size)

/*
...h.
.....
..t..
 
*/
