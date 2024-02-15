class WalkingDoggie {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./walking.png"), 150, 0, 30, 30, 6, 0.15);
   
        this.x = 1050;
        this.y = 170;
        
        this.speed = 50;
    };

    update() {
        this.x -= this.speed * this.game.clockTick;
        if (this.x < -150) this.x = 1050;    
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
}