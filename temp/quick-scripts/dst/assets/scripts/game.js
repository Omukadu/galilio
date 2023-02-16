
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83438nmiplCoopAAnFmRZKl', 'game');
// scripts/game.js

"use strict";

var _cc$Class;

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {
    // this property quotes preFab resource of star
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // the random scale of disappearing time of star
    minStarDuration: 0,
    maxStarDuration: 0,
    // ground node for confirming the height of star
    ground: {
      "default": null,
      type: cc.Node
    },
    // playernode for obtaining jump height of character and controlling the movement
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  spawnNewStar: function spawnNewStar() {
    newStar.getComponent("Star").game = this;
  },
  onLoad: function onLoad() {
    // obtain anchor point of grounf level
    this.groundY = this.ground.y + this.ground.height / 2;
    this.timer = 0;
    this.starDuration = 0;
    this.spawnNewStar();
    this.score = 0;
  }
}, _cc$Class["spawnNewStar"] = function spawnNewStar() {
  // generate a new node in the scene with a preset template
  var newStar = cc.instantiate(this.starPrefab); // put the newly added node under the Canvas node

  this.node.addChild(newStar); // set upa random position for the star

  newStar.setPosition(this.getNewstarPosition());
  newStar.getComponent('Star').game = this;
  this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
  this.timer = 0;
}, _cc$Class.getNewStarPosition = function getNewStarPosition() {
  var randX = 0; // According to the position of the ground level and the main character's jump height, randomly

  var randY = this.groundY + Math.random() * this.player.getComponent("Player").jumpHeight + 50; // according to the width of the screen, randomly obtain an anchor point of star on the x axis

  var maxX = this.node.width / 2;
  randX = (Math.random() - 0.5) * 2 * maxX; //  return to the anchor point of the star

  return cc.v2(randX, randY);
}, _cc$Class.start = function start() {}, _cc$Class.gainScore = function gainScore() {
  this.score += 1;
  this.scoreDisplay.string = "Score: " + this.score;
  cc.AudioEngine.playEffect(this.scoreAudio, false);
}, _cc$Class.gameOver = function gameOver() {
  this.player.stopAllActions();
  cc.director.loadScene('game');
}, _cc$Class));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWluU3RhckR1cmF0aW9uIiwibWF4U3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJnZXRDb21wb25lbnQiLCJnYW1lIiwib25Mb2FkIiwiZ3JvdW5kWSIsInkiLCJoZWlnaHQiLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsInNjb3JlIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld3N0YXJQb3NpdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwic3RhcnQiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJBdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFIO0FBQ0UsYUFBU0QsRUFBRSxDQUFDRSxTQURkO0FBR0VDLEVBQUFBLFVBQVUsRUFBRTtBQUNWO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FGRjtBQU1WO0FBQ0FDLElBQUFBLGVBQWUsRUFBRSxDQVBQO0FBUVZDLElBQUFBLGVBQWUsRUFBRSxDQVJQO0FBU1Y7QUFDQUMsSUFB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LENBQXNCLE1BQXRCO0FBQ0QsQ0FqRkgiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLy8gdGhpcyBwcm9wZXJ0eSBxdW90ZXMgcHJlRmFiIHJlc291cmNlIG9mIHN0YXJcclxuICAgIHN0YXJQcmVmYWI6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgfSxcclxuICAgIC8vIHRoZSByYW5kb20gc2NhbGUgb2YgZGlzYXBwZWFyaW5nIHRpbWUgb2Ygc3RhclxyXG4gICAgbWluU3RhckR1cmF0aW9uOiAwLFxyXG4gICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgLy8gZ3JvdW5kIG5vZGUgZm9yIGNvbmZpcm1pbmcgdGhlIGhlaWdodCBvZiBzdGFyXHJcbiAgICBncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICAvLyBwbGF5ZXJub2RlIGZvciBvYnRhaW5pbmcganVtcCBoZWlnaHQgb2YgY2hhcmFjdGVyIGFuZCBjb250cm9sbGluZyB0aGUgbW92ZW1lbnRcclxuICAgIHBsYXllcjoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBzY29yZUF1ZGlvOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXdTdGFyLmdldENvbXBvbmVudChcIlN0YXJcIikuZ2FtZSA9IHRoaXM7XHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBvYnRhaW4gYW5jaG9yIHBvaW50IG9mIGdyb3VuZiBsZXZlbFxyXG4gICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDI7XHJcbiAgICB0aGlzLnRpbWVyPTA7XHJcbiAgICB0aGlzLnN0YXJEdXJhdGlvbj0wO1xyXG4gICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gIH0sXHJcblxyXG4gIHNwYXduTmV3U3RhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gZ2VuZXJhdGUgYSBuZXcgbm9kZSBpbiB0aGUgc2NlbmUgd2l0aCBhIHByZXNldCB0ZW1wbGF0ZVxyXG4gICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgLy8gcHV0IHRoZSBuZXdseSBhZGRlZCBub2RlIHVuZGVyIHRoZSBDYW52YXMgbm9kZVxyXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgLy8gc2V0IHVwYSByYW5kb20gcG9zaXRpb24gZm9yIHRoZSBzdGFyXHJcbiAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3c3RhclBvc2l0aW9uKCkpO1xyXG4gICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lPXRoaXM7XHJcbiAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICB0aGlzLnRpbWVyPTA7XHJcbiAgfSxcclxuXHJcbiAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgZ3JvdW5kIGxldmVsIGFuZCB0aGUgbWFpbiBjaGFyYWN0ZXIncyBqdW1wIGhlaWdodCwgcmFuZG9tbHlcclxuICAgIHZhciByYW5kWSA9XHJcbiAgICAgIHRoaXMuZ3JvdW5kWSArXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuanVtcEhlaWdodCArXHJcbiAgICAgIDUwO1xyXG4gICAgLy8gYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuLCByYW5kb21seSBvYnRhaW4gYW4gYW5jaG9yIHBvaW50IG9mIHN0YXIgb24gdGhlIHggYXhpc1xyXG4gICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgIC8vICByZXR1cm4gdG8gdGhlIGFuY2hvciBwb2ludCBvZiB0aGUgc3RhclxyXG4gICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHt9LFxyXG5cclxuICBnYWluU2NvcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZTtcclxuICAgIGNjLkF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLGZhbHNlKTtcclxuICB9LFxyXG5cclxuICBnYW1lT3ZlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gIH1cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiAiXX0=