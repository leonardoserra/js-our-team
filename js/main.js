/*
    Utilizzando i dati forniti, creare un array 
        di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti 
        informazioni: nome, ruolo e foto.
    MILESTONE 0:
        Creare l’array di oggetti con le informazioni fornite.
    MILESTONE 1:
        Stampare su console le informazioni di nome, 
        ruolo e la stringa della foto
    MILESTONE 2:
        Stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1:
        Trasformare la stringa foto in una immagine effettiva
    BONUS 2:
        Organizzare i singoli membri in card/schede
*/

const teamDom = document.getElementById('team');


const team = 
    [
        {
            nome:'Wayne Barnett',
            ruolo:'Founder & CEO',
            foto:'wayne-barnett-founder-ceo.jpg'
        },

        {
            nome:'Angela Caroll',
            ruolo:'Chief Editor',
            foto:'angela-caroll-chief-editor.jpg'
        },

        {
            nome:'Walter Gordon',
            ruolo:'Office Manager',
            foto:'walter-gordon-office-manager.jpg'
        },

        {
            nome:'Angela Lopez',
            ruolo:'Social Media Manager',
            foto:'angela-lopez-social-media-manager.jpg'
        },

        {
            nome:'Scott Estrada',
            ruolo:'Developer',
            foto:'scott-estrada-developer.jpg'
        },

        {
            nome:'Barbara Ramos',
            ruolo:'Graphic Designer',
            foto:'barbara-ramos-graphic-designer.jpg'
        },

    ]   


console.log(team);

for(i = 0; i < team.length; i++){

    const currentTeamMember = team[i];
    const schedaDom = document.createElement('div');
    schedaDom.classList.add('scheda');

    const nomeDom = document.createElement('div');
    const ruoloDom = document.createElement('div');
    const fotoDom = document.createElement('div');
    fotoDom.classList.add('square');

    teamDom.append(schedaDom);

    schedaDom.append(nomeDom);
    schedaDom.append(ruoloDom);
    schedaDom.append(fotoDom);
 

    // console.log(currentTeamMember[nome]);
    

    // schedaDom.innerHTML += ('NOME: ' + currentTeamMember['nome'] + '<br/>');
    // schedaDom.innerHTML += ('RUOLO: ' + currentTeamMember['ruolo'] +'<br/>');
    // schedaDom.innerHTML += ('FOTO: ' + '<img src="' + currentTeamMember['foto'] + '" />');
    nomeDom.append('Nome: ' + currentTeamMember['nome']);
    ruoloDom.append('Ruolo: ' + currentTeamMember['ruolo']);
    fotoDom.innerHTML = '<img src="./img/' + currentTeamMember['foto'] + '" />';
    // for(let key in currentTeamMember){
    //     console.log(key + ' ' +currentTeamMember[key]);
    //     nomeDom.innerHTML += currentTeamMember[key] + '<br>';
        
    // }
}



console.log