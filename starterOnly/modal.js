function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
// launch modal event
// ecoute du click sur les boutons je m'inscris
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// ecoute du click sur la croix

modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form (permet d'afficher le formulaire)
function launchModal() {
  modalbg.style.display = "block";
}

// function pour fermer le formulaire
function closeModal() {
  modalbg.style.display = "none";
}
const closing = document.querySelector(".closing");
const reserve = document.getElementById("reserve");
//const submit = document.getElementById("submit");
//reserve.style.display = "block";
  //closing.style.display = "none";
 
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

// On récupère l'élément sur lequel on veut détecter le clic

const elt = document.getElementById("bouton");
// On écoute l'événement click

elt.addEventListener("click", function (event) {
  // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
  event.preventDefault();
  // console.log(document.getElementById('birthdate').value);
  const confirmation = document.querySelector(".confirmation");
  
  
  let valide = true;
  // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  const prenom = document.getElementById("first");
  const prenomError = prenom.nextElementSibling;
  const regExPrenom = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
  if (!regExPrenom.test(prenom.value)) {
    valide = false;
    prenomError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    //prenomError.style.display = 'block';
    // display block
    prenomError.classList.add("error");
  } else {
    // display none
    // remove class
    prenomError.classList.remove("error");
    prenomError.textContent = "";
  }

  // Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  const nom = document.getElementById("last");
  const nomError = nom.nextElementSibling;
  const regExNom = /^[a-zA-Z-À-ÖØ-öø-ÿ]{2,}$/;
  if (!regExNom.test(nom.value)) {
    valide = false;
    nomError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    nomError.classList.add("error");
  } else {
    nomError.classList.remove("error");
    nomError.textContent = "";
  }

  // L'adresse électronique est valide.
  const email = document.getElementById("email");
  const emailError = email.nextElementSibling;
  const regExEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  if (!regExEmail.test(email.value)) {
    valide = false;
    emailError.textContent = "l'email n'est pas valide";
    emailError.classList.add("error");
  } else {
    emailError.classList.remove("error");
    emailError.textContent = "";
  }

  // "Vous devez entrer votre date de naissance."
  const birthdate = document.getElementById("birthdate");
  const birthdateError = birthdate.nextElementSibling;
  const regExBirthdate = /^([0-9]{4})-((0)[0-9]|(1)[0-2])-([0-2][0-9]|(3)[0-1])$/;
  if (!regExBirthdate.test(birthdate.value)) {
    valide = false;
    birthdateError.textContent = "Vous devez entrer une date de naissance";
    birthdateError.classList.add("error");
  } else {
    birthdateError.classList.remove("error");
    birthdateError.textContent = "";
  }

  // Pour le nombre de concours, une valeur numérique est saisie.
  const quantity = document.getElementById("quantity");
  const quantityError = quantity.nextElementSibling;
  const regExQuantity = /^([0-9]{1,2})$/;
  //console.log(quantity.value);
  if (!regExQuantity.test(quantity.value)) {
    valide = false;
    quantityError.textContent = "Vous devez choisir une option";
    quantityError.classList.add("error");
  } else {
    quantityError.classList.remove("error");
    quantityError.textContent = "";
  }

  // Un bouton radio est sélectionné.
  const locationError = document.getElementById("locationError");
  if (!document.querySelector('input[name="location"]:checked')) {
    valide = false;
    locationError.textContent = "Vous devez choisir une ville";
    locationError.classList.add("error");
  } else {
    locationError.classList.remove("error");
    locationError.textContent = "";
  }

  // "Vous devez vérifier que vous acceptez les termes et conditions."
  const checkboxError = document.getElementById("checkboxError");
  if (!document.querySelector('input[name="checkbox1"]:checked')) {
    valide = false;
    checkboxError.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions";
    checkboxError.classList.add("error");
  } else {
    checkboxError.classList.remove("error");
    checkboxError.textContent = "";
  }

  // Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

  // Après une validation réussie, inclure un messa †ge de confirmation de la soumission réussie pour l'utilisateur
  // (ex. "Merci ! Votre réservation a été reçue")

  //const bouton = document.getElementById('bouton') {

  confirmation.style.display = valide ? "inline-flex" : "none";
 
  //console.log(reserve);
  reserve.style.display = valide ? "none" :"block";

  //submit.style.display = valide ? "none" :"block";

  



























  // modal-body.style.display = close ? "block" : "none";
  // 11/01/22 masquer la balise (display:none) tout le formulaire



  //closing.style.display = valide ? "block" : "none";

  //closing = document.getElementsByClassName("closing").style.display = none;
  //closing = document.getElementsByClassName("closing").style.display = block;

  // <div id=identifiant_de_ma_div>Votre contenu est placé ici</div>
  // En JavaScript :

  //Pour masquer la division :
  //document.getElementById(identifiant_de_ma_div).style.display = none;
  //Pour afficher la division :
  //document.getElementById(identifiant_de_ma_div).style.display = block;
});

// 30/11/21 - Récupérer toutes les données du formulaire et contrôler les champs avec les expressions régulières
// Les données doivent être saisies correctement :

// Vous devez avoir au moins 18 ans

// const birthdate = document.getElementById('birthdate');
// 	const birthdateError = birthdate.nextElementSibling;
// 	const regExBirthdate = /^([0-9]{4})-((0)[0-9]|(1)[0-2])-([0-2][0-9]|(3)[0-1])$/;

// 	//console.log(new Date(dateDujour) + (birthdate.value));

// 	function sameAgeOrOlder(minimumAge, date) {
// 		const today = new Date();

// 		let age = today.getFullYear() - date.getFullYear();

// 		// Same age?
// 		if (age === minimumAge) {

// 			// Same month?
// 			if (date.getMonth() === today.getMonth()) {

// 				// Same date?
// 				if (date.getDate() === today.getDate()) {

// 					// Today is birthday!
// 					return true;
// 				}

// 				return today.getDate() > date.getDate();
// 			}

// 			return today.getMonth() > date.getMonth();
// 		}

// 		return age > minimumAge;
// 	}

// 	// console.log(birthdate.value);
// 	// console.log(sameAgeOrOlder(18, new Date(birthdate.value)));
// 	// console.log(!regExBirthdate.test(birthdate.value));
// 	if (regExBirthdate.test(birthdate.value) && (!sameAgeOrOlder(18, new Date(birthdate.value)))) {
// 		birthdateError.textContent = 'Vous devez avoir au moins 18 ans !';
// 		birthdateError.classList.add('error');

// 	} else {
// 		birthdateError.classList.remove('error');
// 		birthdateError.textContent = '';
// 	}
