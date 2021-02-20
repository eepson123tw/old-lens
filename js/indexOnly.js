;
(function() {


    //index.html 切換動畫
    // var myAnimation = new hoverEffect({
    // parent: document.querySelector('div .hero'),
    // intensity: 0.1,
    // easing:'Expo.easeOut',
    // image1: 'img/homepageimg/sakurabg.jpg',
    // image2: 'img/homepageimg/hero1200px2.jpg',
    // displacementImage: 'img/homepageimg/nail.jpg',
    // });
    // 表單效果

    const a = $(`header>a`)


    a.click(function() {
        $(`#menu`).toggleClass(`hide`);
    })



    //index.html 更動視窗大小事件

    window.onresize = function() {

        let sidewidth = document.documentElement.clientWidth;

        let canvas = document.querySelector('canvas');

        if (canvas) {
            if (sidewidth < 768) {

                canvas.style.opacity = 0;
            } else {
                canvas.style.opacity = 1;
            }
        }


    };


    // 相機視窗變色事件
    let main = document.getElementsByTagName("main")[0];
    let red = document.getElementById("btn_red");
    let green = document.getElementById("btn_green");
    let white = document.getElementById("btn_white");

    red.addEventListener("click", function() {
        main.classList.add("red_on");
        setTimeout(function() {
            main.classList.remove("red_on");
        }, 5000);

    });
    green.addEventListener("click", function() {
        main.classList.add("green_on");
        setTimeout(function() {
            main.classList.remove("green_on");
        }, 5000);
    });
    white.addEventListener("click", function() {
        main.classList.add("white_on");
        setTimeout(function() {
            main.classList.remove("white_on");
        }, 5000);
    });




    // 更換背景圖//內容

    const choose = $(`#choose`);
    const li = choose.find(`li`);

    const linum = $(`li`).data(`num`);
    const img = $(`main>img`);
    const p = $(`#textchange`);
    li.click(function() {
        let num = this;
        let numval = $(num).data(`num`);

        if (numval == 1) {
            p.text(`25mm,--短焦段--背景虛化能力，會讓人像十分清楚,且背景模糊的效果,相當推薦`);
            img.attr('Src', `img/homepageimg/choosef_bg1.jpg`);
        } else if (numval == 2) {
            p.text(`50mm,--中焦段--焦段拉長後,會使畫面變得更廣。`);
            img.attr('Src', `img/homepageimg/choosef_bg2.jpg`);
        } else if (numval == 3) {
            p.text(`80mm,已近乎--長焦段--拉近的壓縮感,相當的清晰。`);
            img.attr('Src', `img/homepageimg/choosef_bg3.jpg`);
        } else if (numval == 4) {
            p.text(`105mm,--長焦段--壓縮感,相當的強烈,畫面平面化,像張白紙一班。`);
            img.attr('Src', `img/homepageimg/choosef_bg4.jpg`);
        } else if (numval == 5) {
            p.text(`微距,善用於拍花草昆蟲,因背景會全部虛化,是我們最推薦的。`);
            img.attr('Src', `img/homepageimg/choosef_bg5.jpg`);
        };

    })


    setInterval(function() {
        p.text(`每顆鏡頭上面標示的焦段皆不盡相同，而標示不同的焦段，代表什麼意思呢? 代表你可以用這顆鏡頭 “拍的多遠、拍的多廣” 的意思。接下來來體驗看看，不同的焦段拍出的不同效果吧。`);
        img.attr('Src', `img/homepageimg/choosef_bg1.jpg`);
    }, 10000);



    // 通知欄位
    function clicked() {
        var x = document.getElementById("name").value;
        var y = document.getElementById("comannd-text").value;
        if (y == 0) {
            alert("請幫忙留下資料喔!")
        } else {
            alert("您好!!" + x + " 先生/小姐,您的訊息已送出!");
        }
    }



    //若螢幕超出則取消滾動事件



    //滾動事件
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#traget01'
    }).setClassToggle('.japan_target', 'active').on('enter', function() {
        $(`.jappan-style`).fadeOut(1500).fadeIn(1000);

    }).setPin("##traget02").addTo(controller)


    new ScrollMagic.Scene({
        triggerElement: '#traget02'
    }).setClassToggle('.west_target', 'active').on('enter', function() {
        $(`#west_style`).fadeOut(1500).fadeIn(1000);
    }).setPin("##traget03").addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '#traget03'
    }).setClassToggle('.small_target', 'active').on('enter', function() {
        $(`#small-1`).hide().fadeIn(1000);
        $(`#small-2`).hide().fadeIn(2000);
        $(`#small-3`).hide().fadeIn(2500);
        $(`#small-4`).hide().fadeIn(3000);
        $(`#small-5`).hide().fadeIn(3500);
    }).setPin("##traget04").addTo(controller)
    new ScrollMagic.Scene({
        triggerElement: '#traget04'
    }).setClassToggle('.intro_target', 'active').addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '#traget05'
    }).setClassToggle('.company_target', 'active').addTo(controller)


    new ScrollMagic.Scene({
        triggerElement: '#traget06'
    }).setClassToggle('.command_target', 'active').addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '#traget07'
    }).setClassToggle('.about_target', 'active').addTo(controller)



    //menu變形

    $(`header > a`).click(function() {
        let b = $(this).find(`b`);
        b.hide().delay(500).each(function(i) {
            $(this).delay(i * 500).fadeIn(300);
        });
    });

    // a連結跳轉//callback練習

    $(`footer>ul>li>button>a`).click(function() {
        openmenu();
    });
    let openmenu = function() {
        let a = $(`footer>ul>li>button>a`);
        window.open(`/html/contact.us.html`, `來聯絡我們吧`, config = `height=600,width=1200`);
        //' 新視窗的網址 ', '新視窗的名稱', config='height=高度,width=寬度'
    }



    //animate彩蛋 
    $(`.japan-text`).click(function() {
        $(this).animate({
            width: "70%",
            opacity: 0.9,
        }, 1000);
    });


    //微距增加title
    $(`.west-style img`).attr(`title`, `Contax Carl Zeiss T Planar 85mm F1.4 AEG`);
    $(`.small-style li`).find('a').attr(`title`, `HELIOS 44-2 58mm F2`);
    $(`.small-style-text`).find('a').attr(`title`, ``);

    //audio control


    window.addEventListener('keydown', audiomove);
    window.addEventListener('scroll', play);
    const audio = $(`audio`);

    function audiomove(e) {


        if (audio) {

            if (e.keyCode == 13) {
                audio[0].play();
            } else if (e.keyCode == 27 || e.keyCode == 32) {
                audio[0].pause();
            }
        }


    };

    function play() {
        audio[0].play();
    };


})()