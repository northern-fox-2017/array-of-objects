
let arr = []
var createObject = (name, phase, gender) => {
  arr.push({
    name,
    phase,
    gender
  })
}

createObject('fajar', 120, 'male')
createObject('arief', 14, 'female')
createObject('aldy', 14, 'male')

console.log(arr)