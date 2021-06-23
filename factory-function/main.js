//Factory Function
function creatCircle(radius){
        return{
        radius,
        draw(){
            console.log('draw')
        }
    };
}
const circle1 = creatCircle(1);
console.log(circle1);

const circle2 = creatCircle(3);
console.log(circle2);

const circle3 = creatCircle(5);
console.log(circle3);