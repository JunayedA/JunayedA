class student{
    constructor(name,age,cls){
        this.myName = name;
        this.myAge = age;
        this.myCls = cls;
    }
    student_profile(){
        return`My name is ${this.myName}.I'm ${this.myAge} years old and I'm in class ${this.myCls}.`
    }
}



class player extends student{
    constructor(name,age,cls,game){
    super(name,age,cls);
    this.myGame=game;
    }
    player_profile(){
        return`${super.student_profile()}.I love to play ${this.myGame}.`
    }
}

const student1 = new player('Junayed Ahmed','18','11','football')
console.log(student1.player_profile());