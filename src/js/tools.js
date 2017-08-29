/**
 * BEGIN 编写字数限制插件
 * Author:PengLunJian
 * Date:2017-08-16
 * @constructor 构造函数
 */
function LimitFontSize() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.limitNum = arguments['limitNum'] ? arguments['limitNum'] : 100;
    this.limitSth = arguments['limitSth'] ? arguments['limitSth'] : false;
    this.limitBtn = arguments['limitBtn'] ? arguments['limitBtn'] : '.limit-btn';
    this.limitBox = arguments['limitBox'] ? arguments['limitBox'] : '.limit-box';

    this.init().hide();
}
/**
 * BEGIN 初始化字数限制插件方法
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {LimitFontSize} 返回当前对象实现连缀调用
 */
LimitFontSize.prototype.init = function () {
    var _this = this;
    $(this.limitBtn).each(function () {
        this.limitSth = _this.limitSth;
        this.limitBox = $(this).prev(_this.limitBox);
        this.limitTxt = this.limitBox.text().trim();
        this.limitLen = this.limitTxt.length;
        if (this.limitLen <= _this.limitNum) $(this).remove();
        else this.limitBox.text(this.limitTxt.substring(0, _this.limitNum) + "...");
    });
    this.limitRun();
    return this;
}
/**
 * BEGIN 编写字数限制插件
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {LimitFontSize}  返回当前对象实现连缀调用
 */
LimitFontSize.prototype.limitRun = function () {
    var _this = this;
    $(document).on("click", this.limitBtn, function () {
        if (this.limitSth) {
            this.limitSth = false;
            $(this).html("阅读更多");
            this.limitBox.text(this.limitTxt.substring(0, _this.limitNum) + "...");
        } else {
            this.limitSth = true;
            $(this).html("收起更多");
            this.limitBox.text(this.limitTxt);
        }
    });
    return this;
}
/**
 * BEGIN 编写计时器插件
 * Author:PengLunJian
 * Date:2017-08-16
 * @constructor 计时器构造函数
 */
function TimerComponent() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.timer = arguments['timer'] ? arguments['timer'] : null;
    this.element = arguments['element'] ? arguments['element'] : "";
    this.initTime = arguments['initTime'] ? arguments['initTime'] : 60;
    this.flagTime = arguments['initTime'] ? arguments['initTime'] : 60;
    this.complete = arguments['complete'] ? arguments['complete'] : null;

    this.init();
}
/**
 * BEGIN 计时器初始化方法
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {TimerComponent}
 */
TimerComponent.prototype.init = function () {
    this.startTimer();
    return this;
}
/**
 * BEGIN 启动计时器
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {TimerComponent}
 */
TimerComponent.prototype.startTimer = function () {
    var _this = this;
    $(_this.element).addClass("disabled");
    $(_this.element).attr("disabled", "disabled");
    _this.timer = setTimeout(function () {
        _this.initTime--;
        $(_this.element).html(_this.initTime + " 秒");
        _this.startTimer();
        if (_this.initTime <= 0) _this.stopTimer();
    }, 1000);
    return this;
}
/**
 * BEGIN 关闭计时器
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {TimerComponent}
 */
TimerComponent.prototype.stopTimer = function () {
    clearInterval(this.timer);
    this.initTime = this.flagTime;
    $(this.element).html("重新获取");
    $(this.element).removeClass("disabled");
    $(this.element).removeAttr("disabled");
    if ('function' == typeof this.complete) this.complete();
    return this;
}
/**
 * BEGIN 编写设置字体大小插件
 * Author:PengLunJian
 * Date:2017-08-16
 * @constructor 构造函数
 */
function HtmlFontSize() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.element = arguments['element'] ? arguments['element'] : 'html';
    this.init();
}
/**
 * BEGIN 初始化字体大小
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {HtmlFontSize} 返回当前对象实现连缀调用
 */
HtmlFontSize.prototype.init = function () {
    this.setFontSize();
    return this;
}
/**
 * BEGIN 设置字体大小方法
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {HtmlFontSize} 返回当前对象实现连缀调用
 */
HtmlFontSize.prototype.setFontSize = function () {
    var _this = this;
    var fontSize = $(window).width() / 3.75 + "px";
    $(this.element).css("fontSize", fontSize);

    $(window).resize(function () {
        fontSize = $(window).width() / 3.75 + "px";
        $(_this.element).css("fontSize", fontSize);
    });
    document.body.addEventListener('touchstart', function () {
    });
    return this;
}
/**
 * BEGIN 编写自定义延时加载插件
 * Author:PengLunJian
 * Date:2017-08-16
 * @constructor 构造函数
 */
function Lazyload() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.lazyCount = arguments['lazyCount'] ? arguments['lazyCount'] : 5;
    this.lazyTimer = arguments['lazyTimer'] ? arguments['lazyTimer'] : null;
    this.lazyLabel = arguments['lazyLabel'] ? arguments['lazyLabel'] : 'img[data-loaded="false"]';
    this.init();
}
/**
 * BEGIN 初始化延时加载方法
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {Lazyload} 返回当前对象实现连缀调用
 */
Lazyload.prototype.init = function () {
    this.lazyload();
    return this;
}
/**
 * BEGIN 编写图片加载方法
 * Author:PengLunJian
 * Date:2017-08-16
 * @returns {Lazyload} 返回当前对象实现连缀调用
 */
Lazyload.prototype.lazyload = function () {
    var _this = this;
    this.lazyTimer = setInterval(function () {
        $(_this.lazyLabel).each(function () {
            var _that = this;
            this.iWidth = $(window).outerWidth();
            this.iHeight = $(window).outerHeight();
            this.dataLoaded = "false" == $(this).attr("data-loaded");
            this.iTop = $(this).offset().top - $(window).scrollTop();
            this.iLeft = $(this).offset().left - $(window).scrollLeft();
            this.offsetYIN = (this.iTop >= 0 && this.iTop <= this.iHeight);
            this.offsetXIN = (this.iLeft >= 0 && this.iLeft <= this.iWidth);
            if (this.offsetXIN && this.offsetYIN && this.dataLoaded) {
                this.tempImgObj = new Image();
                this.tempImgObj.src = $(this).attr("data-original");
                $(this.tempImgObj).on("load", function () {
                    $(_that).attr("data-loaded", "true");
                    $(_that).css("opacity", 0);
                    $(_that).attr("src", this.src);
                    $(_that).animate({"opacity": 1}, 300);
                    _that.tempImgObj = null;
                });
            }
        });
    }, 100);
    return this;
}
/**
 * BEGIN 编写新闻滚动插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @constructor 构造函数
 */
function NewsComponent() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.rate = arguments['rate'] ? arguments['rate'] : 3000;
    this.timer = arguments['timer'] ? arguments['timer'] : null;
    this.element = arguments['element'] ? arguments['element'] : '.news-block';

    this.init();
}
/**
 * BEGIN 初始化新闻滚动插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @returns {NewsComponent} 返回当前对象实现连缀调用
 */
NewsComponent.prototype.init = function () {
    this.startMove();
    return this;
}
/**
 * BEGIN 设置新闻插件位移
 * Author:PengLunJian
 * Date:2017-08-18
 * @returns {NewsComponent} 返回当前对象实现连缀调用
 */
NewsComponent.setTranslateY = function () {
    return this;
}
/**
 * BEGIN 开始新闻插件动画
 * Author:PengLunJian
 * Date:2017-08-18
 * @returns {NewsComponent} 返回当前对象实现连缀调用
 */
NewsComponent.prototype.startMove = function () {
    var _this = this;
    _this.value = 0;
    _this.html = $(this.element).html();
    _this.length = 2 * $(this.element).children().length;
    $(this.element).html(_this.html + _this.html);
    this.timer = setInterval(function () {
        _this.value = Math.round(10 * (_this.value + 0.4)) / 10;
        _this.style = 'transform:translateY(' + (-_this.value) + 'rem);';
        $(_this.element).attr('style', _this.style);
        if (_this.value >= 0.4 * _this.length / 2) {
            setTimeout(function () {
                _this.value = 0;
                _this.style = 'transform:translateY(' + (-_this.value) + 'rem);transition:none;';
                $(_this.element).attr("style", _this.style);
            }, 400);
        }
    }, _this.rate);
    return this;
}
/**
 *
 * @constructor
 */
function ModalComponent() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.element = arguments['element'] ? arguments['element'] : '.modal';
    this.modalBg = arguments['modalBg'] ? arguments['modalBg'] : '.modal-bg';
    this.btnClose = arguments['btnClose'] ? arguments['btnClose'] : '.btn.close';

    this.init();
}
/**
 *
 * @returns {ModalComponent}
 */
ModalComponent.prototype.init = function () {
    this.openModal();
    this.closeModal();
    return this;
}
/**
 *
 * @returns {ModalComponent}
 */
ModalComponent.prototype.openModal = function () {
    var _this = this;
    var TEMP_SELECTOR = '[data-target="modal"]';
    $(document).on('click', TEMP_SELECTOR, function () {
        var TEMP_INDEX = parseInt($(this).attr('data-toggle'));
        $(_this.element).eq(TEMP_INDEX).removeClass('hide');
    });
    return this;
}
/**
 *
 * @returns {ModalComponent}
 */
ModalComponent.prototype.closeModal = function () {
    var TEMP_SELECTOR = this.btnClose + ',' + this.modalBg;
    $(document).on('click', TEMP_SELECTOR, function () {
        $(this).parents('.modal').addClass('hide');
    });
    return this;
}