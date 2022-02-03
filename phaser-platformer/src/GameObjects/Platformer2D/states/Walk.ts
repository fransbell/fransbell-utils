import StateMachine from "../../../game/utils/StateMachine"
import State from "../../../game/utils/_State"

import Idle from "./Idle"
import Jump from "./Jump"

export default class StateWalk extends State {
  StateMachine!: StateMachine
  controller!: any
  input!: any

  enter(scene: Phaser.Scene, controller: any, data?: any) {
    controller.state = "walk"
    controller.play("player_walk")
    this.controller = controller
    this.StateMachine = controller.StateMachine
    this.input = controller.inputs
  }

  update(time: any, deltaTime: any) {
    // update state
    const { left, right, space } = this.input
    let dir = 0

    if (left.isDown) {
      dir += -1
      this.controller.setFlipX(true)
      this.controller.setOffset(55, 40)
      this.controller.setDisplayOrigin(65, 40)
    }
    if (right.isDown) {
      dir += 1
      this.controller.setFlipX(false)
      this.controller.setOffset(45, 40)
      this.controller.setDisplayOrigin(60, 40)
    }

    if (dir === 0) {
      this.controller.setVelocityX(0)
      this.StateMachine.setState(new Idle())
      return
    }

    this.controller.setVelocityX(dir * 10 * deltaTime)

    if (Phaser.Input.Keyboard.JustDown(space)) {
      this.controller.setVelocityY(-10)
      this.StateMachine.setState(new Jump(), { jumpstart: time })
    }
  }

  exit() {
    // exit state
  }
}
