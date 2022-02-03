import StateMachine from "../../../game/utils/StateMachine"
import State from "../../../game/utils/_State"
import Falling from "./Falling"

import Idle from "./Idle"
import Walk from "./Walk"

export default class StateJump extends State {
  StateMachine!: StateMachine
  controller!: Phaser.Physics.Arcade.Sprite
  input!: any
  data!: any

  enter(scene: Phaser.Scene, controller: any, data?: any) {
    controller.state = "jump"
    controller.play("player_jump")
    this.controller = controller
    this.StateMachine = controller.StateMachine
    this.input = controller.inputs
    this.data = data
  }
  update(time: any, deltaTime: any) {
    const { space, left, right } = this.input
    const { jumpstart } = this.data

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

    if (jumpstart + 200 > time) {
      if (space.isDown) {
        this.controller.setVelocityY(-300)
      } else {
        this.controller.setVelocityY(-100)
      }
    }
    //@ts-ignore
    else if (this.controller.body.onFloor()) {
      this.StateMachine.setState(new Idle())
    }

    if (this.controller.body.velocity.y >= 0) {
      this.StateMachine.setState(new Falling())
    }
  }
}
