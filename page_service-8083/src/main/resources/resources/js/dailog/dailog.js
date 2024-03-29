(function ($) {
  var Dialog = function (cfg) {
    this.config = {
      width: 180,
      height: 180,
      msg: "操作成功",
      winDom: window,
      delay: 0,
      bg: true,
      bgWhite: false,
      clickDomCancel: false,
      callback: null,
      type: "success"
    };
    $.extend(this.config, cfg);
    if (Dialog.prototype.modelBox) {
      return
    }
    this.render(this.config.type);
    return this
  };
  window.Dialog = Dialog;
  Dialog.prototype.modelBox = null;
  Dialog.prototype.render = function (type) {
    this.renderUI(type);
    this.clickDom();
    this.initBox();
    Dialog.prototype.modelBox.appendTo(this.config.winDom.document.body)
  };
  Dialog.prototype.renderUI = function (type) {
    Dialog.prototype.modelBox = $("<div id='animationTipBox'></div>");
    type == "load" && this.loadRender();
    type == "success" && this.successRender();
    type == "error" && this.errorRender();
    type == "tip" && this.tipRender();
    if (this.config.bg) {
      this.config.bgWhite ? this._mask = $("<div class='mask_white'></div>") : this._mask = $("<div class='mask'></div>");
      this._mask.appendTo(this.config.winDom.document.body)
    }
    _this_ = this;
    !this.config.delay && typeof this.config.callBack === "function" && (this.config.delay = 1);
    this.config.delay && setTimeout(function () {
      _this_.close()
    }, _this_.config.delay)
  };
  Dialog.prototype.clickDom = function () {
    var _this = this;
    this.config.clickDomCancel && this._mask && this._mask.click(function () {
      _this.close()
    })
  };
  Dialog.prototype.initBox = function () {
    Dialog.prototype.modelBox.css({
      width: this.config.width + "px",
      height: this.config.height + "px",
      marginLeft: "-" + (this.config.width / 2) + "px",
      marginTop: "-" + (this.config.height / 2) + "px"
    })
  };
  Dialog.prototype.successRender = function () {
    var suc = "<div class='success'>";
    suc += " <div class='icon'>";
    suc += "<div class='line_short'></div>";
    suc += "<div class='line_long'></div>  ";
    suc += "</div>";
    suc += " <div class='dec_txt'>" + this.config.msg + "</div>";
    suc += "</div>";
    Dialog.prototype.modelBox.append(suc)
  };
  Dialog.prototype.loadRender = function () {
    var load = "<div class='load'>";
    load += "<div class='icon_box'>";
    for (var i = 1; i < 4; i++) {
      load += "<div class='cirBox" + i + "'>";
      load += "<div class='cir1'></div>";
      load += "<div class='cir2'></div>";
      load += "<div class='cir3'></div>";
      load += "<div class='cir4'></div>";
      load += "</div>"
    }
    load += "</div>";
    load += "</div>";
    load += "<div class='dec_txt'>" + this.config.msg + "</div>";
    Dialog.prototype.modelBox.append(load)
  };
  Dialog.prototype.tipRender = function () {
    var tip = "<div class='tip'>";
    tip += "     <div class='icon'>i</div>";
    tip += "     <div class='dec_txt'>" + this.config.msg + "</div>";
    tip += "</div>";
    Dialog.prototype.modelBox.append(tip)
  };
  Dialog.prototype.errorRender = function () {
    var err = "<div class='lose'>";
    err += "   <div class='icon'>";
    err += "       <div class='icon_box'>";
    err += "           <div class='line_left'></div>";
    err += "           <div class='line_right'></div>";
    err += "       </div>";
    err += "   </div>";
    err += "<div class='dec_txt'>" + this.config.msg + "</div>";
    err += "</div>";
    Dialog.prototype.modelBox.append(err)
  };
  Dialog.prototype.close = function () {
    Dialog.prototype.destroy();
    this.destroy();
    this.config.delay && typeof this.config.callBack === "function" && this.config.callBack()
  };
  Dialog.prototype.destroy = function () {
    this._mask && this._mask.remove();
    Dialog.prototype.modelBox && Dialog.prototype.modelBox.remove();
    Dialog.prototype.modelBox = null
  };
  popup = function (cfg) {
    return new Dialog(cfg)
  }
})(Zepto);