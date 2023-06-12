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
        immagine : 'angela-caroll-chief-editor.jpg',
        nome : 'Angela Caroll',
        occupazione : 'Chief Editor'
    },

    {
        immagine : 'walter-gordon-office-manager.jpg',
        nome : 'Walter Gordon',
        occupazione : '	Office Manager  '
    },

    {
        immagine : 'angela-lopez-social-media-manager.jpg',
        nome : 'Angela Lopez ',
        occupazione : 'Social Media Manager'
    },

    {
        immagine : 'scott-estrada-developer.jpg',
        nome : 'Scott Estrada',
        occupazione : 'Developer'
    },

    {
        immagine : 'barbara-ramos-graphic-designer.jpg',
        nome : 'Barbara Ramos',
        occupazione : '	Graphic Designer'
    }

];

console.table(TeamMembers);