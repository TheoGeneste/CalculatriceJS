//Initialisation de la mémoire
let memoire = "";
// Initialisation d'un tableau contenant tout mes boutons ayant pour class boutonChiffre
let chiffres = document.getElementsByClassName('boutonChiffre');
//Initialisation de REGEX pour vérifier que je n'ai pas deux caractèeres spéciaux a la suite
let regex = new RegExp("^(?!.*[^\\w\\s]{2}).*$");
//Initialisation d'un regex pour vérifier qu'il y a que des chiffres et des caractères speciaux
let reg = new RegExp("^[\\d\\W]+$");

//Fonction qui permet de savoir quel touche sont appuyer et gerer le traitement qui va avec
addEventListener("keyup", (event) => {
    switch (event.key){
        case "Enter" :
            calculer();
            break;
        case "Backspace" :
            deleteLastChar();
            break;
        default :
            if (reg.test(event.key)){
                addChar(event.key)
            }
            break;
    }
});

//Boucle sur le tableau de toute mes boutons pour faire le traitements dessus
for(var i = 0; i < chiffres.length; i++)
{
    chiffres[i].addEventListener('click' , (e) => {
        addChar(e.target.value)
    })
}

//Evenement permettant de remettre à zéro ma valeur mémoire
document.getElementById('boutonReset').addEventListener('click', (e) => {
    memoire = "";
    document.getElementById('memoire').value = memoire;
})

//Fonction permettant de calculer ma chaine de caractère et afficher le résultats
function calculer(){
    memoire = eval(memoire);
    document.getElementById('memoire').value = memoire;
}
//Permet de gerer la suppression du dernier caractère
function deleteLastChar(){
    memoire = memoire.slice(0, -1);
    document.getElementById('memoire').value = memoire;
}

//Fonction qui permet d'ajouter un caracteres a ma variable mémoire
function addChar(char){
    if (regex.test(memoire + char)){
        memoire = memoire + char;
    }
    document.getElementById('memoire').value = memoire;
}