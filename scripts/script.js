function ajouterAaffichage(valeur) {
  document.getElementById('affichage').value += valeur;
}

function effacerAffichage() {
  document.getElementById('affichage').value = '';
}

function calculerResultat() {
  try {
    document.getElementById('affichage').value = eval(document.getElementById('affichage').value);
  } 
  catch (erreur) {
    document.getElementById('affichage').value = 'Erreur';
  }
}
