function toggleMenu(){
    var menu = document.getElementById("menu");
    menu.classList.toggle("hide");
  
};



function text1(){
  var linechange = document.getElementById("time-line-change");
  var linetextchange = document.getElementById("time-line-textchange");
  linechange.innerHTML = "LensHistory";
  linetextchange.innerHTML = "在16世紀文藝復興時期，歐洲出現了供繪畫用的「成像暗箱」,這是一切的開始。";

}
function text2(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1839";
    linetextchange.innerHTML = "1839年8月19 日法國畫家達蓋爾公布了他發明的「達蓋爾銀版攝影術」，於是世界上誕生了第一台可攜式木箱照相機。"
}
function text3(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1860";
    linetextchange.innerHTML = "物理學家馬克斯威發明了世界上第一張彩色照片。"

}
function text4(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1925";
    linetextchange.innerHTML = "德國的萊茲、羅萊、蔡司等公司研製生產出了小體積、鋁合金機身等雙鏡頭及單鏡頭反光照相機。"

}
function text5(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1935";
    linetextchange.innerHTML = "機械快門的調節範圍不斷擴大。照相機製造業開始大批量生產照相機，各國照相機製造廠紛紛仿製萊卡型和羅萊弗萊型照相機。黑白感光膠片的感光度、解析度和寬容度不斷提高；彩色感光片開始推廣，從而使攝影隊伍迅速擴大並走向專業化。"
}
function text6(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1947";
    linetextchange.innerHTML = "美國寶麗來公司（Polaroid）在市場推出世界上第一個即時成像相機Polaroid 95。"
}
function text7(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1956";
    linetextchange.innerHTML = "美國寶麗來公司（Polaroid）在市場推出世界上第一個即時成像相機Polaroid 95。"
}
function text8(){
    var linechange = document.getElementById("time-line-change");
    var linetextchange = document.getElementById("time-line-textchange");
    linechange.innerHTML = "1975~Now";
    linetextchange.innerHTML = "柯達公司發表了史上第一台數位相機。而如今大家都可以輕鬆地拍照記錄生活了。"
}
// 縮小事件
window.onresize = function(){

    let sidewidth = document.documentElement.clientWidth ;
    console.log(sidewidth)
    if(sidewidth < 500){
        const timeline = document.querySelector('.time_line_left');
        const googlemap = document.querySelector('.address_right');
        const text = document.querySelector('.address_left');
        text.style.width='100%';
        googlemap.style.display = "none";
        timeline.style.display = "none";
    }else{
        const timeline = document.querySelector('.time_line_left')
        const  googlemap = document.querySelector('.address_right');
        const text = document.querySelector('.address_left');
        text.style.width='50%';
        googlemap.style.display = "block";
        timeline.style.display = "block";
    }

}
        //打字機效果
        $(function(){

            
            $(`header > a`).click(function(){
                let b= $(this).find(`b`);
                b.hide().delay(500).each(function(i){
                   $(this).delay(i*500).fadeIn(300);
                });
            });
            
            $(`.main-text`).mouseenter(function () { 
                
                $('.main-text>p').t({
            
                    delay:1,                   // start delay in seconds [default:0]
                    speed:80,                  // typing speed (ms) [default:50]
                    speed_vary:false,          // 'human like' speed variation [default:false]
                    
                    beep:true,                 // beep while typing (Web Audio API) [default:false]
                    
                    mistype:1,                 // mistype rate: 1:N per char [default:false]
                    locale:'en',               // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']
                    
                    caret:'\u258e',            // caret content; can be html too [default:true (\u258e)]
                    blink:true,                // blink-interval in ms; if TRUE, speed*3  [default:true]
                    blink_perm:false,          // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
        
                    repeat:0,                  // repeat typing: if TRUE, infinite or N times [default:0]
                    tag:'span',                // wrapper tag (.t-container, .t-caret) [default:'span']
                    pause_on_click:true,       // pauses/continues typing on click/tap (elm) [default:false]
                    pause_on_tab_switch:true,  // pauses typing if window is inactive (Page Visibility API) [default:false]
                    
                    // init callback (ready-to-type)
                    init:function(elm){},        
                    // typing callback
                    typing:function(elm,chr_or_elm,left,total){},
                    // finished callback
                    fin:function(elm){}          

                    });
        
            });
                            
            

        });




