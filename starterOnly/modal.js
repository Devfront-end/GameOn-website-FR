function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelector('.close');
// launch modal event
// ecoute du click sur les boutons je m'inscris
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// ecoute du click sur la croix
modalClose.addEventListener('click', closeModal);

// launch modal form (permet d'afficher le formulaire)
function launchModal() {
	modalbg.style.display = 'block';
}

// function pour fermer le formulaire
function closeModal() {
	modalbg.style.display = "none";
}
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

//function validateFormData() {
	// On récupère l'élément sur lequel on veut détecter le clic
const elt = document.getElementById('bouton');
// On écoute l'événement click
elt.addEventListener('click', function (event) {

	event.preventDefault();
	console.log(document.getElementById('first').value);
	const prenom = document.getElementById('first').value

});
//}



// Les données doivent être saisies correctement :
// Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function prenom() {

}
// Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
function nom() {

}
// L'adresse électronique est valide.
function email() {

}
// Pour le nombre de concours, une valeur numérique est saisie.
function nombreConcours() {

}
// Un bouton radio est sélectionné.

// La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

function conditionsGenrales() {

}
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.


