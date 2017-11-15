var arr = [];

function createObj(name, phase, gender) {
    var person = {};
    person.name = name;
    person.phase = phase;
    person.gender = gender;
    arr.push(person);
    return arr;
}

function getData(name) {
    console.log(name)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === name){
            return arr[i];
        }
    }
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

console.log(getData('Icha'));