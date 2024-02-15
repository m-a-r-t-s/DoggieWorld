class ScratchingDoggie {
    constructor(game, x, y) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./walking.png"), 90, 0, 30, 30, 3, 0.1);
   
        this.x = x;
        this.y = y;
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
}