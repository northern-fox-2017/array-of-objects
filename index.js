var arr = []
function createObj (name, phase, gender){
  arr.push({name: name, phase: phase, gender: gender})
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',1,'female')
createObj('Rifky',3,'male')

console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name == name){
      return arr[i]
    }
  }
}

console.log(getData('Icha'));