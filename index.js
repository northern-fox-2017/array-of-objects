let arr = []
function object(name,phase,gender) {
  let obj = {
    name : name,
    phase : phase,
    gender : gender
  }
  arr.push(obj)
}

object('alang',1,'male')
object('siapa',2,'male')
console.log(arr);

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i]
    }
  }
}

console.log(getData('alang'));
