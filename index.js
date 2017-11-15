let arr = []

let createObj=(name,phase,gender)=>{
    let data = {
    }

    data.nama = name
    data.fase = phase
    data.JenisKelamin = gender

    arr.push(data)
    return data

}
createObj('Akbar',1,'Male')
createObj('Icha',1,'Female')
createObj('Hafizh',14,'Male')

console.log(arr)
let getData = (name)=>{
    debugger
    
    for(var i = 0 ;i<arr.length;i++){
        cek = arr[i]
        if(cek.nama === name){
            return cek;
        }
        
    }
    return 'data tidak ditemnukan !'

}

console.log(getData('ucok'))

