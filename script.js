// RÉCUPÉRER LE CONTENU DU h1 //

const h1 = document.getElementsByClassName('title');
console.log(h1[0].textContent);

// RÉCUPÉRER LE HTML DE LA PREMIÈRE BALISE li //

const liste = document.querySelector('ul');
console.log(liste.firstElementChild.innerHTML);

// RÉCUPÉRER LE HTML DE LA DERNIÈRE BALISE li //

console.log(liste.lastElementChild.innerHTML);

// RÉCUPÉRER LE HTML DE LA TROISIEME BALISE li //

console.log(liste.children[2].innerHTML);

// RÉCUPÉRER LE HTML DU PARENT DE LA BALISE ul //

console.log(liste.parentNode.innerHTML);

// RÉCUPÉRER LE HTML DU PARENT DE LA QUATRIÈME BALISE li //

console.log(liste.children[3].parentNode.innerHTML);

// QUAND LA SOURIS SURVOLE <ul>, TOUT LE TEXTE PASSE EN ROUGE //

liste.addEventListener("mouseenter", function survol(event) {
    event.target.style.color = "red";
})

liste.addEventListener("mouseleave", function survolSortie(event) {
    event.target.style.color = "black";
})