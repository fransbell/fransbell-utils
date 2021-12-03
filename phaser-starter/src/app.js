import Phaser from "phaser"
import MainScene from "./Scene/MainScene"

const config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  backgroundColor: "#F6AE2D",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  parent: "phaser",
  canvasStyle: "display:block;margin:auto",
  scene: [MainScene],
}

const game = new Phaser.Game(config)
