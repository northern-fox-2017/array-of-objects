var arr = [];
function createObj (name, phase, gender){

   let Obj = {
     name : name,
     phase : phase,
     gender : gender,
   }
arr.push(Obj)
return arr

}
createObj('Akbar' , 1, 'male')
createObj('Icha' , 1, 'female')
createObj('Adhit' , 2, 'male')
createObj('Tama' , 2, 'male')
createObj('Rifky' , 3, 'male')

console.log(arr);

function getData (name){
  arr.map((index) => {
    if(index.name == name){
      console.log(index.name);
      return index
    }
  })

}
getData('Adhit');
