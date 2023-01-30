/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ


const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.value = "ezajkera"
  input.addEventListener('focus', (e)=>{
    e.currentTarget.value = ""
    e.currentTarget.style.backgroundColor = 'red';
  });

  input.addEventListener('focusout', (e)=>{
    e.currentTarget.style.backgroundColor = '';
  })

}



// Deux champs


// Plusieurs champs