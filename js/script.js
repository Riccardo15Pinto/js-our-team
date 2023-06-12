//check console log
console.log('ok js');

//richiamo elementi dal DOM
const mainElement = document.getElementById('main-content');


// creo un Array contenente degli oggetti
const TeamMembers = 
[
    {
        immagine : 'img/wayne-barnett-founder-ceo.jpg',
        nome : 'WayneBarnett',
        occupazione : 'Founder & CEO'
    },

    {
        immagine : 'img/angela-caroll-chief-editor.jpg',
        nome : 'Angela Caroll',
        occupazione : 'Chief Editor'
    },

    {
        immagine : 'img/walter-gordon-office-manager.jpg',
        nome : 'Walter Gordon',
        occupazione : 'Office Manager'
    },

    {
        immagine : 'img/angela-lopez-social-media-manager.jpg',
        nome : 'Angela Lopez ',
        occupazione : 'Social Media Manager'
    },

    {
        immagine : 'img/scott-estrada-developer.jpg',
        nome : 'Scott Estrada',
        occupazione : 'Developer'
    },

    {
        immagine : 'img/barbara-ramos-graphic-designer.jpg',
        nome : 'Barbara Ramos',
        occupazione : 'Graphic Designer'
    }

];

// controllo l'array
console.table(TeamMembers);

//creo una variabile d'appoggio
let content = '';

//creo un ciclo dove vado a montare ogni elemento dell'oggetto nella variabile 
for(let key in TeamMembers){
    //faccio un controllo
    console.table(TeamMembers[key]);

    //monto gli elementi
    content += `
    <div>
        <img src="${TeamMembers[key].immagine}" alt"${TeamMembers[key].nome}">
        <h1>${TeamMembers[key].nome}</h1>
        <h3>${TeamMembers[key].occupazione}</h3>
    </div>
    `;
}

//stampo gli elementi
mainElement.innerHTML = content;

console.log(content)