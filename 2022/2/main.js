const data = require('./data.js')
// const data = `A Y
// B X
// C Z`

const parsed = data.split('\n')

const rules = [
  'A', // rock
  'B', // paper
  'C', // scissors
]

const rulesEnctrypted = [
  'X', // lose
  'Y', // draw
  'Z', // win
]

const points = [
  1,
  2,
  3,
]

function previousIndex(index) {
  return index === 0 ? rules.length - 1 : index - 1
}

function nextIndex(index) {
  return index === rules.length - 1 ? 0 : index + 1
}

function findRuleIndex(rule) {
  return rules.indexOf(rule)
}

function findRuleEncryptedIndex(rule) {
  return rulesEnctrypted.indexOf(rule)
}

var totalPoints = 0

for(const p of parsed) {
  const [rule, ruleEncrypted] = p.split(' ')

  const ruleIndex = findRuleIndex(rule)
  const ruleEncryptedIndex = findRuleEncryptedIndex(ruleEncrypted)

  const computeResult = (i) => {
    totalPoints += points[i]

    if(ruleIndex == i) {
      totalPoints += 3
    } else if(i === nextIndex(ruleIndex)) {
      totalPoints += 6
    } 

  }

  if(ruleEncryptedIndex === 0) { 
    // lose
    computeResult(previousIndex(ruleIndex))
  } else if(ruleEncryptedIndex === 1) {
    // draw
    computeResult(ruleIndex)
  } else if(ruleEncryptedIndex === 2) {
    // win
    computeResult(nextIndex(ruleIndex))
  }

}

console.log(totalPoints)
