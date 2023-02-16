
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