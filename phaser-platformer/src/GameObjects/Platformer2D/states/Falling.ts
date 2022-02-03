import StateMachine from "../../../game/utils/StateMachine"
import State from "../../../game/utils/_State"

import Walk from "./Walk"
import Jump from "./Jump"
import Idle from "./Idle"

export default class Falling extends State {
  StateMachine!: StateMachine
  input!: any
  controller!: Phaser.Physics.Arcade.Sprite

  enter(scene: Phaser.Scene, controller: any, data?: any) {
    controller.state = "falling"
    controller.play("player_falling")
    this.controller = controller
    this.StateMachine = controller.StateMachine
    this.input = controller.inputs
  }
  update(time: any, deltaTime: any) {
    //@ts-ignore
    const { left, right } = this.input
    let dir = 0

    if (left.isDown) {
      dir = -1
      this.controller.setFlipX(true)
      this.controller.setOffset(55, 40)
      this.controller.setDisplayOrigin(65, 40)
    }
    if (right.isDown) {
      dir = 1
      this.controller.setFlipX(false)
      this.controller.setOffset(45, 40)
      this.controller.setDisplayOrigin(60, 40)
    }

    this.controller.setVelocityX(
      Phaser.Math.Linear(
        this.controller.body.velocity.x,
        dir * 14 * deltaTime,
        0.05
      )
    )
    //@ts-ignore
    if (this.controller.body.onFloor()) {
      this.StateMachine.setState(new Idle())
    }
  }
}
