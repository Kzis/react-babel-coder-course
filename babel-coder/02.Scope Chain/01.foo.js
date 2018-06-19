

var a = 1

function bar(){
    return 3
}

function foo(){
    var b = a + 2
    return bar()
}

console.log(foo())

/**
 * - ตัว Object ของ Javascript จะเก็บในส่วนของ Heap ใน Concurency model เสมอ
 * - function คือ Object ชนิดนึงใน Javascript
 * - reccord ใน heap จะ extend ตัว reccord global เสมอ
 * - stack frame จะเก็บ addr ที่เป็น line ที่ call stack นี้มาเผื่อที่จะ return
 * - Scope chain ก็คือ การ extend ของ global reccord
 */
