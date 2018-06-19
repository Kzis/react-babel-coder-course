
/**
 * การประกาศตัวแปรด้วย var / let /const นั้นมีการทำ Hoisting เสมอ
 */

var a = 1

function foo(){
    var b
    b = 2
    if(true){
        const c
        console.log(1)
        console.log(2)
        console.log(c) //Reference error เพราะว่ายังไม่ถึงส่วนประกาศที่แท้จริงมีจะมีการทำ Hoisting แล้วก็ตาม
        c = 3
    }
}

foo()

/**
 * จาก line 15 การที่ไม่สามารถเข้าถึงได้ เป็นเพราะว่า js
 * จะทำการ block การเข้าถึงของตัวแปร เรียกว่า temporal dead zone
 */