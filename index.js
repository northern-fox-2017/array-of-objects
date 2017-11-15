var arr = [];
function arrOfObj(name, phase, gender) {
  var obj = {
    name : name,
    phase : phase,
    gender : gender
  }
  arr.push(obj);
  obj = {};
}

arrOfObj('Akbar', 1, 'Male');
arrOfObj('Icha', 1, 'Female');

console.log(arr);
