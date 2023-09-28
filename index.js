const nomeDoHeroi = ['Gabriel Azara', 'Felipe DIO'];
const xpDoHeroi = [7525, 9126];

let nivelDoHeroi = [];

for (let i = 0; i < xpDoHeroi.length; i++) {
  if (xpDoHeroi[i] < 1000) {
    nivelDoHeroi[i] = 'Ferro';
  } else if (xpDoHeroi[i] >= 1001 && xpDoHeroi[i] <= 2000) {
    nivelDoHeroi[i] = 'Bronze';
  } else if (xpDoHeroi[i] >= 2001 && xpDoHeroi[i] <= 5000) {
    nivelDoHeroi[i] = 'Prata';
  } else if (xpDoHeroi[i] >= 6001 && xpDoHeroi[i] <= 7000) {
    nivelDoHeroi[i] = 'Ouro';
  } else if (xpDoHeroi[i] >= 7001 && xpDoHeroi[i] <= 8000) {
    nivelDoHeroi[i] = 'Platina';
  } else if (xpDoHeroi[i] >= 8001 && xpDoHeroi[i] <= 9000) {
    nivelDoHeroi[i] = 'Ascendente';
  } else if (xpDoHeroi[i] >= 9001 && xpDoHeroi[i] <= 10000) {
    nivelDoHeroi[i] = 'Imortal';
  } else {
    nivelDoHeroi[i] = 'Radiante';
  }
  console.log(
    `O Herói de nome ${nomeDoHeroi[i]} está no nível de ${nivelDoHeroi[i]}`
  );
}
