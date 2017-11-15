'use strict';

var arr = [];
function createObj (name, phase, gender) {

    let obj = {}
    obj.name = name
    obj['phase'] = phase
    obj.gender = gender
    
    arr.push(obj);
    return arr
}

function getData (name) {
    let data = arr
    let result = 'File is not found!';
    for (let i = 0; i < data.length; i++) {
        if (name === data[i].name) {
            result = data[i];   
        }
    }
    return result;
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj ('Adhit', 2, 'male');
createObj ('Tama', 2, 'male');
createObj ('Rifky', 3, 'male');

console.log(getData('Icha'));
console.log(getData('Boedi'));