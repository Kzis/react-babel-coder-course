
/**
 * การประกาศตัวแปรด้วย var / let /const นั้นมีการทำ Hoisting เสมอ
 */

 var a = 1

 function foo(){
     var b = 2
    
    if(true){
        console.log(1)
        console.log(2)
        console.log(3)
        const c = 3
    }
 }

 foo()