

var a = 1

function foo(){
    var b
    var c

    b=2

    if(true){
     c=3
    }
    console.log(c)
}

foo()

/**
 * การย้ายตัวแปร c ที่ประกาศใน file ก่อนหน้านี้ไปไว้อยู๋ที่กับ function
 * เราเรียกการกระทำแบบนี้ว่า Hoisting
 */