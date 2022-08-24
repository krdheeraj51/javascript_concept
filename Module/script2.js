//IIFE
import module1 from 'module1';
import module2 from 'module2';


// var fightModule=(function(){
//     var harry='Potter';
//     var voldemort='He who must not be named';

   export  function fight(char1,char2){
        var attack1=Math.floor(Math.random() * char1.length);
        var attack2=Math.floor(Math.random() * char1.length);

        return attack1 > attack2 ? `${char1} wins`  : `${char2} wins `;
    }

    // console.log(fight(harry,voldemort))
    return {fight:fight}

// })()