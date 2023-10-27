window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {
        case 'w':
            for (let i = 0; i < doors.length; i++){
                const door = doors[i];
                
                if (player.position.x <= door.position.x + door.width &&
                    player.position.x + player.width >= door.position.x &&
                    player.position.y + player.height >= door.position.y &&
                    player.position.y <= door.position.y + door.height) 
                    {
                        console.log('collide')
                        player.velocity.x = 0;
                        player.velocity.y = 0;
                        player.preventInput = true;
                        player.switchSprite('enterDoor');
                        door.play();
                        return
                    }
            }

            if (player.velocity.y === 0) player.velocity.y = -15;
            break;
        
        case 'd':
            keys.d.pressed = true;
            break;

        case 'a':
            keys.a.pressed = true;
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {        
        case 'd':
            keys.d.pressed = false;
            break;

        case 'a':
            keys.a.pressed = false;
            break;
    }
})