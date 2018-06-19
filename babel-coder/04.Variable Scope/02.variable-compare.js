

var a = 1

function foo(){
    var b = 2

    if(true){
        const c=3
    }
    console.log(c) //Reference Error
}

foo()

/**
 * ตัวแปร const / let เป็น Block scope variable
 */