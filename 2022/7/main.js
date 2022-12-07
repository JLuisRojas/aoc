const data = require('./data.js')
const commands = data.split('\n')

const tree = {}
let root = tree

for(let i = 1; i < commands.length; i++) {
  const command = commands[i]
  const parts = command.split(' ')

  if(parts[0] == '$') {
    if(parts[1] == 'ls') continue

    if(parts[1] == 'cd') {
      const dir = parts[2]

      if(dir == '..') {
        root = root.parent
      } else {
        root = root[dir]
      }
    }
  } else {
    if(parts[0] == 'dir') {
      const dir = parts[1]

      if(!(dir in root)) {
        root[dir] = {
          parent: root,
          sum: 0,
        }
      }
    } else {
      const size = parseInt(parts[0])
      const file = parts[1]

      root[file] = size
    }
  }
}


function sum(node) {
  if(typeof node == 'number') return node

  let total = 0

  for(let key in node) {
    if(key == 'parent') continue

    total += sum(node[key])
  }

  node.sum = total

  return total
}

sum(tree)

const sortedNodes = []

function flatNodes(node) {
  if (typeof node != 'number') {
    for (var key in node) {
      if (key === 'parent') continue;
      if (key === 'sum') continue;

      flatNodes(node[key]);
      
      if(node[key].sum)
      sortedNodes.push({
        key: key,
        sum: node[key].sum,
      })
    }
  }
}

flatNodes(tree)

sortedNodes.sort((a, b) => a.sum - b.sum)

const neededSpace = 30000000 - (70000000 - tree.sum)

for(const node of sortedNodes) {
  if(node.sum > neededSpace) {
    console.log(node.sum)
    console.log(node.key)
    break
  }
}
