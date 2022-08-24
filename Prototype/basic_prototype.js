let dragon={
    name:'Tanya',
    fire:true,
    fight(){
        return 5
    },
    sing() {
        if(this.fire){
            return `I am ${this.name} , the breather 
            of fire` 
        }
        
    }
}

let lizard={
    name:'kikki',
    fight(){
        return 1
    }
}

const singLizard= dragon.sing.bind(lizard);
console.log(singLizard())


lizard.__proto__=dragon;
console.log(lizard.isPrototypeOf(dragon))// false
console.log(dragon.isPrototypeOf(lizard))// true
console.log(lizard.sing())

for(let prop in lizard){
    console.log(prop);
    if(lizard.hasOwnProperty(prop)){
        console.log("own property :",prop)
    }
}


//Few more things 

let human={
    mortal:true
}
let socrates=Object.create(human);
socrates.age=45;
console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates));


