
/**
 * Javascript แบ่ง Scope ออกเป็น 3 ชนิด คือ
 * 1. Global Scope คือ เป็น Scope ที่เกิดขึ้นมาพร้อมกับการทำงานของ Js
 * 2. Function Scope คือ Scope ที่ประกาศเป็น function อยู่ภายใต้ global scope
 * 3. Block Scope คือ Scope กลุ่มนึงที่อยู่ภายใต้ function scope
 */

 var a = 1

 function foo(){
    var b= 2
    
    if(true){
        var c =3
    }
    console.log(c) //มองเห็น เพราะ c เป็น function scope มองเห็นได้ภายใน function
}

foo()

/**
 * Variable scope นั้นขึ้นอยู่กับ type ของ variable นั้นๆด้วย
 * var = function scope variable
 * 
 */


















