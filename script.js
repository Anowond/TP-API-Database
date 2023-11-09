/* L'idée du TP est de récupérer des informations d'une API, de les afficher sur une page HTML et de stocker les informations sur une base de données FireStore */

/* Importation des focntions de manipulation de la base de données hebergée sur FireStore */

import {

    ajouterUnObjet,

    obtenirTouteLaCollection,

    trouverDocumentsAvecValeur,

    mettreAJourUnDocument,

    supprimerUnDocument,

    supprimerTousLesDocumentsDeLaCollection,

    mettreAJourDocumentsAvecValeurParticulière,

} from "./fireStore.js"


import {

    get_cat_object

} from "./api.js"

/* récupération et création des éléments */

let body = document.querySelector("body")

let ruche = document.querySelector(".honeycomb")

/* Boucle pour appeler 7 fois l'API et générer 7 images a intégrer à la grille */

for (let i = 0; i < 7; i++) {

    /* Récupération de la réponse de l'API (sous forme d'une chaine de caractéres) */

    let catImg = await get_cat_object()

    /* Formatage de la chaine de caractés, on retire les crochets non-interprêtables, et on convertit ce qui reste en objet JSON */

    let catImgReplace1 = catImg.replace("[", "")
    let catImgReplace2 = catImgReplace1.replace("]", "")
    let catObject = JSON.parse(catImgReplace2)
    console.log(catObject)

    /* Pour chaque image, créer une balise img, et y attribuer comme src l'url récupérée de l'API */

    let baliseImg = document.createElement("img")
    baliseImg.setAttribute("src", catObject.url)
    ruche.appendChild(baliseImg)

}

//let p = ajouterUnObjet(objet, "test");

//let myCollection = await obtenirTouteLaCollection("test")


