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
  @property(cc.Texture2D)
  item_slot: cc.Texture2D = null;
  @property(cc.SpriteFrame)
  item: cc.SpriteFrame = null;
  changeSprite() {
    // var spriteFrame = this.item;
    // var texture = this.item_slot;
    // spriteFrame.setTexture(texture);
    // var self = this;
    // var url = 'assets/textures/itemBigPartner';
    // cc.resources.load(url, cc.SpriteFrame, null, function (err, spriteFrame) {
    //   var node = new cc.Node('New Sprite');
    //   var sprite = node.addComponent(cc.Sprite);
    //   this.sprite.spriteFrame = spriteFrame;
    //   node.parent = self.node;
    // });
    this.getComponent(cc.Sprite).spriteFrame = this.item;
  }

  onClickUp() {
    // let action: any = cc.follow(
    //   this.player,
    //   cc.rect(this.player.x, this.player.y, 60, 60),
    // );
    // this.node.runAction(action);
    // console.log('vi tri X player la ' + this.player.x);
    // console.log('vi tri Y player la ' + this.player.y);
    // let action: any = cc.moveBy(0, cc.v2(0, this.player.y));
    // this.node.runAction(action);
    // console.log('Toa do X cua player la : ' + this.player.x);
    // console.log('Toa do Y cua Player la : ' + this.player.y);
    // console.log('Toa do X cua duoi la :' + this.node.x);
    // console.log('Toa do Y cua duoi la :' + this.node.y);
  }

  onClickDown() {
    //     let action: any = cc.moveBy(0, cc.v2(0, -this.player.y));
    //     this.node.runAction(action);
  }
  // onLoad () {}

  start() {}

  // update (dt) {}

  // onClickChange() {
  //   console.log('Click de thay anh');
  //   var image: any = cc.url.raw('textures/itemBigPartner.PNG');
  //   this.node.getComponent(cc.Sprite).spriteFrame.setTexture(image);
  // }
}
