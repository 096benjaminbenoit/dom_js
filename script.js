// RÉCUPÉRER LE CONTENU DU h1 //

const h1 = document.getElementsByClassName('title');
console.log(h1[0].textContent);
    // utilisation de "textContent" pour afficher le contenu textuel de ma cible 

// RÉCUPÉRER LE HTML DE LA PREMIÈRE BALISE li //

const liste = document.querySelector('ul');
console.log(liste.firstElementChild.innerHTML);
    // utilisation de "firstElementChild" pour cibler le premier enfant de UL

// RÉCUPÉRER LE HTML DE LA DERNIÈRE BALISE li //

console.log(liste.lastElementChild.innerHTML);
    // utilisation de "lastElementChild" pour cibler le dernier enfant de UL

// RÉCUPÉRER LE HTML DE LA TROISIEME BALISE li //

console.log(liste.children[2].innerHTML);
    //utilisation de "children" pour cibler l'enfant

// RÉCUPÉRER LE HTML DU PARENT DE LA BALISE ul //

console.log(liste.parentNode.innerHTML);
    // utilisation de "parentNode" pour civler le parent de ma variable "liste"

// RÉCUPÉRER LE HTML DU PARENT DE LA QUATRIÈME BALISE li //

console.log(liste.children[3].parentNode.innerHTML);
    // utilisation de "parentNode" et "Child" pour cibler le parent d'un enfant spécifique

// QUAND LA SOURIS SURVOLE <ul>, TOUT LE TEXTE PASSE EN ROUGE //

liste.addEventListener("mouseenter", function survol(event) {
    event.target.style.color = "red";
})

liste.addEventListener("mouseleave", function survolSortie(event) {
    event.target.style.color = "black";
})
    // "mouseenter" pour l'entrée de la souris dans le block
    // "mouseleave" pour la sortie de la souris dans le block