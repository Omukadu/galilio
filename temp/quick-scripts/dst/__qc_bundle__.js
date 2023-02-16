
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/game');
require('./assets/scripts/player');
require('./assets/scripts/star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42fc8wbFCdIoIldLWFIuiGT', 'star');
// scripts/star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  },
  // onLoad () {},
  start: function start() {},
  update: function update() {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }

    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minopacity = 50;
    this.node.opacity = minopacity + Math.floor(opacityRatio * (255 - minopacity));
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJzdGFydCIsInVwZGF0ZSIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWlub3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUU7QUFERixHQUhMO0FBTVBDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQzdCLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNELEdBVk07QUFZUEssRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ3BCLFNBQUtSLElBQUwsQ0FBVVMsWUFBVjtBQUNBLFNBQUtULElBQUwsQ0FBVVUsU0FBVjtBQUVBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNELEdBakJNO0FBa0JQO0FBRUFDLEVBQUFBLEtBcEJPLG1CQW9CQyxDQUFFLENBcEJIO0FBc0JQQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDbEIsUUFBSSxLQUFLZixpQkFBTCxLQUEyQixLQUFLRCxVQUFwQyxFQUFnRDtBQUM5QyxXQUFLVyxRQUFMO0FBQ0E7QUFDRDs7QUFDRCxRQUFJTSxZQUFZLEdBQUcsSUFBSSxLQUFLZCxJQUFMLENBQVVlLEtBQVYsR0FBa0IsS0FBS2YsSUFBTCxDQUFVZ0IsWUFBbkQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLYixJQUFMLENBQVVjLE9BQVYsR0FDRUQsVUFBVSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sWUFBWSxJQUFJLE1BQU1HLFVBQVYsQ0FBdkIsQ0FEZjtBQUVELEdBL0JNLENBZ0NQOztBQWhDTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHBpY2tSYWRpdXM6IDAsXHJcbiAgfSxcclxuICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBsYXllclBvcyA9IHRoaXMuZ2FtZS5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgcmV0dXJuIGRpc3Q7XHJcbiAgfSxcclxuXHJcbiAgb25QaWNrZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZ2FtZS5zcGF3bk5ld1N0YXIoKTtcclxuICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcclxuXHJcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gIH0sXHJcbiAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICBzdGFydCgpIHt9LFxyXG5cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpIHtcclxuICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICB2YXIgbWlub3BhY2l0eSA9IDUwO1xyXG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPVxyXG4gICAgICBtaW5vcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWlub3BhY2l0eSkpO1xyXG4gIH0sXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5e2cWQlgNMx4qqdiE2cslK', 'player');
// scripts/player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // set a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  setJumpAction: function setJumpAction() {
    //jump up
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); //jump down

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    var callback = cc.callFunc(this.playJumpSound, this);
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onLoad: function onLoad() {
    // initialize jump action
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); // accelration direction switch

    this.accLeft = false;
    this.accRight = false; // characters current horizontal velocity

    this.xSpeed = 0; // initialize keyboard input listening

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwic2V0SnVtcEFjdGlvbiIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwib25Mb2FkIiwianVtcEFjdGlvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRSxDQURGO0FBRVZDLElBQUFBLFlBQVksRUFBRSxDQUZKO0FBR1ZDLElBQUFBLFlBQVksRUFBRSxDQUhKO0FBSVZDLElBQUFBLEtBQUssRUFBRSxDQUpHO0FBS1ZDLElBQUFBLFNBQVMsRUFBRTtBQUNU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QW1CaEQsRUFBRSxDQUFDMkMsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUE1QyxFQUFzRCxLQUFLbEMsU0FBM0QsRUFBc0UsSUFBdEU7QUFDQVgsSUFBQUEsRUFBRSxDQUFDeUMsV0FBSCxDQUFlTyxHQUFmLENBQW1CaEQsRUFBRSxDQUFDMkMsV0FBSCxDQUFlQyxTQUFmLENBQXlCRSxNQUE1QyxFQUFvRCxLQUFLMUIsT0FBekQsRUFBa0UsSUFBbEU7QUFDRCxHQXpFTTtBQTJFUDZCLEVBQUFBLEtBM0VPLG1CQTJFQyxDQUFFLENBM0VIO0FBNkVQQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNwQixRQUFJLEtBQUtsQyxPQUFULEVBQWtCO0FBQ2hCLFdBQUt1QixNQUFMLElBQWUsS0FBS2pDLEtBQUwsR0FBYTRDLEVBQTVCO0FBQ0QsS0FGRCxNQUVPLElBQUksS0FBS2hDLFFBQVQsRUFBbUI7QUFDeEIsV0FBS3FCLE1BQUwsSUFBZSxLQUFLakMsS0FBTCxHQUFhNEMsRUFBNUI7QUFDRDs7QUFDRCxRQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLYixNQUFkLElBQXdCLEtBQUtsQyxZQUFqQyxFQUErQztBQUM3QyxXQUFLa0MsTUFBTCxHQUFlLEtBQUtsQyxZQUFMLEdBQW9CLEtBQUtrQyxNQUExQixHQUFvQ1ksSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2IsTUFBZCxDQUFsRDtBQUNEOztBQUNELFNBQUtGLElBQUwsQ0FBVWdCLENBQVYsSUFBZSxLQUFLZCxNQUFMLEdBQWNXLEVBQTdCO0FBQ0Q7QUF2Rk0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgYWNjZWw6IDAsXHJcbiAgICBqdW1wQXVkaW86IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBvbktleURvd24oZXZlbnQpIHtcclxuICAgIC8vIHNldCBhIGZsYWcgd2hlbiBrZXkgcHJlc3NlZFxyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG4gIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgIC8vIHNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2p1bXAgdXBcclxuICAgIHZhciBqdW1wVXAgPSBjY1xyXG4gICAgICAubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCB0aGlzLmp1bXBIZWlnaHQpKVxyXG4gICAgICAuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgIC8vanVtcCBkb3duXHJcbiAgICB2YXIganVtcERvd24gPSBjY1xyXG4gICAgICAubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSlcclxuICAgICAgLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgIHZhciBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duLCBjYWxsYmFjaykpO1xyXG4gIH0sXHJcblxyXG4gIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGluaXRpYWxpemUganVtcCBhY3Rpb25cclxuICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xyXG5cclxuICAgIC8vIGFjY2VscmF0aW9uIGRpcmVjdGlvbiBzd2l0Y2hcclxuICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgLy8gY2hhcmFjdGVycyBjdXJyZW50IGhvcml6b250YWwgdmVsb2NpdHlcclxuICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIGtleWJvYXJkIGlucHV0IGxpc3RlbmluZ1xyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge30sXHJcblxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgdGhpcy54U3BlZWQgPSAodGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCkgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
