class Tamagochi {
  constructor(nome) {
    this.nome = nome;
    this.fome = 50;
    this.felicidade = 50;
    this.energia = 50;
  }

  alimentar() {
    this.fome = Math.max(0, this.fome - 20);
    this.felicidade = Math.min(100, this.felicidade + 10);
    this.mostrarStatus();
    alert(${this.nome} foi alimentado);
  }

  brincar() {
    this.felicidade = Math.min(100, this.felicidade + 20);
    this.energia = Math.max(0, this.energia - 10);
    this.fome = Math.max(0, this.fome + 10);
    this.mostrarStatus();
    alert(${this.nome} brincou);
  }

  dormir() {
    this.energia = Math.min(100, this.energia + 30);
    this.fome = Math.max(0, this.fome + 10);
    this.mostrarStatus();
    alert(${this.nome} dormiu);
  }

  mostrarStatus() {
    document.getElementById('status').innerHTML = `
      Status atual do ${this.nome}: <br>
      Fome: ${this.fome} <br>
      Felicidade: ${this.felicidade} <br>
      Energia: ${this.energia}
    `;
  }
}
