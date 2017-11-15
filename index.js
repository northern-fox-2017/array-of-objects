var arr = [];
function createObj(name, phase, gender) {
	let result = {};
		result.name = name;
		result.phase = phase;
		result.gender = gender;
	arr.push(result);
}
createObj('test', 1, 'male');
createObj('Icha', 1, 'female');
console.log(arr)

function getData(name){
	var nama = name;
	var counter = -1;
	for(let i = 0; i < arr.length; i++){
		if(arr[i].name === nama){
			counter = i;
		}
	}
	if(counter === -1){
		return -1
	}else{
		return arr[counter];
	}
}
console.log(getData('Icha'))

//NOTE UNTUK SINGLE SEARCH
//KLO DI DATA ADA LEBIH DARI 2 MAKA DATA TERAKHIR YANG NONGOL