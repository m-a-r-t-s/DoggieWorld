class ShakingDoggie {
    constructor(game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./shaking.png"), 0, 0, 30, 30, 13, 0.075);
   
        this.x = x;
        this.y = y;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
    };
}