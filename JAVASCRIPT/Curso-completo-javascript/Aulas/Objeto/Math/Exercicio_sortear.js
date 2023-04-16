function getRandomNumber(start, end, integer){

    start = start || 0
    end = end || 1
    integer = integer || false

    let randomNumer = Math.random() * (end - start) + start

    if(integer){
        return Math.round(randomNumer)
    } else {
        return randomNumer
    }

}

let RandomNumber = getRandomNumber(10,20,true)

console.log(RandomNumber)