const obj = {
    name: 'algario222',
    updatedAt: new Date(),
    ChangeName
}

function ChangeName(newName){
    this.name = newName
    console.log(this)
}

obj.ChangeName('algario333')