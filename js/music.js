(function(G) {

    var figure_list = document.querySelectorAll("figure[role='album']");
    if (!figure_list)
        return;
    //
    var cur_playing_figure = null;
    var ele_bgm_audio = document.querySelector("audio[role='bgmmusic']");
    //
    for (var i = 0, len = figure_list.length; i < len; ++i) {
        //注册播放/暂停相关事件
        var ele_i = figure_list[i].querySelector("section > i");
        if (ele_i) {
            ele_i.onclick = function() {
            	ele_bgm_audio.pause();
                //this.parentNode.parentNode => figure
                //this.parentnode => section
                var ele_audio = this.parentNode.querySelector("audio");
                var ele_img = this.parentNode.querySelector("img");
                var toggle_img = ele_img.getAttribute("toggle");
                var toggle_i = this.getAttribute("toggle");
                //
                G.toggleClass(ele_img, toggle_img)
                G.toggleClass(this, toggle_i);
                //切换歌曲
                if (cur_playing_figure !== this.parentNode.parentNode) {
                    RemovePlayingStyle(cur_playing_figure);
                }
                cur_playing_figure = this.parentNode.parentNode;
                //切换至播放
                if (ele_audio.paused) {
                    ele_audio.play();
                    G.addClass(this.parentNode.parentNode, 'playing');
                }
                //切换至暂停 
                else {
                    ele_audio.pause();
                }
            }
        }
        //注册播放结束事件
        var ele_audio = figure_list[i].querySelector("section > audio");
        if (ele_audio) {
            ele_audio.onended = function() {
                //删除播放状态图标
                RemovePlayingStyle(this.parentNode.parentNode);
            }
        }
    }

    setMusicIconRotateY();

    //
    function setMusicIconRotateY() {
        var ele_music_img = document.querySelector("section[role='subheader'] > div[role='title'] > img");
        if (!G.isElem(ele_music_img)) {
            throw new Error("cannot find music icon for rotateY");
            return false;
        }
        //
        var keyframes = [{
            transform: "rotateY(0deg) scale(1)"
        }, {
            transform: "rotateY(360deg) scale(1.2)"
        }, {
            transform: "rotateY(720deg) scale(1.2)"
        }, {
            transform: "rotateY(1080deg) scale(1)"
        }];
        var timing = {
            duration: 1200,
            delay: 0,
            iterations: 1,
            easing: "ease-out",
            fill: "forwards"
        }
        var player = ele_music_img.animate(keyframes, timing);
        ele_music_img.onmouseover = function() {
            if (player.playState !== 'running') {
                player.play();
            }
        };

    }

    //删除播放状态样式
    function RemovePlayingStyle(ele_figure) {
        if (!ele_figure) return;
        //
        var ele_img = ele_figure.querySelector("section > img");
        var toggle_img = ele_img.getAttribute("toggle");
        var ele_i = ele_figure.querySelector("section > i")
        var toggle_i = ele_i.getAttribute("toggle");
        //
        G.removeClass(ele_img, toggle_img);
        G.removeClass(ele_i, toggle_i);
        G.removeClass(ele_figure, 'playing');
        //
        var ele_audio = ele_figure.querySelector("audio");
        if (ele_audio && !ele_audio.paused) {
            ele_audio.pause();
        }
    }


})(window.G);
