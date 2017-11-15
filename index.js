var arr = []
let createObj = (name, phase, gender) => {
  let obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}

let getData = (name)=>{
  for (i of arr) {
    if (i.name == name){
      return i
    }
    else {
      return 'Nama yang dicari ga ada coy'
    }
  }
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
console.log(arr);

console.log(getData('Akbar'));
