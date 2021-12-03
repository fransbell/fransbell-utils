import Phaser from "phaser"

class MainScene extends Phaser.Scene {
  constructor() {
    super()
  }
  //init method
  init = () => {}

  // preload method
  preload = () => {}

  // create method
  create = () => {
    this.textDisplay = this.add.text(50, 50, "... Hello World ...", {
      color: "#000",
    })
    console.log(this.textDisplay)
  }
  // update method
  update = (time, delta) => {
    if (this.textDisplay.x > 800) {
      this.textDisplay.x = 0 - this.textDisplay.width
      return
    } else if (this.textDisplay.x < 800) {
      this.textDisplay.x += 0.2 * delta
    }
  }
}

export default MainScene
