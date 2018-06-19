
/**
 * Line 8-20 = Global Execution Context
 * Line 10-18 = Execution Context(person)
 * Line 13-15 = Execution Context(getName)
 */

var prefix = "Mr."

function person(){
    var name = "Chalach Monkhontirapat"

    function getName(){
        return prefix +''+name;
    }

    return getName()
}

console.log(person()) //Call Stack

/**
 *  Execution Context ทั้งหมดจะถูกเรียงซ้อนกันเป็น Stack
 */
