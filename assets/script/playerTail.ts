// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  @property(cc.Node)
  nodeImage: cc.Node = null;

  @property(cc.SpriteFrame)
  item: cc.SpriteFrame = null;

  @property(cc.SpriteFrame)
  itemPartner: cc.SpriteFrame = null;

  changeSprite() {
    if (
      this.nodeImage.getComponent(cc.Sprite).spriteFrame == this.itemPartner
    ) {
      this.nodeImage.getComponent(cc.Sprite).spriteFrame = this.item;
    } else if (
      this.nodeImage.getComponent(cc.Sprite).spriteFrame == this.item
    ) {
      this.nodeImage.getComponent(cc.Sprite).spriteFrame = this.itemPartner;
    }
  }

  onClickUp() {}

  onClickDown() {}
  // onLoad () {}

  start() {}

  // update (dt) {}
}
