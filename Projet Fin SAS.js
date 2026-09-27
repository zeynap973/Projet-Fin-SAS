const prompt = require("prompt-sync")();

const candidats = [];
    
//1-Ajouter un nouveau candidat:

function ajouterCandidat(candidats) {

    const cin = prompt("Saisir la CIN du candidat: ");
    for (let i = 0; i < candidats.length; i++){ 
        if (candidats[i].cin === cin){
            console.log("Impossible d'ajouter ce candidat. Cette CIN existe déjà.")
            return;        
        }
    }
    const nom = prompt("Entrer le nom du candidat: ");
    const prenom = prompt("Entrer le prénom du candidat: ");
    const partiPolitique = prompt("Saisir le parti politique du candidat: (ou écrire 'Indépendant' s'il n'appartient à aucun parti): ");
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

    const nombreCandidats = Number(prompt("Entrer le nombre de candidats que vous voulez ajouter: "))
        for(let i = 0; i < nombreCandidats; i++){
            ajouterCandidat(candidats);
        }        
}

//3-Afficher la liste des candidats

function afficherCandidats(candidats) {
    
    if (candidats.length === 0) {
        console.log("Aucun candidat n'existe dans la liste.");

    } else { console.log(`
            1- Trier par nombre de votes
            2- Filtrer par parti politique`)

        const choixAffichage = Number(prompt(`Entrer votre choix: `));

        let listeFiltre = candidats;

        switch (choixAffichage) {

            case 1:
                for (let i = 0; i < listeFiltre.length - 1; i++) {
                        for (let j = 0; j < listeFiltre.length - 1 - i; j++) {
                            if (listeFiltre[j].nombreVotes < listeFiltre[j + 1].nombreVotes) {
                                    let temp = listeFiltre[j];
                                    listeFiltre[j] = listeFiltre[j + 1];
                                    listeFiltre[j + 1] = temp;
                            }   
                        }
                    }

                    break;

            case 2:
                const partiRecherche = prompt("Chercher le parti politique: ");
                listeFiltre = candidats.filter(personne => {return personne.partiPolitique === partiRecherche;
                });
                break;

            default:
                console.log("Choix invalide.");
                return;
        }

        for (let personne of listeFiltre) {
            console.log(`
                cin: ${personne.cin}
                mom: ${personne.nom} 
                prénom: ${personne.prenom}
                parti poitiaue: ${personne.partiPolitique}
                âge: ${personne.age}
                nombre de votes: ${personne.nombreVotes}`)
        }   
    }
}

//4- Voter pour un candidat

function VoterPourCandidat(candidats) {
    const cinElecteur = prompt("Veuillez saisir la CIN de l'électeur: ");
    for (let i = 0; i < candidats.length; i++)
        for ( let j = 0; j < candidats[i].electeurs.length; j++)
            if (candidats[i].electeurs[j] === cinElecteur){
                console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
                return;
            }

    const cinCandidat = prompt("Veuillez saisir la CIN du candidat: ");

     for (let i = 0; i < candidats.length; i++){
        if (candidats[i].cin === cinCandidat){
            candidats[i].electeurs.push(cinElecteur);

        console.log("Votre vote a été enregistré avec succès");
        return;
        }
    }
    console.log("Ce candidat n'existe pas");
} 

//5- Modifier les informations d'un candidat

function ModifierCandidat(candidats){
    
    const candidatCherche = prompt("Entrer la CIN du candidat: ");
    for( let i = 0; i < candidats.length; i++){
        if (candidats[i].cin === candidatCherche){
            console.log(`
                1- Modifier le parti politique du candidat
                2- Modifier l'âge du candidat
                `)
            const choixModification = Number(prompt("Entrer votre choix: "))

            switch(choixModification){

                case 1:
                    const partiModifie = prompt("Entrer le nouveau parti du candidat: ");
                    candidats[i].partiPolitique = partiModifie;
                    break;
                    
                case 2:
                    const ageModifie = Number(prompt("Entrer le nouvel âge du candidat: "));
                    candidats[i].age = ageModifie;
                    break;
                    
                default:
                    console.log("Choix invalide")                  
            }
            return;
        }
    }
    console.log("Ce candidat n'existe pas")
}


//-Le menu principal:

function Menu(candidats){

    let choix = NaN;
    while (choix !== 6){

        console.log(`
            1- Ajouter un candidat
            2- Ajouter plusieurs candidats
            3- Afficher la liste des candidats
            4- Voter pour un candidat
            5- Modifier les informations d'un candidat
            6- Quitter`)
    
        const choix = Number(prompt(`Bonjour, veuillez Entrer le numéro de votre choix: `))
            
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
            VoterPourCandidat(candidats);
            break;
        
        case 5:
            ModifierCandidat(candidats);
            break;

        case 6:
            console.log("Merci, au revoir!");
            return;

        default:
            console.log("Choix invalide")
        }
    }
}

Menu(candidats);