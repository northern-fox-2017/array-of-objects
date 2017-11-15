var arr = [];

var createObj = (name, phase, gender) => {
  var obj = {};

  obj.name = name.toLowerCase();
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj)

  return arr;
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

var getData = (name) => {
  let nameLow = name.toLowerCase();
  for(let i = 0; i < arr.length; i++) {
    if(nameLow === arr[i].name) {
      return arr[i];
    }
  }
}

console.log(arr);
console.log(getData('icha'))
