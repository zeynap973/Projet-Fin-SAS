const prompt = require("prompt-sync")();

const candidats = [];
    
//1-Ajouter un nouveau candidat:

function ajouterCandidat(candidats) {

    const cin = prompt("Saisir la CIN du candidat: ");
    for (let i = 0; i < candidats.length; i++){ 
        if (candidats[i].cin === cin){
            console.log("Impossible d'ajouter ce candidat. Cette CIN est déjà existée.")
            return;        
        }
    }
    const nom = prompt("Entrer le nom du candidat: ");
    const prenom = prompt("Entrer le prénom du candidat: ");
    const partiPolitique = prompt("Saisir le parti politique du candidat: (ou écrire Indépendant s'il n'appartient à aucun parti): ");
    const age = Number(prompt("Saisir l'âge du candidat: "));

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    }   
    candidats.push(candidat);
}

//2-Ajouter plusieurs condidats à la fois 

function ajouterPlusCandidats(candidats){

    const nombreCandidats = Number(prompt("Entrer le nombre de candidats que voulez-vous ajouter: "))
        for(let i = 0; i < nombreCandidats; i++){
            ajouterCandidat(candidats);
        }        
}

//3-Afficher la liste des candidats

function afficherCandidats(candidats){

    function filtrerCandidats(candidats){
        const partiEntré = prompt("Réentrer le parti politique du candidat: ")
    }


    if (candidats.length === 0){
        console.log("Aucun candidat n'existe dans la liste.")
    } else {
        for(const personne of candidats){
            console.log(`
                -cin: ${personne.cin}
                -nom: ${personne.nom}
                -prenom: ${personne.prenom}
                -partiPolitique: ${personne.partiPolitique}
                -age: ${personne.age}
                -Nombre de votes: ${personne.electeurs.length}`)
        }
    }
}

//-Le menu principal:

function Menu(candidats){

    let choix = NaN;
    while (choix !== 4){

        choix = Number(prompt(`
            1- Ajouter un candidat
            2- Ajouter plusieurs candidats
            3- Afficher la liste des candidats
            4- quitter
    
            Bonjour, veuillez Entrer le numéro de votre choix: `))
            
        switch (choix) {
        case 1:
            ajouterCandidat(candidats);
            break;

        case 2: 
            ajouterPlusCandidats(candidats);
            break;
        
        case 3:
            afficherCandidats(candidats);
            break;
            
        case 4:
            console.log("Merci, au revoir!");
            break;

        default:
            console.log("Choix invalide")
        }
    }
}

Menu(candidats);