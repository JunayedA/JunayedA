let sayHello = function(){
    console.log('hello bangladeshs');
}
sayHello();

let sayHello1 = function(name){
    console.log(`say hello to ${name}`);
}
sayHello1('Junayed');

let sayHello2 = (name,age)  => {
    console.log(`say hello to ${name} who is ${age}.`);
}
sayHello2('Junayed',18);

//2nd way of arrow you can skip () if u use 1 value

let sayHello3 = name  => {
    console.log(`say hello to ${name}.`);
}
sayHello3('Junayed');

//if u use no value then u have to use () or _

let sayHello4 = _ => {
    console.log(`say hello to Bangladesh.`);
}
sayHello4();

//u can also use function in one line then u can remove only {}

let sayHello5 = _ => console.log(`say hello to Bangladesh.`);
sayHello5();