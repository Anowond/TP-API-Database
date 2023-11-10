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

let grid = document.querySelector(".grid")

let baliseImg;

/* Création du bouton qui déclenchera la requête vers l'API */

let catButton = document.createElement("div")
catButton.classList.add("button")
catButton.textContent = "Générons des chats !"
body.appendChild(catButton)
console.log(grid)

catButton.addEventListener("click", async () => {

    /* Boucle pour appeler 7 fois l'API et générer 7 images a intégrer à la grille */

    for (let i = 0; i < 9; i++) {

        let baliseImg
        /* Récupération de la réponse de l'API (sous forme d'une chaine de caractéres) */

        let catImg = await get_cat_object()

        let result = JSON.parse(catImg)


        if (!document.getElementById("id" + i)) {

            
            baliseImg = document.createElement("img")
            baliseImg.id = "id" + i.toString();
            baliseImg.src = result[0].url;
            grid.appendChild(baliseImg)

        } else {

           
            baliseImg = document.getElementById("id" + i.toString())
            baliseImg.src = result[0].url
            //   baliseImg.setAttribute("id", i)
            grid.appendChild(baliseImg)
            console.log(baliseImg)

        }

    }

})

/* Création d'un écouteur d'événements sur une image de la grille pour stocker l'url en abse de données */



//let p = ajouterUnObjet(objet, "test");

//let myCollection = await obtenirTouteLaCollection("test")


