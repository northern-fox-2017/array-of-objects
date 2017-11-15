// ARRAY OF OBJECTS

var arr = [];

function createObj(name, phase, gender){
  // YOUR CODE HERE
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;

  return arr.push(obj);
}


// DRIVER
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);