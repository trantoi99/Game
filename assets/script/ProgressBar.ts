// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Progress extends cc.Component {
  @property(cc.Node)
  timeOutProgressBar: cc.Node = null;

  @property(cc.ProgressBar)
  barSprite: cc.ProgressBar = null;
  @property(cc.Float)
  speed: number = 10;
  _pingpong: Boolean = true;

  onLoad() {
    this._pingpong = true;
    this.timeOutProgressBar.getComponent(
      cc.ProgressBar,
    ).progress = this.barSprite.progress;
  }

  start() {}

  update(dt: number) {
    this._updateProgressBar(this.barSprite, dt);
  }
  _updateProgressBar(progressBar, dt: number) {
    var progress = progressBar.progress;
    if (progress < 1.0 && this._pingpong) {
      progress += dt * this.speed;
    } else {
      progress -= dt * this.speed;
      this._pingpong = progress <= 0;
    }
    progressBar.progress = progress;
  }
}
