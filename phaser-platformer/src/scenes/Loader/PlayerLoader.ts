export default function PlayerLoader(scene: Phaser.Scene) {
  scene.load.spritesheet("player_idle", "src/game/img/player/idle.png", {
    frameWidth: 120,
    frameHeight: 80,
  })
  scene.load.spritesheet("player_walk", "src/game/img/player/walk.png", {
    frameWidth: 120,
    frameHeight: 80,
  })
  scene.load.spritesheet("player_falling", "src/game/img/player/falling.png", {
    frameWidth: 120,
    frameHeight: 80,
  })
  scene.load.spritesheet("player_jump", "src/game/img/player/jump.png", {
    frameWidth: 120,
    frameHeight: 80,
  })
}
