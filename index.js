var arr = [];
function createObj(name, phase, gender) {
  let data = {};
    data['Name'] = name
    data['Phase'] = phase
    data['Gender'] = gender
  arr.push(data)
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');

console.log(arr);

function getData(name) {
  let result = '';
  for(let i=0; i<arr.length; i++) {
  var search = arr[i]['Name'];
  if(search == name){
    result = arr[i]
    }
  }
return result
}

console.log(getData('Icha'));
