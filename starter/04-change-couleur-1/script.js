/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

// const btnRed = document.getElementById('red');
// const btnGreen = document.getElementById('green');
// const btnYellow = document.getElementById('yellow');
// const btnBleu = document.getElementById('Bleu');
//
// btnRed.addEventListener('click', ()=>{
//
// });



  window.addEventListener('click', (e)=>{
  document.body.style.backgroundColor = e.target.id;
})

