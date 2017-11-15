const arrayOfObject = [];

const createObject = (name, phase, gender) => {
  const object = {name, phase, gender};
  arrayOfObject.push(object);
}

createObject('Akbar', 1, 'male');
createObject('Icha', 1, 'female');
createObject('Adhit', 2, 'male');
createObject('Tama', 2, 'male');
createObject('Rifky', 3, 'male');
console.log(arrayOfObject);

const getData = (name) => {
  const result = arrayOfObject.filter(element => {
    return element.name === name;
  });
  return result;
}

console.log(getData('Icha'));