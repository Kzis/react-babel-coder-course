

function setLastName(lastName){
    var order = 0

    return function getName(firstName){
        return ++order + '.' + firstName + '' +lastName
    }
}

var hahaFamily = setLastName('Haha')
hahaFamily('Somchai') // 1. Somchai Haha
hahaFamily('Somsree') // 2. Somsree Haha
hahaFamily('Somset') // 3. Somset Haha

/**
 * Closure เป็นคุณสมบัติ ที่ทำให้ function สามารถเข้าถึง ตัวแปร
 * ที่อยู่ รอบๆภายนอกตัวมันได้ ซึ่งเป็นคุณสมบัติที่ได้มาจากการทำ scope chain
 */