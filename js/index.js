
// 表單效果
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hide");

};


//按鈕效果
function notyet() {
    alert(
        "還沒完成,敬請期待"
    );
    var data = prompt("可以留下信箱,完成後通知", "XXXX@gmail.com")

    alert("謝謝您,完成後會寄往" + data);
};

document.addEventListener("DOMContentLoaded",checklist,false);



//檢查dom是否有節點存在
function checklist(){
  

  if(document.querySelector('#clicked')== null){
     return;
  }else{
        //japan_style.html  表單事件
      let menu_click = document.querySelector('#clicked');
      menu_click.addEventListener('click',menuopen,false)

      function menuopen(){
          const ul = document.querySelector('#menu');
          ul.style.display = "flex";
          
          if(ul.classList.contains('-on')==true){
              ul.style.display = "none";
              ul.classList.remove('-on');
          }else{
              ul.style.display = "flex";
              ul.classList.add('-on');
          }

        }
  };

 
};

$(`header > a`).click(function(){
  let b= $(this).find(`b`);
  b.hide().delay(500).each(function(i){
     $(this).delay(i*500).fadeIn(300);
  });
});


$(`#clicked`).click(function(){
  let b= $(this).find(`b`);
  b.hide().delay(500).each(function(i){
     $(this).delay(i*500).fadeIn(300);
  });
});


//swiper 輪播區


const swiper = new Swiper('.swiper-container', {
  loop:true,      
  speed: 600,
  parallax: true,
  effect: "fade",
  autoplay: {
      delay: 2500,
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});