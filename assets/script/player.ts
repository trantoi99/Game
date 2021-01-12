// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // @property(cc.Node)
  // private playerTail: cc.Node = null;
  // public beginPoint: number[] = null;
  arrGo: number[] = [];
  arrEnd: number[] = [];
  // public endPoint: any[] = null;
  // @property(cc.Float)
  //     private goDuration : number = 0;

  // @property(cc.Float)
  //     private goX : number = 0;

  // @property(cc.Float)
  //     private goY : number = 0;

  // gia tốc
  // @property(cc.Float)
  //     private accel : number  = 0;

  // @property(cc.Float)
  //     private maxMoveSpeedX : number = 0;
  // @property(cc.Float)
  //     private maxMoveSpeedY : number = 0;

  // khai báo các phím di chuyển
  // @property(cc.Button)
  //     private btn_up :  cc.Button;
  // @property(cc.Button)
  //     private btn_left : cc.Button;
  // @property(cc.Button)
  //     private btn_down : cc.Button;
  // @property(cc.Button)
  //     private btn_right : cc.Button;

  // Khai báo trạng thái di chuyển của go
  // private goHeight :number = 0;
  // private goLeft : boolean = false;
  // private goRight : boolean = false;
  // private goTop : boolean = false;
  // private goDown : boolean = false;
  // private xSpeed: number = 0;
  // private ySpeed : number =0;

  // khai báo action

  // private goAction : cc.Action = null;

  // private setGoAction (){
  //     var playerGoLeft : any = cc.moveBy(this.goDuration,cc.v2(0,this.goX)).easing(cc.easeCubicActionOut());
  //     var playerGoRight : any = cc.moveBy(this.goDuration,cc.v2(0,this.goX)).easing(cc.easeCubicActionIn());
  //     var playerGoTop : any = cc.moveBy(this.goDuration,cc.v2(0,this.goY)).easing(cc.easeCubicActionOut());
  //     var playerGoDown : any = cc.moveBy(this.goDuration,cc.v2(0,-this.goY)).easing(cc.easeCubicActionIn());
  // }

  // setGoAction() {
  //     if(this.moveLeft){
  //         let playerGoLeft : any = cc.moveBy(1,cc.v2(this.node.x,-100));
  //     }
  //     else if (this.moveRight){
  //         let playerGoLeft : any = cc.moveBy(1,cc.v2(this.node.x,-100));
  //     }
  //     if(this.moveUp){
  //         let playerGoUp : any = cc.moveBy(1,cc.v2(this.node.y,100));
  //     }
  //     else if (this.moveDown){
  //         let playerGoDown : any = cc.moveBy(1,cc.v2(this.node.y,-100));
  //     }
  // }

  // // Đi bên trái
  // private moveLeft(){
  //     this.goLeft = true;
  //     this.goTop = false;
  //     this.goDown = false;
  //     this.goRight = false;

  // }
  // private moveRight(){
  //     this.goLeft = false;
  //     this.goTop = false;
  //     this.goDown = false;
  //     this.goRight = true;

  // }
  // private moveUp(){
  //     this.goLeft = false;
  //     this.goTop = true;
  //     this.goDown = false;
  //     this.goRight = false;

  // }
  // private moveDown(){
  //     this.goLeft = false;
  //     this.goTop = false;
  //     this.goDown = true;
  //     this.goRight = false;

  // }

  // private Stop(){
  //     this.goLeft = false;
  //     this.goRight = false;
  //     this.goDown = false;
  //     this.goTop = false;
  // }

  // beginPoint: Array<number> = [this.node.x, this.node.y];

  // // di chuyển các nút
  onClickUp() {
    let playerMoveUp: any = cc.moveBy(0, cc.v2(0, 100));
    // console.log("Bạn đã click nút trên");
    this.node.runAction(playerMoveUp);
    // console.log('Tọa độ X  là : ' + this.node.x);
    // console.log('Tọa độ Y là : ' + this.node.y);
    // this.arrGo.push(this.node.x, this.node.y);
    // console.log(this.arrGo);

    // let tailgoup: any = cc.moveBy(
    //   0,
    //   cc.v2(
    //     this.arrGo[this.arrGo.length - 2],
    //     this.arrGo[this.arrGo.length - 1],
    //   ),
    // );

    // let actionfollow: any = cc.follow(
    //   this.node,
    //   cc.rect(60, 60, this.node.x, this.node.y),
    // );

    // this.playerTail.runAction(actionfollow);

    // this.playerTail.runAction(tailgoup);
    // console.log(this.playerTail.x);
    // console.log(this.playerTail.y);
    // console.log(
    //   'arr X : ' +
    //     this.arrGo[this.arrGo.length - 2] +
    //     ' & ' +
    //     'tail X : ' +
    //     this.playerTail.x,
    // );
    // console.log(
    //   'arr Y : ' +
    //     this.arrGo[this.arrGo.length - 1] +
    //     ' & ' +
    //     'tail Y :' +
    //     this.playerTail.y,
    // );
  }

  onClickDown() {
    let playerMoveDown: any = cc.moveBy(0, cc.v2(0, -100));
    this.node.runAction(playerMoveDown);

    // console.log('Tọa độ X là : ' + this.node.x);
    // console.log('Tọa độ Y là : ' + this.node.y);
  }

  onClickLeft() {
    let playerMoveLeft: any = cc.moveBy(0, cc.v2(-100, 0));
    // console.log("Bạn đã click nút trái");
    this.node.runAction(playerMoveLeft);
    // console.log('Tọa độ X là : ' + this.node.x);
    // console.log('Tọa độ Y là : ' + this.node.y);
  }

  onClickRight() {
    let playerMoveRight: any = cc.moveBy(0, cc.v2(100, 0));
    this.node.runAction(playerMoveRight);
    // console.log('Tọa độ X là : ' + this.node.x);
    // console.log('Tọa độ Y là : ' + this.node.y);
  }

  private addEventListeners() {
    // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyPressed,this);
    // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    cc.find('Canvas').on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
  }

  touchStart(event: cc.Event.EventTouch) {}

  protected onLoad() {
    // this.goLeft = false;
    // this.goRight = false;
    // this.goTop = false;
    // this.goDown = false;

    // this.xSpeed = 0;
    // this.ySpeed = 0;

    //   this.node.runAction(this.setGoAction());

    this.addEventListeners();

    this.arrGo.push(this.node.x, this.node.y);
    // console.log('vi tri cua X la :' + this.node.x);
    // console.log('vi tri cua Y la :' + this.node.y);
  }

  start() {}
  // private onKeyPressed (event : cc.Event.EventKeyboard){
  //     switch((event as any).keyCode){
  //         case cc.KEY.a:
  //         case cc.KEY.left:
  //             this.moveLeft();
  //             break;
  //         case cc.KEY.w:
  //         case cc.KEY.up:
  //             this.moveUp();
  //             break;
  //         case cc.KEY.d:
  //         case cc.KEY.right:
  //             this.moveRight();
  //             break;
  //         case cc.KEY.s:
  //         case cc.KEY.down:
  //             this.moveDown();
  //             break;
  //     }
  // }

  // private onKeyUp (event : cc.Event.EventKeyboard){
  //     switch((event as any).keyCode){
  //         case cc.KEY.a:
  //         case cc.KEY.left:
  //             this.Stop();
  //             break;
  //         case cc.KEY.d:
  //         case cc.KEY.right:
  //             this.Stop();
  //             break;
  //         case cc.KEY.s:
  //         case cc.KEY.down:
  //             this.Stop();
  //             break;
  //         case cc.KEY.w:
  //         case cc.KEY.up:
  //             this.Stop();
  //             break;
  //     }

  // }
  // protected update(dt:number){
  //     //Update the speed every frame according to the current acceleration direction
  //     // update tốc độ theo hướng lăn
  //     if(this.goLeft){
  //         this.xSpeed -= this.accel * dt;
  //         this.ySpeed = 0;
  //     }
  //     else if (this.goRight) {
  //         this.xSpeed += this.accel * dt;
  //         this.ySpeed = 0;
  //     }

  //     if(this.goTop){
  //         this.ySpeed += this.accel *dt;
  //         this.xSpeed = 0 ;
  //     }
  //     else if(this.goDown){
  //         this.ySpeed -= this.accel *dt;
  //         this.xSpeed = 0;
  //     }

  //     //Limit the speed of the protagonist to the maximum
  //     // Hạn chế nhân vật ở mức tối đa
  //     if(Math.abs(this.xSpeed) > this.maxMoveSpeedX){
  //         // if speed reach limit, use max speed with current direction
  //         this.xSpeed = this.maxMoveSpeedX * dt / Math.abs(this.xSpeed);
  //     }
  //     if(Math.abs(this.ySpeed) > this.maxMoveSpeedY){
  //         // if speed reach limit, use max speed with current direction
  //         this.ySpeed = this.maxMoveSpeedY * dt / Math.abs(this.ySpeed);
  //     }

  //     //Update the position of the protagonist according to the current speed
  //     // update vị trí nhân vật theo tốc đọ hiện tại

  //     this.node.x += this.xSpeed *dt;
  //     if(this.node.x <= -this.node.parent.width/2){
  //         this.node.x = this.node.parent.width/2;
  //     }
  //     else if(this.node.x > this.node.parent.width/2){
  //         this.node.x = -this.node.parent.width/2;
  //     }

  //     this.node.y += this.ySpeed *dt;
  //     if(this.node.y <= -this.node.parent.height/2){
  //         this.node.y = this.node.parent.height/2;
  //     }
  //     else if(this.node.y > this.node.parent.height/2){
  //         this.node.y = -this.node.parent.height/2;
  //     }

  //     console.log(`vi tri cua X la : ${this.node.x} va van toc la : ${this.xSpeed}`);
  //     console.log(`Vi tri cua Y la : ${this.node.y} va van toc la : ${this.ySpeed}`);
  // }
}
