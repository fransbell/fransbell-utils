import Phaser from "phaser"
import StateMachine from "../../game/utils/StateMachine"
import Idle from "./states/Idle"

export default class Platformer2D extends Phaser.Physics.Arcade.Sprite {
  // props
  StateMachine!: StateMachine
  inputs!: any

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    scene.add.existing(this).setScale(2)
    const player = scene.physics.add
      .existing(this)
      .setCollideWorldBounds(true)
      .setBodySize(20, 40)
      .setOffset(45, 40)

    scene.add.group({ runChildUpdate: true }).add(this)
    this.init(scene)
  }

  init(scene: Phaser.Scene) {
    this.inputs = scene.input.keyboard.addKeys("up,down,left,right,space")
    this.StateMachine = new StateMachine(scene, this)
    this.StateMachine.setState(new Idle())
  }

  update(time: any, deltaTime: any) {
    this.StateMachine.getState().update(time, deltaTime)
  }
}
