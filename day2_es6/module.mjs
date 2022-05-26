function square(num) {
    return num ** 2;    
}

function cube(num) {
    return num ** 3;
}

function internal_add(num1, num2) {
    return num1 + num2;
}

export {
    square,
    cube,
    internal_add as add
}