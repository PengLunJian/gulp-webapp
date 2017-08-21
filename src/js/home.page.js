/**
 * BEGIN 编写首页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @constructor 构造函数
 */
function HomePage() {
    var arguments = arguments.length != 0 ? arguments[0] : arguments;
    this.banner = arguments['banner'] ? arguments['banner'] : '.swiper-container';
    this.init();
}
/**
 * BEGIN 初始化首页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @returns {HomePage} 返回当前对象实现连缀调用
 */
HomePage.prototype.init = function () {
    /**
     * BEGIN 实例化轮播图插件
     * Author:PengLunJian
     * Date:2017-08-18
     */
    var swiper = new Swiper(this.banner, {
        autoplay: 2000,
        loop: true,
        initialSlide: 0,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
    });
    /**
     * BEGIN 实例化延时加载插件
     * Author:PengLunJian
     * Date:2017-08-18
     * @type {Lazyload}
     */
    var lazy = new Lazyload();
    /**
     * BEGIN 实例化新闻插件
     * Author:PengLunJian
     * Date:2017-08-18
     * @type {NewsComponent}
     */
    var news = new NewsComponent();
    return this;
}
/**
 * BEGIN 实例化首页插件
 * Author:PengLunJian
 * Date:2017-08-18
 * @type {HomePage}
 */
var homePage = new HomePage();


