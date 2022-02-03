import StateMachine from "../../../game/utils/StateMachine"
import State from "../../../game/utils/_State"

import Walk from "./Walk"
import Jump from "./Jump"
import Falling from "./Falling"

export default class Idle extends State {
  StateMachine!: StateMachine
  input!: any
  controller!: Phaser.Physics.Arcade.Body

  enter(scene: Phaser.Scene, controller: any, data?: any) {
    controller.state = "idle"
    controller.play("player_idle")
    this.controller = controller
    this.StateMachine = controller.StateMachine
    this.input = controller.inputs
    this.controller.setVelocityX(0)
  }
  update(time: any, deltaTime: any) {
    const { left, right, space } = this.input

    let dir = 0

    //@ts-ignore
    if (this.controller.body.onFloor()) {
      if (left.isDown) {
        dir += -1
      }
      if (right.isDown) {
        dir += 1
      }
    } else {
      this.StateMachine.setState(new Falling())
    }

    if (Phaser.Input.Keyboard.JustDown(space)) {
      this.controller.setVelocityY(-10)
      this.StateMachine.setState(new Jump(), { jumpstart: time })
    }

    if (dir !== 0) {
      this.StateMachine.setState(new Walk())
    }
  }
}
