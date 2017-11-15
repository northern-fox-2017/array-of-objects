var arr=[]

function createObj(name, phase, gender) {
    // your convert code here
    let obj={}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',1,'male');
createObj('Tama',1,'male');
createObj('Rifky',1,'male');
console.log(arr);