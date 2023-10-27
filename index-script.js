//Object Declaration
labyrinth = {
    metaData: {
        location: 'Crete',
        contains: 'Minotaur',
        dateCreated: '1950 BCE',
        creator: 'Daedalus',
        commissioner: 'King Minos',
        firstMention: "Homer's Iliad",
        excavatedBy: 'Arthur Evans'
    },
    possibleLocations: ['Knossos', 'Crete', 'Aegean'
    ],
    proofFound: true,
    myth: true,
    culture: 'Greek',
    character: {
        name: 'Theseus',
        lover: 'Ariadne',
        chancesOfSurvival: function(love){
            if (love = strong){
                survival = true;
            } else {
                survival = false;
            }
        }
    },
    ariadneThread: true,
    safety: function(){
        if (ariadneThread == true){
            wayOut = true;
        } else {
            wayOut = false;
        }
    },
    isConfusing: true,
    noOfLevels: '7',

}

minotaur =  {
    mythologicalFamily: 'Greek',
    name: 'Asterius',
    characteristics: {
        head: ['Bull', 'Horns', 'Large'],
        body: ['Human', 'Tall', 'Bulky'],
        tail: ['Bull', 'Long'],
        color: 'snow-white'
    },
    mother: 'Pasiphae',
    sentBy: 'Poseidon',
    wasDefeated: true,
    slayer: 'Theseus'
}

document.addEventListener('DOMContentLoaded', function(){
    const heading = document.querySelector('.heading');
    heading.style.opacity = 1;
    heading.style.visibility = 'visible';

    const minotaurInfoElement = document.getElementById('minotaur-info');

    const commissioner = labyrinth.metaData.commissioner;
    const creator = labyrinth.metaData.creator;
    const monster = labyrinth.metaData.contains;
    const hero = labyrinth.character.name;

    const test1 = document.querySelector('.test');
    const text2 = document.querySelector('.second');
    const text3 = document.querySelector('.three');
    const text4 = document.querySelector('.fourth');

    test1.innerText = commissioner;
    text2.innerText = creator;
    text3.innerText = monster;
    text4.innerText = hero;

// Access the properties from the minotaur object
// const mythologicalFamily = minotaur.mythologicalFamily;
// const name = minotaur.name;
// const headCharacteristics = minotaur.characteristics.head.join(', ');
// const bodyCharacteristics = minotaur.characteristics.body.join(', ');
// const tailCharacteristics = minotaur.characteristics.tail.join(', ');
// const color = minotaur.characteristics.color;
// const mother = minotaur.mother;
// const sentBy = minotaur.sentBy;
// const wasDefeated = minotaur.wasDefeated;
// const slayer = minotaur.slayer;

// Create an HTML string with the information
// const minotaurInfoHTML = `
//   <h2>${name}</h2>
//   <p>Mythological Family: ${mythologicalFamily}</p>
//   <p>Characteristics:</p>
//   <ul>
//     <li>Head: ${headCharacteristics}</li>
//     <li>Body: ${bodyCharacteristics}</li>
//     <li>Tail: ${tailCharacteristics}</li>
//   </ul>
//   <p>Color: ${color}</p>
//   <p>Mother: ${mother}</p>
//   <p>Sent by: ${sentBy}</p>
//   <p>Was Defeated: ${wasDefeated ? 'Yes' : 'No'}</p>
//   <p>Slayer: ${slayer}</p>
// `;

// // Set the HTML content of the element
// minotaurInfoElement.innerHTML = minotaurInfoHTML;

});
