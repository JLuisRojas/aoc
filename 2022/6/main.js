const data = require('./data.js')
// const data = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'

function isArrayUnique(arr) {
  return new Set(arr).size === arr.length
}

const length = 14

for(var i = 0; i < data.length - length; i++) {
  const marker = []
  for(var j = 0; j < length; j++) {
    const char = data.charAt(i+j)
    marker.push(char)
  }
  
  if(isArrayUnique(marker)) {
    console.log(marker)
    console.log(i+length)
    break
  }
}
