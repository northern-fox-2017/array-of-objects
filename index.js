// ARRAY OF OBJECTS

var arr = [];

// Release 0
function createObj(name, phase, gender){
  // YOUR CODE HERE
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;

  return arr.push(obj);
}

//Release 1
function getData(name){
  // YOUR CODE HERE . .
  for(let i = 0; i < arr.length ; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
  return 'NOT FOUND'

}

//  ===== DRIVER =====
// Release 0
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');
console.log(arr);

// Release 1
console.log(getData('Icha'));
console.log(getData('Adhit'));
console.log(getData('Akbar'));
console.log(getData('Wahib'));