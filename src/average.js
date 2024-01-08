function calculerMoyenne(tableau) {
    if (tableau.length === 0) {
        return "Le tableau est vide, impossible de calculer la moyenne.";
    }

    var somme = tableau.reduce(function(acc, valeur) {
        return acc + valeur;
    }, 0);

    var moyenne = somme / tableau.length;

    return moyenne;
}

var tableauExemple = [10, 15, 20, 25, 30];
var resultatMoyenne = calculerMoyenne(tableauExemple);
console.log("La moyenne du tableau est :", resultatMoyenne);
