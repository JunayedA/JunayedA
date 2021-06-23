//constructor function
function Student(firstName,lastName,dob){
    this.firstNsme = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${firstName} ${lastName}`;
    }
}
const student1 = new Student('Junayed','Ahmed','11-21-2002');
const student2 = new Student('Karim','Ahmed','4-11-2992');
const student3 = new Student('Raiad','Ahmed','9-30-1242');
console.log(student1.getFullName());
console.log(student1.getBirthYear());
console.log(student2.getFullName());
console.log(student2.getBirthYear());
console.log(student3.getFullName());
console.log(student3.getBirthYear());