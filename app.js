var provided = 'Hello World!';

var answer1 = provided.indexOf('e');
console.log(answer1);

var answer2 = answer1 - provided;
console.log(answer2);

var answer3 = provided.substring(0, 5).split('');
console.log(answer3);

var answer4 = typeof(provided)
console.log(answer4);

var answer5 = provided.slice(-10).indexOf('!');
console.log(answer5);

var answer6 = provided.charAt(1);
console.log(answer6);

var answer7 = provided.toUpperCase();
console.log(answer7);

var answer8 = provided.replace('!', '?');
console.log(answer8);

//Hard Mode

var answers9 = provided.substring(1, 5);
console.log(answers9);

var answer10 = provided.split('').reverse().join('');
console.log(answer10);

var num = provided.indexOf('e');
var str = num.toString()
var answer11 = str + str + str + str;
console.log(answer11);

var answer12 = provided.split(' ');
console.log(answer12);
