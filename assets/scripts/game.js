// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    // this property quotes preFab resource of star
    starPrefab: {
      default: null,
      type: cc.Prefab,
    },
    // the random scale of disappearing time of star
    minStarDuration: 0,
    maxStarDuration: 0,
    // ground node for confirming the height of star
    ground: {
      default: null,
      type: cc.Node,
    },
    // playernode for obtaining jump height of character and controlling the movement
    player: {
      default: null,
      type: cc.Node,
    },
    scoreDisplay: {
      default: null,
      type: cc.Label,
    },
    scoreAudio: {
      default: null,
      type: cc.AudioClip,
    },
  },

  spawnNewStar: function () {
    newStar.getComponent("Star").game = this;
  },

  onLoad: function () {
    // obtain anchor point of grounf level
    this.groundY = this.ground.y + this.ground.height / 2;
    this.timer=0;
    this.starDuration=0;
    this.spawnNewStar();
    this.score = 0;
  },

  spawnNewStar: function () {
    // generate a new node in the scene with a preset template
    var newStar = cc.instantiate(this.starPrefab);
    // put the newly added node under the Canvas node
    this.node.addChild(newStar);
    // set upa random position for the star
    newStar.setPosition(this.getNewstarPosition());
    newStar.getComponent('Star').game=this;
    this.starDuration = this.minStarDuration + Math.random()*(this.maxStarDuration - this.minStarDuration);
    this.timer=0;
  },

  getNewStarPosition: function () {
    var randX = 0;
    // According to the position of the ground level and the main character's jump height, randomly
    var randY =
      this.groundY +
      Math.random() * this.player.getComponent("Player").jumpHeight +
      50;
    // according to the width of the screen, randomly obtain an anchor point of star on the x axis
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    //  return to the anchor point of the star
    return cc.v2(randX, randY);
  },
  start() {},

  gainScore: function () {
    this.score += 1;
    this.scoreDisplay.string = "Score: " + this.score;
    cc.AudioEngine.playEffect(this.scoreAudio,false);
  },

  gameOver: function () {
    this.player.stopAllActions();
    cc.director.loadScene('game');
  }
  // update (dt) {},
});
 