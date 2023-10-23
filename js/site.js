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

//Canvas Initialisation
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.width = 64*16;
canvas.height = 64*9;

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'sprites/backgroundLevel1.png'
})

const player = new Player();

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
// let bottom = y + 100;
function animate(){
    window.requestAnimationFrame(animate);

    //Character Setup
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    backgroundLevel1.draw();

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 5;
    } else if (keys.a.pressed) {
        player.velocity.x = -5;
    }

    player.draw();
    player.update();
    
}

animate();
