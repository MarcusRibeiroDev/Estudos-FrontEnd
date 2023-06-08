function formatName(n){
    splitedName = n.split(' ')
    if(splitedName.length === 3){
        return `${splitedName[2]} ${splitedName[1]}, ${splitedName[0]}`
    } else if(splitedName.length === 2){
        return `${splitedName[1]}, ${splitedName[0]}}`
    } else {
        return n
    }
    
}

let formatedName = formatName('Marcus Eduardo Costa')

console.log(formatedName)