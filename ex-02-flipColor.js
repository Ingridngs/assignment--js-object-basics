/**
 * flipColor()
 *
 * Write a function called flipColor. This function may be
 * used to change the color of a tile in a game. It should
 * take as input an object. If that object's color property
 * has the value blue, it should change it to red, and
 * vice-versa.
*/

// cambiar el color del titulo en el juego
// object como entrada
// si el objeto es de color azul se debe cambiar a rojo y viceversa


function flipColor(object){
	
	let resultado = ""

     if(object.color === "blue"){
     	object.color="red"
     }
      else if(object.color === "red"){
     	object.color="blue"
     }	
    
    return object

}











//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tileObj = {
    width: "200px",
    height: "200px",
    color: "blue"
}

var tileObj2 = flipColor(tileObj)

console.assert(tileObj2.color === "red")

var tileObj3 = flipColor(tileObj2)
console.assert(tileObj3.color === "blue")
