// import { player } from './player';

const { property, ccclass } = cc._decorator;

@ccclass
export class Game extends cc.Component {
  @property(cc.Prefab)
  private itemPrefab: cc.Prefab = null;

  @property(cc.Integer)
  private maxStarDuration = 0;

  @property(cc.Integer)
  private minStarDuration = 0;

  @property(cc.Node)
  private groundNode: cc.Node = null;

  @property(cc.Node)
  private itemSave: cc.Node = null;

  @property(cc.Node)
  public player: cc.Node = null;

  @property(cc.Node)
  public playerTail: cc.Node = null;

  @property(cc.Label)
  private scoreLabel: cc.Label = null;

  public timer: number;

  public itemDuration: number;

  private playerScore: number = 0;

  public lstPlayer: cc.Node[] = [];

  private isOver: boolean;

  private groundY: any;

  gainScore() {
    this.playerScore += 1;
    this.scoreLabel.string = 'Score : ' + this.playerScore.toString();
  }

  protected onLoad() {
    // this.groundY = this.groundNode.y + this.groundNode.height / 2;

    this.timer = 0;
    this.itemDuration = 0;

    // this.spawnNewStar();

    this.isOver = false;

    // console.log(this.player.x);
    // console.log(this.player.y);
  }

  public spawnNewItem() {
    let newItem = cc.instantiate(this.itemPrefab);
    this.node.addChild(newItem);
    newItem.addComponent(cc.CircleCollider);
    newItem.getComponent(cc.CircleCollider).radius = 50;
    newItem.group = 'itemEnemy';
    newItem.setPosition(this.getNewItemPostion());
  }
  getNewItemPostion() {
    var maxX = this.node.width / 2;
    var maxY = this.node.height / 2;

    var randX = (Math.random() - 0.5) * 2 * maxX;
    var randY = (Math.random() - 0.5) * 2 * maxY;
    return cc.v2(randX, randY);
  }
  pushToArray() {
    this.lstPlayer.push(this.player);
    // console.log(this.lstPlayer);
    console.log('Do dai cua danh sach la :' + this.lstPlayer.length);
  }
  getPlayer() {
    for (var i = 0; i < this.lstPlayer.length; i++) {
      // this.player.addChild(this.player);
      let acttion: any = cc.follow(this.player, cc.rect(0, 0, 60, 60));

      this.lstPlayer[this.lstPlayer.length - 1].runAction(acttion);
      console.log(this.lstPlayer[this.lstPlayer.length - 1]);
    }
    // console.log(' chieu dai mang la :' + this.lstPlayer.length);
  }
  pauseGame() {
    cc.director.pause();
  }
  resumeGame() {
    cc.director.resume();
  }
  eventGame() {}

  // upgradeHeightPlayer() {}
  // listEatItem() {
  //   this.arrNode = [this.itemSave, this.itemSave, this.itemSave];
  //   console.log(this.arrNode.length);
  // }
  // pushToPlayer() {
  //   this.arrNode.push(this.itemSave);
  //   var followAction = cc.follow(this.player);
  //   this.node.addChild(this.itemSave);
  //   this.node.runAction(followAction);
  // }
  // testListArrNumber() {
  //   let arr: number[] = [1, 2, 3, 4, 5];
  //   arr.push(6, 7, 8, 9, 10);
  //   console.log(arr);
  //   var total: number = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     total = total + arr[i];
  //     if (arr[i] == 10) {
  //       console.log('true');
  //     } else {
  //       console.log('false');
  //     }
  //   }
  //   console.log(total);
  // }
}
