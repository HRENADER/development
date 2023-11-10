class Animal {
    name;
    food;
    location;
    voice;
    constructor(name, food, location, voice) {
        this.name = name;
        this.food = food;
        this.location = location;
        this.voice = voice;
    }

    makeNoise() {

    }
    Eat() {

    }
    Sleep() {

    }
}

class Dog extends Animal {

    constructor(name, food, location, voice) {
        super(name, food, location, voice);
    }

    makeNoise() {
        return `${this.name} говорит ${this.voice}`;
    }
    Eat() {
        return `${this.name} ест ${this.food}`;
    }
    Sleep() {
        return `${this.name} спит`;
    }
}

class Cat extends Animal {

    constructor(name, food, location, voice) {
        super(name, food, location, voice);
    }

    makeNoise() {
        return `${this.name} говорит ${this.voice}`;
    }
    Eat() {
        return `${this.name} ест ${this.food}`;
    }
    Sleep() {
        return `${this.name} спит`;
    }
}

class Horse extends Animal {

    constructor(name, food, location, voice) {
        super(name, food, location, voice);
    }

    makeNoise() {
        return `${this.name} говорит ${this.voice}`;
    }
    Eat() {
        return `${this.name} ест ${this.food}`;
    }
    Sleep() {
        return `${this.name} спит`;
    }
}

class Vet {
    constructor(name, food, location) {
        this.name = name;
        this.food = food;
        this.location = location;
    }

    treatAnimal(animal) {
        return `${animal.name} ест ${animal.food} живет ${animal.location}`;
    }
}

var cName = prompt('Имя кота', 'Барсик');
var cFood = prompt('Что ест кот', 'Рыбу');
var cLocation = prompt('Где живет кот', 'Дома');
var cVoice = prompt('Что говорит кот', 'Мяу');
var dName = prompt('Имя пса', 'Барбос');
var dFood = prompt('Что ест пёс', 'Мясо');
var dLocation = prompt('Где живет пёс', 'в Конуре');
var dVoice = prompt('Что говорит пёс', 'Гав');
var hName = prompt('Имя коня', 'Мустанг');
var hFood = prompt('Что ест конь', 'Морковь');
var hLocation = prompt('Где живет конь', 'в Конюшне');
var hVoice = prompt('Что издает конь', 'Ржание');

var cat = new Cat(cName, cFood, cLocation, cVoice);
var dog = new Dog(dName, dFood, dLocation, dVoice);
var horse = new Horse(hName, hFood, hLocation, hVoice);

var vet = new Vet();





