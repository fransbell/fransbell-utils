import Phaser from "phaser"

class StateMachine {
  scene!: Phaser.Scene
  controller!: any
  state!: any

  constructor(scene: Phaser.Scene, controller: any) {
    this.scene = scene
    this.controller = controller
  }

  setState(newState: any, data?: any) {
    if (this.state) {
      this.state.exit()
    }
    this.state = newState
    this.state.enter(this.scene, this.controller, data ? data : null)
  }

  getState() {
    return this.state
  }

  update(time: any, deltaTime: any) {
    this.state.update(time, deltaTime)
  }
}

export default StateMachine
