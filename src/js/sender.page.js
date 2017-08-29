/**
 * BEGIN 编写产品列表页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @constructor 构造函数
 */
function SenderPage() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.init();
}
/**
 * BEGIN 初始化产品列表页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @returns {HomePage} 返回当前对象实现连缀调用
 */
SenderPage.prototype.init = function () {
    /**
     * BEGIN 实例化延时加载插件
     * Author:PengLunJian
     * Date:2017-08-18
     * @type {Lazyload}
     */
    var lazy = new Lazyload();

    return this;
}
/**
 * BEGIN 实例化首页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @type {HomePage}
 */
var senderPage = new SenderPage();


