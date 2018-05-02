var arr = []
function createObj(name, hobi, angkaFavorit){
var object = {
  'name' : name,
  'hobi' : hobi,
  'angkaFavorit' : angkaFavorit,
};

arr.push(object);
}

createObj('Bona', 'makan', 13);
createObj('Dinda', 'curhat', 21);
createObj('Naja', 'olahraga', 18);

console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name === name){
      return arr[i];
    }
  }
}

console.log(getData('Naja'));


// let daftarTeman = {
//   name : 'Bona',
//   hobi : 'makan',
//   angkaFavorit : 13,
// }
