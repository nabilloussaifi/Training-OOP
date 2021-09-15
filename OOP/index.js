let dog = {
    name: 'Kylian',
    numLegs: 4,
    sayName() {
        return "this dog name is " + this.name;
    }
};
dog.sayName()
// console.log(dog.name)
// console.log(dog.numLegs)



function Dog() {
    this.name = 'Yass',
        this.color = 'red',
        this.numLegs = 4
}
const hound = new Dog()




function Dog(name, color) {
    this.name = name,
        this.color = color,
        this.numLegs = 4
}
const terrier = new Dog()




function House(numRooms) {
    this.numRooms = numRooms
}
const myHouse = new House(5)
console.log(myHouse instanceof House)






function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property)
    }
}
console.log(ownProps)







function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4
let beagle = new Dog("Snoopy");








function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property)
    }
}
console.log(ownProps)
console.log(prototypeProps)






function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true
    } else {
        return false
    }

}






function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("he can eat")
    },
    describe: function () {
        console.log("his name is " + this.name)
    }
};





function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};







function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle)







function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

Object.isPrototypeOf(Dog.prototype);






function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat,
};
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear,
};
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};






function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
let duck = Object.create(Animal.prototype)
let beagle = Object.create(Animal.prototype)
duck.eat()






function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();
beagle.eat()





function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog

let duck = new Bird();
let beagle = new Dog();





function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function () {
    console.log("Woof!")
}
let beagle = new Dog();
beagle.bark()
beagle.eat()






function Bird() { }
Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () => {
    console.log("Alas, this is a flightless bird.")
}

let penguin = new Penguin();
penguin.fly()








let bird = {
    name: "Donald",
    numLegs: 2
};
let boat = {
    name: "Warrior",
    type: "race-boat"
};
function glideMixin(obj) {
    obj.glide = () => console.log('lets glide')
}
glideMixin(bird)
glideMixin(boat)
console.log(bird, boat)








function Bird() {
    let weight = 15;
    this.getWeight = () => {
        weight
    }
}







(function () {
    console.log("A cozy nest is ready");
})
    ();









const funModule = (function () {
    return {
        isCuteMixin: obj => {
            obj.isCute = () => {
                return true
            }
        },
        singMixin: obj => {
            obj.sing = () => {
                console.log("he can sing")
            }
        }

    }
})()

