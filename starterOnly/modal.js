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
	modalbg.style.display = 'none';
}
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

// On récupère l'élément sur lequel on veut détecter le clic
const elt = document.getElementById('bouton');
// On écoute l'événement click
elt.addEventListener('click', function (event) {
	// On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
	event.preventDefault();
	// console.log(document.getElementById('birthdate').value);
	// Le champ Prénom a un minimum de 2 caractères / n'est pas vide.

	const prenom = document.getElementById('first');
	const prenomError = prenom.nextElementSibling;
	const regExPrenom = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
	if (!regExPrenom.test(prenom.value)) {
		prenomError.textContent = "le prenom n'est pas valide";
		//prenomError.style.display = 'block';
		// display block
		prenomError.classList.add('error');
	} else {
		// display none
		// remove class
		prenomError.classList.remove('error');
		prenomError.textContent = '';
	}

	// Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
	const nom = document.getElementById('last');
	const nomError = nom.nextElementSibling;
	const regExNom = /^[a-zA-Z-À-ÖØ-öø-ÿ]{2,}$/;
	if (!regExNom.test(nom.value)) {
		nomError.textContent = "le nom n'est pas valide";
		nomError.classList.add('error');
	} else {
		nomError.classList.remove('error');
		nomError.textContent = '';
	}

	// L'adresse électronique est valide.
	const email = document.getElementById('email');
	const emailError = email.nextElementSibling;
	const regExEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
	if (!regExEmail.test(email.value)) {
		emailError.textContent = "l'email n'est pas valide";
		emailError.classList.add('error');
	} else {
		emailError.classList.remove('error');
		emailError.textContent = '';
	}

	// ^([0-9]{4})-((0)[0-9]|(1)[0-2])-([0-2][0-9]|(3)[0-1])$
	// "Vous devez entrer votre date de naissance."
	const birthdate = document.getElementById('birthdate');
	const birthdateError = birthdate.nextElementSibling;
	const regExBirthdate = /^([0-9]{4})-((0)[0-9]|(1)[0-2])-([0-2][0-9]|(3)[0-1])$/;
	
	//console.log(new Date(dateDujour) + (birthdate.value));
	console.log(birthdate.value);
	console.log(sameAgeOrOlder(18, new Date(birthdate.value)));
	console.log(!regExBirthdate.test(birthdate.value));
	if (regExBirthdate.test(birthdate.value) && (!sameAgeOrOlder(18, new Date(birthdate.value)))) {
		birthdateError.textContent = 'Vous devez avoir au moins 18 ans !';
		birthdateError.classList.add('error');

	} else {
		birthdateError.classList.remove('error');
		birthdateError.textContent = '';
	}



	// Pour le nombre de concours, une valeur numérique est saisie.
	const quantity = document.getElementById('quantity');
	const quantityError = quantity.nextElementSibling;
	const regExQuantity = /^([0-9]{1,2})$/;
	//console.log(quantity.value);
	if (!regExQuantity.test(quantity.value)) {
		quantityError.textContent = 'Vous devez choisir une option';
		quantityError.classList.add('error');
	} else {
		quantityError.classList.remove('error');
		quantityError.textContent = '';
	}

	// Un bouton radio est sélectionné.
	
	const checkbox = document.querySelectorAll('input[type=radio]:checked');
	const quantityError = quantity.nextElementSibling;
	if (checkbox) {
		checkboxError.textContent = 'Vous devez choisir une option';
		checkboxError.classList.add('error');
	} else {
		checkboxError.classList.remove('error');
		checkboxError.textContent = '';
	}
	// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

	// Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")
});

// 30/11/21 - Récupérer toutes les données du formulaire et contrôler les champs avec les expressions régulières
// Les données doivent être saisies correctement :



function sameAgeOrOlder(minimumAge, date) {
	const today = new Date();

	let age = today.getFullYear() - date.getFullYear();


	// Same age?
	if (age === minimumAge) {

		// Same month?
		if (date.getMonth() === today.getMonth()) {

			// Same date?
			if (date.getDate() === today.getDate()) {

				// Today is birthday!
				return true;
			}

			return today.getDate() > date.getDate();
		}

		return today.getMonth() > date.getMonth();
	}

	return age > minimumAge;
}












/*
<html>
   <head>
	  <script>
		 function check(){
			 var nbr;
			 nbr = Number(document.getElementById("age").value);
			 if(nbr < 18)
			 {
				alert("Vous n'êtes pas un adulte");
			 }
			 else
			 {
				alert("Vous êtes un adulte");
			 }
		 }
	  </script>
   </head>
   <body>
	  Entrez votre age: <input id="age">
	  <button onclick="check()">Vérifier</button>
   </body>
</html>
*/













//const checkboxError = checkbox.nextElementSibling;
	// const regExCheckbox = // 

	//for (let i = 0; i < location-radio.length; i++) {
	//	if (location-radio[i].checked) {

	//}//

	// La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

	//const checkbox1 = document.getElementById('checkbox1');
	//const checkbox1Error = checkbox1.nextElementSibling;
	// const regExCheckbox1 = //
	//if (!regExCheckbox1.test(checkbox1.value)) {
	//checkboxError.textContent = 'Vous devez choisir une option'
	//checkboxError.classList.add('error');
	//} else {
	// checkboxError.classList.remove('error');
	//}
