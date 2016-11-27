/**
 * init
 *
 */
(function() {
    /**
     * 设置menuButton Open/Close样式类
     * 类名由attr = toggle获取
     */
    var menuButton = document.querySelector("div.header-nav-button");
    menuButton.onclick = function() {
        //
        var opened_class = menuButton.getAttribute("toggle");
        var elem_menu = document.querySelector("ul.header-nav-menu");
        var elem_menu_opened_class = elem_menu.getAttribute("toggle");
        toggleClass(menuButton, opened_class)(elem_menu, elem_menu_opened_class);
    };

    /**
     * isEle 查看是否为element元素
     *
     * @param {Element} ele 需要查看的元素
     * #return {Boolean} 
     */
    function isEle(ele) {
        if (ele && ele.nodeType === 1)
            return true;
        return false;
    };

    /**
     * toggleClass 为某个元素添加/删除某个类名
     *
     * @param {Element} ele         需要设置的元素
     * @param {String}  targetClass 需要设置的类名
     */

    function toggleClass(elem, targetClass) {
        if (!elem)
            return false;
        var classes_arr = elem.className.split(" ");
        var index = classes_arr.indexOf(targetClass);
        if (index === -1) {
            classes_arr.push(targetClass);
        }
        //
        else {
            classes_arr.splice(index, 1);
        }
        elem.className = classes_arr.join(" ");
        //return functional-chain
        return toggleClass;
    };

    /**
     * createContentElement 创建figure内容
     *
     * @param {Object} figureOpt 需要添加的属性集合: class
     * @param {Object} imgOpt    需要添加的属性集合: src / alt
     * #return {Element}
     */

    function createContentElement(figureOpt, imgOpt) {
        //
        function setOptAttribute(ele, opt) {
            if (!isEle(ele) || typeof opt !== 'object') return;
            //
            for (var key in opt) {
                if (typeof opt[key] === 'function') {
                    ele[key] = opt[key];
                    continue;
                }
                if (typeof opt[key] === 'string') {
                    ele.setAttribute(key, opt[key]);
                }
            }
        };

        //figure
        var ele_figure = document.createElement("figure");
        setOptAttribute(ele_figure, figureOpt);
        //img
        var ele_img = document.createElement("img");
        setOptAttribute(ele_img, imgOpt);
        //package
        var ele_li = document.createElement("li");
        ele_figure.appendChild(ele_img);
        ele_li.appendChild(ele_figure);
        return ele_li;
    };

    var ele_row1 = document.querySelector("main[role='content'] > ul.row1");
    var ele_row2 = document.querySelector("main[role='content'] > ul.row2");

    var figureOpt = {
        "class": "poster_container",
    };
    var imgOpt = {
        "src": "./css/_images/movie/inside_llewyn_davis.jpg",
        "alt": "picture",
        "onload": function() {
            var ele_container = this.parentNode.parentNode;
            //
            if (ele_row1.clientHeight > ele_row2.clientHeight) {
                ele_row2.appendChild(ele_container);
            }
            // 
            else {
                ele_row1.appendChild(ele_container);
            }
        }
    };
    createContentElement(figureOpt, imgOpt);

})();
