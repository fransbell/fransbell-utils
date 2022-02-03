//@ts-nocheck
import Phaser from "phaser"
import Platformer2D from "../GameObjects/Platformer2D/Platformer2D"
import CreatePlayerAnims from "./Loader/CreatePlayerAnims"
import PlayerLoader from "./Loader/PlayerLoader"

class MainScene extends Phaser.Scene {
  //player!: PlayerController
  constructor() {
    super("MainScene")
  }

  preload() {
    PlayerLoader(this)

    this.load.image("tileset", "assets/tileset.png")
    this.load.tilemapTiledJSON("tilemap", "tilemap/tilemap.json")
  }

  create() {
    CreatePlayerAnims(this)

    const map = this.make.tilemap({ key: "tilemap" })

    const tileset = map.addTilesetImage("tileset", "tileset")

    const ground = map.createLayer("ground", tileset)

    const player = new Platformer2D(this, 100, 100, "player_idle")
    this.text = this.add.text(player.x, player.y, player.state)
    this.player = player
    this.physics.world.setBoundsCollision(true, true, true, false)

    ground.setCollisionFromCollisionGroup(true)

    this.physics.add.collider(player, ground)
    const graphics = this.add.graphics()

    // map.renderDebugFull(graphics)
  }

  update(time: any, deltaTime: any) {
    this.text
      .setText(this.player.state)
      .setX(this.player.x - 25)
      .setY(this.player.y - 20)
  }
}

export default MainScene
