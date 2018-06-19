

var order = 0

function getName(firstName,lastName){
    return ++order + '.' + firstName + '' +lastName
}

getName('Somchai' , 'Haha') // 1. Somchai Haha
getName('Somsree' , 'Haha') // 2. Somsree Haha
getName('Somset' , 'Haha') // 3. Somset Haha