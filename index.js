let arr = []
let createObj = ( name, phase, gender ) => {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(arr);

let getData = (name) => {
  arr.forEach((x) => {
    if(x.name == name){
      console.log(x);
    }
  })
}

getData('Icha')
