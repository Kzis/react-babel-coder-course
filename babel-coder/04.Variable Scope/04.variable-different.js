
function foo(){
    let x = 1
    x = 2
}

foo()

function foo(){
    const x = 1
    x = 2 // error
}

foo()

/**
 * let แตกต่างกับ var ตรงที่ scope
 * const = ค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้
 */