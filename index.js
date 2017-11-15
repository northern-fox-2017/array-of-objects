let arr = [];

function arrayOfObjects(name, phase, gender) {
  let objek = {
    name   : name,
    phase  : phase,
    gender : gender
  }
  arr.push(objek)
}

arrayOfObjects('Akbar', 1, 'Male')
arrayOfObjects('Icha', 1, 'Female')
arrayOfObjects('Adhit', 2, 'Male')
arrayOfObjects('Tama', 2, 'Male')
arrayOfObjects('Rifky', 3, 'Male')

console.log(arr);

function getData(name) {
  for(let i = 0 ; i < arr.length ; i++) {
    if(name === arr[i].name) {
      return arr[i];
    }
  }
}

console.log(getData('Icha'));
console.log(getData('Rifky'));
