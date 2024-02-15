class DiggingDoggie {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./digging.png"), 0, 0, 30, 30, 7, 0.1);
   
        this.x = 1050;
        this.y = 435;
        
        this.speed = 25;
    };

    update() {
        this.x -= this.speed * this.game.clockTick;
        if (this.x < -150) this.x = 1050;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
}