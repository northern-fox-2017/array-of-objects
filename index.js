var arr = [];

function createObj(name, phase, gender){
	var newObj = {
		Name : name, 
		Phase: phase,
		Gender: gender,
	}
	arr.push(newObj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

//console.log(arr.length)

function getData(nama){
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i].Name === nama){
			return arr[i]
		}
	}	
}

console.log(getData('Icha'))