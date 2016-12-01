(function(window) {

    if (!window) {
        throw new Error("cannot load common.js");
        return false;
    }
    /**
     * Global Varible 
     */
    var G = {};
    G.__proto__ = null;

    /**
     * _isElem 检测是否为Element元素(nodeType为1)
     *
     * @param {Element} elem  需要检测的元素
     * 
     * #return {Boolean}
     */
    G.isElem = function(elem) {
        return (elem && elem.nodeType === 1);
    }

    /**
     * toggleClass 为某个元素添加/删除某个类名
     *
     * @param {Element} elem        需要设置的元素
     * @param {String}  targetClass 需要设置的类名
     */

    G.toggleClass = function(elem, targetClass) {
        //
        if (!G.isElem(elem)) {
            throw new Error("param elem is not Element [G.toggleClass Function]")
        };
        //  
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
    };

    /**
     * removeClass 为某个元素删除某个类名
     *
     * @param {Element} elem        需要设置的元素
     * @param {String}  targetClass 需要设置的类名
     */

    G.removeClass = function(elem, targetClass) {
        //
        if (!G.isElem(elem)) {
            throw new Error("param elem is not Element [G.removeClass Function]");
        };
        //
        var classes_arr = elem.className.split(" ");
        var index = classes_arr.indexOf(targetClass);
        if (index !== -1) {
            classes_arr.splice(index, 1);
        }
        elem.className = classes_arr.join(" ");
    };

    /**
     * addClass 为某个元素删除某个类名
     *
     * @param {Element} elem        需要设置的元素
     * @param {String}  targetClass 需要设置的类名
     */

    G.addClass = function(elem, targetClass) {
        //
        if (!G.isElem(elem)) {
            throw new Error("param elem is not Element [G.addClass Function]");
        };
        //
        var classes_arr = elem.className.split(" ");
        var index = classes_arr.indexOf(targetClass);
        if (index === -1) {
            classes_arr.push(targetClass);
        }
        elem.className = classes_arr.join(" ");
    };

    /**
     * load G to Window
     */
    window.G = G;

})(window)
