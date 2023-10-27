class Player extends Sprite {
    constructor({
        collisionBlocks = [],
        imageSrc,
        frameRate,
        animations,
        loop
    }) {
        super({imageSrc, frameRate, animations, loop});
        this.position = {
            x: 200,
            y: 200,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1;
        this.collisionBlocks = collisionBlocks;
        // console.log(this.collisionBlocks)
    }

    handleInput(keys){
        if (this.preventInput) return
        this.velocity.x = 0;
        if (keys.d.pressed) {
            this.switchSprite('runRight');
            this.velocity.x = 5;
            this.lastDirection = 'right';
        } else if (keys.a.pressed) {
            this.switchSprite('runLeft');
            this.velocity.x = -5;
            this.lastDirection = 'left';
        } else{
            if (this.lastDirection == 'left') {
                this.switchSprite('idleLeft')
        }   else this.switchSprite('idleRight')
        }
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
      }

    update() {
        this.position.x += this.velocity.x;

        //check for horizontal collisions
        this.updateHitbox();
        this.checkForHorizontalCollisions();

        //apply gravity
        this.applyGravity();

        //check for vertical collisions
        this.updateHitbox();
        this.checkForVerticalCollisions();

         //c.fillStyle = 'red';
         //c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)

    }

    updateHitbox(){
        this.hitbox = {
            position: {
               x: this.position.x + 58,
               y: this.position.y + 45,
            },
           width: 50,
           height: 40,
       }
    }

    checkForHorizontalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            //if collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {

                    //collision on x axis going to left 
                    if (this.velocity.x < 0){
                        const offset = this.hitbox.position.x - this.position.x;
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                        break
                    }

                    if (this.velocity.x > 0){
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
                        this.position.x = collisionBlock.position.x - offset - 0.01
                        break
                    }

            }
        }
    }

    applyGravity(){
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y
        // this.sides.bottom = this.position.y + this.height;
    }

    checkForVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];

            //if collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {

                    
                    if (this.velocity.y < 0){
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        break
                    }

                    if (this.velocity.y > 0){
                        this.velocity.y = 0;
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                        this.position.y = collisionBlock.position.y - offset - 0.01
                        break
                    }

            }
        }
    }
}

