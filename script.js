$(function() {
    //背景画像のtopの値を取得
    let bg1_top = $("#bg-1").offset().top;
    let bg2_top = $("#bg-2").offset().top;
    let bg3_top = $("#bg-3").offset().top;


    //ウィンドウの高さを取得
    let win_h = $(window).height();　　

    //背景画像を動かすタイミングの位置を計算
    let start_bg1 = bg1_top - win_h;
    let start_bg2 = bg2_top - win_h;
    let start_bg3 = bg3_top - win_h;

    //スクロールした時のイベント
    $(window).scroll(function() {
        //スクロール量を取得
        let y = $(this).scrollTop();
        if (y >= start_bg1) {
            $("#bg-1").css("background-position-y", -(y - bg1_top) * 0.2 + "px");
        }
        if (y >= start_bg2) {
            $("#bg-2").css("background-position-y", -(y - bg2_top) * 0.2 + "px");
        }
        if (y >= start_bg3) {
            $("#bg-3").css("background-position-y", -(y - bg3_top) * 0.2 + "px");
        }
    });

    $(function() {
        $('a[href^="#"]').click(function() {　 //href属性が#で始まる要素を取得しクリックイベントを設定する
            let href = $(this).attr("href"); //クリックしたa要素のhrefの値を取得し変数hrefに代入
            let target = $(href == "#" || href == "" ? 'html' : href); //クリックしたaタグのhrefの値が "#"または ""の場合ページトップへ。そうでなければ取得した値のIDがある要素をスクロール先としてtargetに代入
            let position = target.offset().top; //取得した値IDがある要素のtopの位置を取得して変数positionに代入
            $('html, body').animate({ scrollTop: position }, 1000, 'swing'); //animate()メソッドを使って取得した値の要素のtopまでスクロールする
            return false;
        });
    });

    $(function() {
        $("#mobile-nav-icon").click(function() {
            $("#mobile-nav-menu").slideToggle();
        });
    });
});