// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Game } from './GamePlay';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Float)
  private pickNumberRadius: number = 0;
  @property(cc.Node)
  private player: cc.Node;

  onCollisionEnter(selfCollider, otherCollider) {
    if (otherCollider.name == 'itemEnemy<CircleCollider>') {
      this.node.destroy();
    }
  }

  onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    manager.enabledDebugDraw = true;
    manager.enabledDrawBoundingBox = true;
  }
  start() {}
  onDestroy() {
    this.node.parent.getComponent('GamePlay').gainScore();
    // this.node.parent.getComponent('GamePlay').upgradeHeightPlayer();
    this.node.parent.getComponent('GamePlay').spawnNewItem();
    this.node.parent.getComponent('GamePlay').pushToArray();
    this.node.parent.getComponent('GamePlay').getPlayer();
    // this.node.parent.getComponent('GamePlay').testListArrNumber();
  }
}
