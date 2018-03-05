/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/

// Una funcion con 3 strings  con el primer y ultimo nombre cómo argumentos

function makeNamesObject(person, person2, person3){

	let persona = person.split(" ")
    let firstName = persona[0]
    let lastName = persona[1]

    console.log(firstName)
  
 
    const greatMenObj = {
     	
     }
	
     greatMenObj.[firstName] = lastName 
	   

	console.log(greatMenObj)

}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")


console.log("1------------------------------------")
console.assert(greatMenObj.George === "Washington")
console.log("1------------------------------------")
console.log("")
console.log("2------------------------------------")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.log("2------------------------------------")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
