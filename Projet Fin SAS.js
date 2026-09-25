const prompt = require("prompt-sync")();

const candidats = [];

//1-Ajouter un nouveau candidat :

function ajouterCandidat(candidats) {

    const cin = prompt("Saisir la CIN du candidat: ");
    for (let i = 0; i < candidats.length; i++){ 
          if (candidats[i].cin === cin){
            console.log("Impossible d'ajouter ce candidat. Cette CIN est déjà existée.")
            return;
            
    }
    const nom = prompt("Entrer le nom du candidat: ");
    const prenom = prompt("Entrer le prénom du candidat: ");
    const partiPolitique = prompt("Saisir le parti politique du candidat: (ou écrire Indépendant s'il n'appartient à aucun parti) :")
    const age = Number(prompt("Saisir l'âge du candidat: "))

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

ajouterCandidat(candidats);
console.log(candidats);

//2-Ajouter plusieurs condidats à la fois 

function ajouterCandidats(candidats){
    const nombreCandidats = Number(prompt("Entrer le nombre de candidats que voulez-vous ajouter: "))
    for(let i = 0; i < nombreCandidats; i++){
        ajouterCandidat(candidats);
    }       
}

ajouterCandidats(candidats);
console.log(candidats);