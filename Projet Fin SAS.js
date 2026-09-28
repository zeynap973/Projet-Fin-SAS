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
    console.log("Le candidat a été ajouté avec succès");
}

//2-Ajouter plusieurs candidats à la fois 

function ajouterPlusCandidats(candidats){

    const nombreCandidats = Number(prompt("Entrer le nombre de candidats que vous voulez ajouter: "))
        for(let i = 0; i < nombreCandidats; i++){
            ajouterCandidat(candidats);
        }        
}

//3- Afficher la liste des candidats

function afficherCandidats(candidats) {
    
    if (candidats.length === 0) {
        console.log("Aucun candidat n'existe dans la liste");

    } else { console.log(`
            1- Trier par nombre de votes
            2- Filtrer par parti politique`)

        const choixAffichage = Number(prompt(`Entrer votre choix: `));

        let listeAffichage;

        switch (choixAffichage) {

            case 1:
                listeAffichage = candidats.slice();

                for (let i = 0; i < listeAffichage.length - 1; i++) {
                    for (let j = 0; j < listeAffichage.length - 1 - i; j++) {
                        if (listeAffichage[j].electeurs.length < listeAffichage[j + 1].electeurs.length) {
                                    let temp = listeAffichage[j];
                                    listeAffichage[j] = listeAffichage[j + 1];
                                    listeAffichage[j + 1] = temp;
                        }   
                    }
                }
                break;

            case 2:
                const partiRecherche = prompt("Entrer le parti politique du candidat: ");
                listeAffichage = candidats.filter(personne => personne.partiPolitique === partiRecherche);
                break;

            default:
                console.log("Choix invalide");
                return;
        }

        for (let personne of listeAffichage) {
            console.log(`
                cin: ${personne.cin}
                nom: ${personne.nom} 
                prénom: ${personne.prenom}
                parti politique: ${personne.partiPolitique}
                âge: ${personne.age}
                nombre de votes: ${personne.electeurs.length}`)
        }   
    }
}

//4- Voter pour un candidat:

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
    
    const candidatRecherche = prompt("Entrer la CIN du candidat: ");
    for( let i = 0; i < candidats.length; i++){
        if (candidats[i].cin === candidatRecherche){
            console.log(`
                1- Modifier le parti politique du candidat
                2- Modifier l'âge du candidat
                `)
            const choixModification = Number(prompt("Entrer votre choix: "))

            switch(choixModification){

                case 1:
                    const partiModifie = prompt("Entrer le nouveau parti du candidat: ");
                    candidats[i].partiPolitique = partiModifie;
                    console.log("Le parti politique a été modifié avec succès");
                    break;
                    
                case 2:
                    const ageModifie = Number(prompt("Entrer le nouvel âge du candidat: "));
                    candidats[i].age = ageModifie;
                    console.log("L'âge a été modifié avec succès");
                    break;
                    
                default:
                    console.log("Choix invalide")                  
            }
            return;
        }
    }
    console.log("Ce candidat n'existe pas")
}

//6- Supprimer un candidat 

function SupprimerCandidat(candidats){

    const candidatRecherche = prompt("Entrer la CIN du candidat: ");

    for( let i = 0; i < candidats.length; i++){
        if (candidats[i].cin === candidatRecherche){
            candidats.splice(i, 1);

            console.log("Le candidat a été supprimé avec succès");
            return;
        }
    }
    console.log("Ce candidat n'existe pas")
}

//7- Rechercher un candidat par son nom

function RechercherCandidat(candidats){

    const candidatRecherche = prompt("Entrer le nom du candidat: ");
    for (let i = 0; i < candidats.length; i++){
        if (candidats[i].nom === candidatRecherche){
            console.log(`
                    cin: ${candidats[i].cin}
                    nom: ${candidats[i].nom}
                    prénom: ${candidats[i].prenom}
                    parti politique: ${candidats[i].partiPolitique}
                    âge: ${candidats[i].age}
                    nombre de votes: ${candidats[i].electeurs.length}`);
            return;
        }
    }
    console.log("Ce candidat n'existe pas")
}


//8 - Statistiques de l'élection

function Statistiques(candidats){

    console.log(`
        1- Afficher le nombre total de candidats
        2- Afficher le nombre total de votes exprimés dans toute l'élection
        3- Afficher le top 3 des candidats ayant le plus de votes
        4- Afficher le nombre de candidats par parti politique
        `)
    const choixAffichage = Number(prompt("Entrer votre choix: "));

    switch(choixAffichage){

        case 1:
            console.log(`Le nombre total de candidats est: ${candidats.length}`);
            break;

        case 2:
            let total = 0;
            for (let i = 0; i < candidats.length; i++){
                total += candidats[i].electeurs.length;
            }

            console.log(`Le nombre total de votes est: ${total}`);
            break;

        case 3:
            for (let i = 0; i < candidats.length-1; i++){
                for (let j = 0; j < candidats.length-1-i; j++){
                    if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length){
                        let temp = candidats[j];
                        candidats[j] = candidats[j+1];
                        candidats[j+1] = temp;
                    }
                }
            }

            console.log(`Top 3 candidats:`);

            for (let i = 0; i < 3 && i < candidats.length; i++){
                console.log(`
                    ${i + 1}- ${candidats[i].nom} ${candidats[i].prenom}
                    CIN: ${candidats[i].cin}
                    Parti politique: ${candidats[i].partiPolitique}
                    Nombre de votes: ${candidats[i].electeurs.length}`);
            }
            
            break;

        case 4: 
           let partis = [];

            for (let i = 0; i < candidats.length; i++){

                let partiExiste = false;

                for (let j = 0; j < partis.length; j++){
                    if (partis[j] === candidats[i].partiPolitique){
                        partiExiste = true;
                    }
                }

                if (partiExiste === false){
                    partis.push(candidats[i].partiPolitique);
                }
            }

            for (let i = 0; i < partis.length; i++){

                let nombreCandidats = 0;

                for (let j = 0; j < candidats.length; j++){
                    if (candidats[j].partiPolitique === partis[i]){
                        nombreCandidats++;
                    }
                }

                console.log(`${partis[i]}: ${nombreCandidats}`);
            }
            break;

        default:
            console.log("Choix invalide");
    } 
}


//- Menu principal:

function Menu(candidats){

    let choix = NaN;
    while (choix !== 9){

        console.log(`
            1- Ajouter un candidat
            2- Ajouter plusieurs candidats
            3- Afficher la liste des candidats
            4- Voter pour un candidat
            5- Modifier les informations d'un candidat
            6- Supprimer un candidat
            7- Rechercher un candidat par son nom
            8- Statistiques de l'élection
            9- Quitter`)
    
        choix = Number(prompt(`Bonjour, veuillez Entrer le numéro de votre choix: `))
            
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
            SupprimerCandidat(candidats);
            break;

        case 7:
            RechercherCandidat(candidats);
            break;
        
        case 8:
            Statistiques(candidats);
            break;

        case 9:
            console.log("Merci, au revoir!");
            return;

        default:
            console.log("Choix invalide")
        }
    }
}

Menu(candidats);