const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./digging.png");
ASSET_MANAGER.queueDownload("./shaking.png");
ASSET_MANAGER.queueDownload("./walking.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new ScratchingDoggie(gameEngine, 20, 20));
	gameEngine.addEntity(new ScratchingDoggie(gameEngine, 840, 20));
	gameEngine.addEntity(new ScratchingDoggie(gameEngine, 20, 590));
	gameEngine.addEntity(new ScratchingDoggie(gameEngine, 840, 590));
	gameEngine.addEntity(new ShakingDoggie(gameEngine, 430, 305));
	gameEngine.addEntity(new WalkingDoggie(gameEngine));
	gameEngine.addEntity(new DiggingDoggie(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
});