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
