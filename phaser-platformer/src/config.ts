import Phaser from "phaser"

export default {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#33A5E7",
  scale: {
    width: 640,
    height: 360,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: true,
    },
  },
}
