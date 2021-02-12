$(function(){
    // $(`.box > ul`).hide();

    
   let data = JSON.parse(localStorage.getItem(`data`)) ||[];
   let datalen = data.length;

    //span 預約數量提醒!
 $(`.box > a >span`).text(datalen);
    // 點擊展開事件
    $(`.box > a`).click(function(event){
        event.preventDefault();
        $(`.box > ul`).fadeToggle(1000);
        textchange();
    })

    //預約紀錄提醒
    if(datalen >= 1){
        alert(`您已成功預約${datalen}筆!`)
        $(`.box > a`).click(function(e){
            alert(`若要取消預約，請來電!`)
          });
        
    };

    // 資料面宣告
    let str = $(`#guestAsk`).val();
    let guestTalkArea = $(`.guest > em`);
    let askArea = $(`.ask > em`);

    //askArea.stop(2000).text(`可以詢問開店時間、下午茶、預約來店等服務喔!`);


    $(`button`).click(function(){
        let str = $(`#guestAsk`).val();
        guestTalkArea.text(str);

        if( str == ``){
            askArea.hide().fadeIn(1000).text(`請務必輸入問題喔!`);
            guestTalkArea.text(`我.....`);
        }else if(str==`開店時間`){
            askArea.hide().fadeIn(1000).text(`我們開店時間是早上9點~晚上18點喔!!`);
            $(`#guestAsk`).val(``);
            $(`#guestAsk`).attr('placeholder',`我知道了!`);
        }else if(str==`下午茶`){
            askArea.hide().fadeIn(1000).text(`我們下午茶時間是下午1點~晚上17點喔!!您要預約嗎?`);
            $(`#guestAsk`).val(``);
            $(`#guestAsk`).attr('placeholder',`我知道了!`);
        }else if(str==`預約來店`){
            askArea.hide().fadeIn(1000).text(`歡迎預約來店喔!!!請留下資料以便聯繫您!!!`);
            $(`#guestAsk`).val(``);
            $(`#guestAsk`).attr('placeholder',`請輸入->確定預約!`);
        }else if(str == `確定預約!`){
            resert();
        }else{
            askArea.hide().fadeIn(1000).text(`請輸入開店時間、下午茶、預約來店!`);
        };
    });
    // 字詞變換
    function textchange(){
        askArea.text(`可以詢問開店時間、下午茶、預約來店等服務喔!`);
    };
    //預約事件
    function resert(){
        askArea.hide().fadeIn(1000).text(`請輸入暱稱、電話、預約時間!`);

        $(`#guestAsk`).blur(function (e) { 
            e.preventDefault();
            let str = $(`#guestAsk`).val();
            data.push(str);
            let datalen = data.length;
            askArea.hide().fadeIn(1000).text(`您已成功預約${datalen}筆!`)
            $(`.box > a >span`).text(datalen);
            let datajson = JSON.stringify(data);
            window.localStorage.setItem('data',datajson);
        });
    }

    



  });