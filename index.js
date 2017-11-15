
let arr = []

var createObject = (name, phase, gender) => {
  arr.push({
    name,
    phase,
    gender
  })
}

var getData = name => {
  for (let item of arr) {
    if (item.name === name) {
      return item
    }
  }
}

createObject('fajar', 120, 'male')
createObject('arief', 14, 'female')
createObject('aldy', 14, 'male')

console.log(getData('fajar'))