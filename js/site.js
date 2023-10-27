
//Canvas Initialisation
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.width = 64*16;
canvas.height = 64*9;

let parsedCollisions; 
let collisionBlocks;

let background;
let doors;

const player = new Player({
    imageSrc: 'sprites/Idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'sprites/Idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'sprites/IdleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'sprites/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'sprites/runLeft.png'
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: 'sprites/enterDoor.png',
            onComplete: () => {
                console.log('complete')
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++;
                        if (level === 3) level = 1;
                        levels[level].init();
                        player.switchSprite('idleRight');
                        player.preventInput = false;
                        gsap.to(overlay, {
                            opacity: 0,
                        })
                    }
                })
            }
        }
    }
});

let level = 1;
let levels = {
    1: {
        init: () => {
             parsedCollisions = collisionLevel1.parse2D();
             collisionBlocks = parsedCollisions.createObjectsFrom2D();
             player.collisionBlocks = collisionBlocks;

             if (player.currentAnimation){
                player.currentAnimation.isActive = false;
             };

             background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'sprites/backgroundLevel1.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 767,
                        y: 250,
                    },
                    imageSrc: 'sprites/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ];
        }
    },
    2: {
        init: () => {
             parsedCollisions = collisionLevel2.parse2D();
             collisionBlocks = parsedCollisions.createObjectsFrom2D();
             player.collisionBlocks = collisionBlocks;
             player.position.x = 96;
             player.position.y = 140;

             if (player.currentAnimation){
                player.currentAnimation.isActive = false;
             };

             background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'sprites/backgroundLevel2.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 770,
                        y: 336,
                    },
                    imageSrc: 'sprites/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ];
        }
    },
    3: {
        init: () => {
             parsedCollisions = collisionLevel3.parse2D();
             collisionBlocks = parsedCollisions.createObjectsFrom2D();
             player.collisionBlocks = collisionBlocks;

             if (player.currentAnimation){
                player.currentAnimation.isActive = false;
             };

             background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: 'sprites/backgroundLevel3.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 175,
                        y: 330,
                    },
                    imageSrc: 'sprites/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ];
        }
    },
}

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

const overlay = {
    opacity: 0
}

// let bottom = y + 100;
function animate(){
    window.requestAnimationFrame(animate);

    background.draw();
    // collisionBlocks.forEach((collisionBlock) => {
    //     collisionBlock.draw();
    // });

    doors.forEach((door) => {
        door.draw();
    });

    player.handleInput(keys);
    player.draw();
    player.update();

    // c.fillStyle = 'red';
    // c.fillRect(player.position.x, player.position.y, player.width, player.height)

    c.save();
    c.globalAlpha= overlay.opacity;
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();
    
} 

levels[level].init()
animate();
