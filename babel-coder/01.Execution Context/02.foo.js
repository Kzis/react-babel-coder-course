

function foo(){
    var a = 1

    return function bar(){
        return a;
    }
}

var barFn = foo();
console.log(barFn());

/**
 * จะเห็นว่าตัวแปร a อยู่คนละ Execution context แต่ Print มาก็ได้ค่าอยู่
 * เป็นเพราะอะไรไปดูต่อใน Scope Chain
 */