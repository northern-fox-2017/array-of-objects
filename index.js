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
function getObj(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]['name'] == name) {
      return arr[i];
    }
  }
  return -1;
}
arrOfObj('Akbar', 1, 'Male');
arrOfObj('Icha', 1, 'Female');
arrOfObj('Adith', 2, 'Male');
arrOfObj('Tama', 3, 'Male');
arrOfObj('Rizky', 0, 'Male');

console.log(arr);

console.log(getObj('Icha'));
console.log(getObj('Bambang'));
