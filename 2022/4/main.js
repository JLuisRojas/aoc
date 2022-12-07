const data = require('./data.js')
// const data = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`

const allPairs = data.split('\n')

const parsed = []

for(const pair of allPairs) {
  parsed.push(...pair.split(','))
}

let sum = 0

for(var i = 0; i < parsed.length - 1; i+=2) {
  const pair = parsed[i].split('-')

  const left = +pair[0]
  const right = +pair[1]

  const nextPair = parsed[i + 1].split('-')

  const nextLeft = +nextPair[0]
  const nextRight = +nextPair[1]

  const a = []
  const b = []
  for(var j = left; j <= right; j++) {
    a.push(j)
  }

  for(var j = nextLeft; j <= nextRight; j++) {
    b.push(j)
  }

  for(const c of a) {
    if(b.includes(c)) {
      sum++
      break;
    }
  }

  // if( nextLeft >= right || left >= nextRight) {
  //   console.log(left, right, nextLeft, nextRight)
  //   sum += 1
  // }
}

console.log(sum)
