let fome = 100;
let diversao = 100;
let sono = 100;

function passartempo(tempo = 2){
  if(fome <= 0 || diversao <= 0 || sono <= 0 ){
    document.getElementById('tamagochiImage').src='dead.jpg';
    document.getElementById('aviso').innerHTML = 'Seu Tamagochi Morreu!';
    }
  fome = fome - parseInt(tempo);
  diversao = diversao - parseInt(tempo);
  sono = sono - parseInt(tempo);

  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('sono').innerHTML = sono + '%';
}


function start(){
  let contartempo = setInterval(passartempo, 2700);
}

function comer(){
  fome = 100;
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}

function brincar(){
  diversao = 100;
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao+ 'px';
}

function dormir(){
  sono = 100;
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}

start();
