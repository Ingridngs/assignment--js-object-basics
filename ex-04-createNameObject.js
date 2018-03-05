/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/


function createNameObject(variable){
   var nombre= variable.split(" ")

   nameObj1={

   	   firstName:"Benzo" 
   	   lastName:"Lorenzo"
   }
   
   for (let i = 0; 1> variable.length ;  i++) {
   	Things[i]
   }


   console.log(variable.length)

}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var nameObj1 = createNameObject("Benzo Lorenzo")
console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

var nameObj2 = createNameObject("Felipe Tortuga")
console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

var nameObj3 = createNameObject("Lupe Maria")
console.assert(nameObj2.firstName === 'Lupe')
console.assert(nameObj2.lastName === 'Maria')
