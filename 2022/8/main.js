const data = require('./data.js')
// const data = `30373
// 25512
// 65332
// 33549
// 35390`

const rows = data.split('\n')
const grid = rows.map((e) => e.split(''))

const height = grid.length
const width = grid[0].length

console.log(grid)
let all = []

for (var row = 1; row < height - 1; row++) {
  for (var col = 1; col < width - 1; col++) {
    const current = grid[row][col]
    const points = []

    let i;
    let d;

    // go back
    i = col - 1
    d = 0
    while (i >= 0) {
      d++
      const value = grid[row][i]

      if (value >= current) {
        break
      }

      i -= 1
    }

    points.push(d)

    // go forwrd
    i = col + 1
    d = 0
    while (i < width) {
      d++
      const value = grid[row][i]

      if (value >= current) {
        break
      }

      i += 1
    }

    points.push(d)

    // go up
    i = row - 1
    d = 0
    while (i >= 0) {
      d++
      const value = grid[i][col]

      if (value >= current) {
        break
      }

      i -= 1
    }

    points.push(d)

    // go down
    i = row + 1
    d = 0
    while (i < height) {
      d++
      const value = grid[i][col]

      if (value >= current) {
        break
      }

      i += 1
    }

    points.push(d)

    const r = points.reduce((a, b) => a * b)
    all.push(r)
  }
}

console.log(Math.max(...all))
