let arr = [];

function createObj(name, phase, gender) {
  let obj = {};

  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;

  return arr.push(obj);
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female')

console.log(arr);
console.log('\n------------------------\n');

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      return arr[i];
    }
  }
}

console.log(getData('Akbar'));
