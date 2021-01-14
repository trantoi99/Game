// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class playerTail extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  @property(cc.Node)
  nodeImage: cc.Node = null;

  @property(cc.SpriteFrame)
  item: cc.SpriteFrame = null;

  @property(cc.SpriteFrame)
  itemPartner: cc.SpriteFrame = null;

  @property(cc.Node)
  player: cc.Node = null;

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

  onClickUp() {
    let action: any = cc.follow(
      this.player,
      cc.rect(this.player.x - 10, this.player.y - 10, 10, 10),
    );
    console.log('click here');
  }

  onClickDown() {}
  onLoad() {}

  start() {}

  // update (dt) {}
}
