const imagem = document.querySelector('.imagem');
const audio = new Audio('brasil.mp3');

const imagem1 = document.querySelector('.chat');
const audio1 = new Audio('discord.mp3');

const imagem2 = document.querySelector('.lobo');
const audio2 = new Audio('lobopede.mp3');

function aparece(){
  var texto = document.getElementById("segredo");
  var sei = document.getElementById("sei");
  sei.style.display = "none";
  texto.style.display = "block";
}

function desaparece(){
  var sumir = document.getElementById("segredo");
  var sei = document.getElementById("sei");
  sei.style.display = "block";
  sumir.style.display = "none";
}

imagem.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});

imagem1.addEventListener('click', () => {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
    audio1.currentTime = 0;
  }
});


imagem2.addEventListener('click', () => {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
    audio2.currentTime = 0;
  }
});