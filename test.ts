class User {
    firstName: string;
    lastName: string;
    email: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    doesEmailMatch(email: string): boolean {
        return this.email === email
    }
}


export class Animal {
    legs: number;
    name: string;
    age: number;
    lives = 1;
    constructor(age: number, name: string; legs: number ) {
        this.age = age;
        this.name = name;
        this.legs = legs;
    }
    mew(): string {
       
        return 'ROOOOAAARRR'
    }
}

export class Dog implements Animal {
    lives: number;
    mew(): string {
        throw new Error("Method not implemented.");
    }
    age: number;
    name: string;
    legs: number;
    
    woof(): string {
        
        return 'Woof Woof!!!!'
    }
}

// const burbie = new Dog(2, 'Burbie', 4);
 

export class Cat extends Animal {
    lives = 9;
    constructor(age: number, name: string, legs: number){
        super(age, name, legs)
    }
    mew(): string {
        super.mew()
        super.lives
        return 'Meow Meow'
    }
}

const walker = new Cat(2, 'Walker', 4)

walker.mew()
// burbie.woof()