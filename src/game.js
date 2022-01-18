
let turn = 1;

const div = document.getElementsByClassName("cell");

for(let i = 0; i < div.length; i++){

    div[i].addEventListener("click", function(){

        if(/x|X/.test(this.innerHTML) || /o|O/.test(this.innerHTML))

            return alert("Lugar ocupado");

        if(turn%2 !== 0){

            this.innerHTML += "X";

            turn += 1;
        }

        else{

            this.innerHTML += "o"

            turn += 1;
        }

    });

}