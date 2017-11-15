var arr = []
function createObj(name, phase, gender){
    arr.push(
        {   name,              
            phase,
            gender
        })
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')

console.log(arr[0]['name'])


function getData (name){    
    for(var i=0;i<arr.length;i++){
      if(arr[i]['name'] === name){
        return arr[i]
      }  
    }  
    return false
  }
  console.log(getData('Icha'))