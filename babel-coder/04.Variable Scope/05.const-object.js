

function foo(){
    const x = {a:1}
    x.a = 2
}

foo()


/**
 * const สามารถเปลี่ยนค่า ภายในของ object ได้
 * แต่ ไม่สามารถเปลี่ยน memory pointer ที่ object ชี้ไปได้
 * เราจึงจะสามารถเปลี่ยนค่าภายในได้
 */

 /**
  * หากไม่ต้องการเปลี่ยนแปลงค่าของ object ตัวนั้นเลย ต้องทำดังนี้
  */

  function foo(){
      const x = Object.freeze({a:1})
      x.a=2
  }
  foo() //Error

  /**
   * แต่หาก a เป็น object ข้างใน อีกชั้นนึง object
   * นั้นจะไม่ได้รับการแช่เเข็ง จึงจะยังสามารถแก้ไขค่าได้อยู๋
   */