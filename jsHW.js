// Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, 
// як відбувається перетворення в кожному прикладі:



// var first1 = 'number' + 3 + 3;  
// console.log(first1);   //Concatenation
// var first2 = null + 3 
// console.log(first2);   //nall is void, void plus number will be a number
var first3 = 5 && "qwerty"
console.log(first3);  
// var first4 = +'40' + +'2' + "hillel";
// console.log(first4); // since the actions are consecutive, first there was an addition, then the number merged with the string
// var first5 = '10' - 5 === 6; 
// console.log(first5);//Since === is strict equality, therefore false
// var first6 = true + false
// console.log(first6); // true=1, false=0 
// var first7 = '4px' - 3
// console.log(first7); // Because, during arithmetic operations, js wants to output a number, '4px' != number
// var first8 = '4' - 3
// console.log(first8); // Because, during arithmetic operations, js wants to output a number '4' is number
// var first9 = '6' + 3 ** 0;
// console.log(first9); //Concatenation, because, '6' is a string, not a number 
// var first10 = 12 / '6'
// console.log(first10);// Because, during arithmetic operations, js wants to output a number '6' is number
// var first11 = '10' + (5 === 6);
// console.log(first11); //Concatenation occurs, 10 and false, because '10' is a string, 5 === 6 is false if there is a + sign, it is no longer an arithmetic expression, but a concatenation
// var first12 = null == ''
// console.log(first12);  // Null = false, ''= false 
// var first13 = 3 ** (9 / 3);
// console.log(first13); // arithmetic expression, first the action in parentheses, then the elevation in degree 
// var first14 = !!'false' == !!'true' // the first !! converts a value to a boolean and returns the reverse, and the second !! inverts it again
// console.log(first14);
// var first15 = 0 || '0' && 1 // js always brings everything to a number, so 1. 0 or '0' and 1
// console.log(first15);
// var first16 = (+null == false) < 1;
// console.log(first16);  // 0 is less than 1
var first17 = false && true || true
console.log(first17);
var first18 = false && (false || true);
console.log(first18);
var first19 = (+null == false) < 1 ** 5;
console.log(first19);