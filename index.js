
let arr =[]
function createObject(nama,fase,gender){
  let Murid = { Nama:nama,
                Phase:fase,
                Gender:gender }
  arr.push(Murid)
}
createObject('Rizky',2,'male');
createObject('Fabio',1,'male');
createObject('Aang',3,'male');

console.log(arr);

//driver code
