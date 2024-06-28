// A classe a seguir é responsavel por criar o tamagochi.


class Tamagochi {
  constructor(nome, ) {
    this.nome = nome;
    this.saciação = 100;
    this.felicidade = 100;
    this.energia = 100;
    this.fome = 0;
    this.tristeza = 0;
    this.sono = 0;
  }
  alimentar() {
    alert(`${this.nome} foi alimentado!`)
  }
  brincar() {
    this.felicidade = Math.max()
  }
  dormir() {
    this.sono = Math.max()
  }
  morte(){
  }
}

// Essa constante abaixo é responsavel por definir a criação do tamagochi.

const tamagochi = new Tamagochi("Otama")


// As funções abaixo executarão as ações do tamagochi e mudarão o gif do estado atual. 


function alimentar(){
  MudarGIF("pnd.jpeg");
  tamagochi.alimentar();
}
function brincar(){
  MudarGIF("pnd.jpeg");
  tamagochi.brincar()
}
function dormir(){
  MudarGIF("pnd.jpeg");
  tamagochi.dormir()
}
function morte(){
  MudarGIF("pnd.jpeg");
  tamagochi.morte()
}

// Essa função abaixo é responsavel por mudar o gif do tamagoch.

function MudarGIF(filename) {
  let img = document.querySelector("#tamagochiImage");
  img.setAttribute("src", filename);
}
