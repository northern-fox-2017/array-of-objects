var arr = []

function createObj(name,phase,gender){
  let obj = {
    name : name,
    phase : phase,
    gender : gender
  }
  arr.push(obj)
}

function getData(name){
  let i = 0
  while (i < arr.length){
    if(name.toLowerCase() == arr[i].name.toLowerCase()){
      return arr[i]
    }
    i++
  }
}


createObj('Akbar', 1, 'Male')
createObj('Icha', 1, 'Female')

console.log(getData("Icha"))
