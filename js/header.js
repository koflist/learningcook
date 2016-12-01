/*
 * header.js 
 * control for the header nav button.
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
     * toggleClass 为某个元素添加/删除某个类名
     *
     * @param {Element} 需要设置的元素
     * @param {String} 需要设置的类名
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
})();
