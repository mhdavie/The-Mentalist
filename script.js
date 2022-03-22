// created the variable for a secret number, parseInt is to make sure 
//the number will be inteiro 
// Math.random is a js method that will help our game to have a random number
// and we multply by 11 so we can get 0 -- 10
var secretNumber = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
}
