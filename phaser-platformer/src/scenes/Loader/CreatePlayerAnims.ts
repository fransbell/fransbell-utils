export default function CreatePlayerAnims(scene: Phaser.Scene) {
  scene.anims.create({
    key: "player_idle",
    frames: scene.anims.generateFrameNumbers("player_idle", {
      start: 0,
      end: 9,
    }),
    frameRate: 8,
    repeat: -1,
  })
  scene.anims.create({
    key: "player_walk",
    frames: scene.anims.generateFrameNumbers("player_walk", {
      start: 0,
      end: 9,
    }),
    frameRate: 12,
    repeat: -1,
  })

  scene.anims.create({
    key: "player_jump",
    frames: scene.anims.generateFrameNumbers("player_jump", {
      start: 0,
      end: 2,
    }),
    frameRate: 8,
    repeat: -1,
  })

  scene.anims.create({
    key: "player_falling",
    frames: scene.anims.generateFrameNumbers("player_falling", {
      start: 0,
      end: 2,
    }),
    frameRate: 6,
    repeat: -1,
  })
}
