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

console.log(arr)