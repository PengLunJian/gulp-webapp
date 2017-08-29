/**
 * BEGIN 编写首页插件
 * Author:PengLunJian
 * Date:2017-08-24
 * @constructor 构造函数
 */
function AddressPage() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.active = arguments['active'] ? arguments['active'] : 'active';
    this.expItem = arguments['expItem'] ? arguments['expItem'] : '.exp-item';
    this.btnItem = arguments['btnItem'] ? arguments['btnItem'] : '.btn.item';
    this.compItem = arguments['compItem'] ? arguments['compItem'] : '.comp-item';
    this.init();
}
/**
 * BEGIN 初始化首页插件
 * Author:PengLunJian
 * Date:2017-08-24
 * @returns {OrderPage} 返回当前对象实现连缀调用
 */
AddressPage.prototype.init = function () {

    this.selectExpressItem();
    this.selectCompanyItem();
    this.selectBtnItem();
    /**
     * BEGIN 实例化延时加载插件
     * Author:PengLunJian
     * Date:2017-08-24
     * @type {Lazyload}
     */
    var lazy = new Lazyload();

    var modal = new ModalComponent();
}
/**
 *
 * @returns {OrderPage}
 */
AddressPage.prototype.selectExpressItem = function () {
    var _this = this;
    $(document).on('click', this.expItem, function () {
        $(_this.expItem).removeClass(_this.active);
        $(this).addClass(_this.active);
    });
    return this;
}
/**
 *
 * @returns {OrderPage}
 */
AddressPage.prototype.selectCompanyItem = function () {
    var _this = this;
    $(document).on('click', this.compItem, function () {
        $(_this.compItem).removeClass(_this.active);
        $(this).addClass(_this.active);
    });
    return this;
}
/**
 *
 * @returns {OrderPage}
 */
AddressPage.prototype.selectBtnItem = function () {
    var _this = this;
    $(document).on('click', this.btnItem, function () {
        $(_this.btnItem).removeClass(_this.active);
        $(this).addClass(_this.active);
    });
    return this;
}
/**
 * BEGIN 实例化首页插件
 * Author:PengLunJian
 * Date:2017-08-23
 * @type {ClubPage}
 */
var addressPage = new AddressPage();


