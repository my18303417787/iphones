
$(function(){
    // 点击搜索
    $('.search').on('click',function(){

        $('.header').addClass('searching')

    });
    // 点击取消
    $('#cuo').on('click',function(){
        $('.header').removeClass('searching')
    })
    // 点击菜单出现内容
    $('.header .phone-list .phone-meau').on('click',function(){
        $(this).toggleClass('active');
        $(".fixed_box").toggleClass('active');
        $('body').toggleClass('active');
    })


var ban=$('.carousel .banner a');
var dots=$('.dot-nav .dot');
var moving=false;
 var moveTo=function(elv,dir){
   moving=true;
     if(dir==='right'){
       ban.filter('.active')
           .removeClass('active')
           .addClass('leave')
           .delay(700)
           .queue(function(){
               $(this).removeClass('leave').dequeue();
             moving=false;
           });

         $(elv).addClass('right')
       //强制浏览器重新绘制一帧
       $(elv).get(0).offsetWidth;
       $(elv).removeClass('right').addClass('active');

       // $(elv).addClass('enter')
       //     // .addClass('active')
       //     .delay(700)
       //     .queue(function(){
       //         $(this).removeClass('enter').dequeue();
       //     });
   }else if (dir === 'left' ){
   ban.filter('.active')
           .removeClass('active')
           .addClass('right')
           .delay(700)
           .queue(function(){
               moving=false;
               $(this).removeClass('right').dequeue();

           });

         $(elv).addClass('enter')
           .delay(10)
           .queue(function(){
               $(this).addClass('active').removeClass('enter').dequeue();
           })


   }


    dots.removeClass('active').eq(ban.index(elv)).addClass('active dong');
};
moveRight=function(){
    if(moving)return;
    var active=ban.filter('.active');
    var elv=active.next().length?active.next():ban.eq(0);
    moveTo(elv,'right');
}
    var moveleft=function(){
        if(moving)return;
        var active=ban.filter('.active');
        var elv=active.prev().length?active.prev():ban.eq(-1);
        moveTo(elv,'left')
    };
    // 左右的按钮
    $('.carousel .btn_left').on('click',function(){
        clearlunbo();
        moveleft()
    });
    $('.carousel .btn_right').on('click',function(){
        clearlunbo();
        moveRight()
    })
    // 下边的圆点
dots.on('click',function(){

     clearlunbo()
    if(moving)return;
    var c=ban.index(ban.filter('.active'));
    var n=$(this).index();
    if(n===c){return;}
    if(c>n){
        moveTo(ban.eq(n),'left');
    }else{
        moveTo(ban.eq(n),'right')
    }

})


   // 时间函数 自动轮播

     
    // 恢复默认的颜色
  var t,tt;  
  function lunbo(){

       dots.css('background-color','#DCDCDC');
  $('<div class="inner"></div>').appendTo(dots);
       
       
       //第一个长条动画 
       dots
       .eq(0)
       .find('.inner')
       // .delay(700)
       .queue(function(){
          $(this).animate({width:'100%'},2500).dequeue();
       });
    
   t = setInterval(function(){
       // 自动轮播
        moveRight();
       // $('.carousel .btn_right').trigger('click');

   },3000);


   tt = setInterval(function(){
     dots
       .eq(0)
       .find('.inner')
       .animate({width:'0'})
       // .delay(700)
       .queue(function(){
          $(this).animate({width:'100%'},2500).dequeue()
       })

     dots.removeClass('dong')
     
  },12000);

  };  

  lunbo();


// 清除轮播
function clearlunbo(){
        // 恢复默认的颜色
       dots.empty();
       dots.removeAttr('style');
       // $('.carousel .tab-list .dot-nav .dot').css('background-color','#DCDCDC');
       //长条动画 
       dots
       .eq(0)
       .find('.inner')
       .animate({width:'100%'},1450);
       clearInterval(t,tt)
}
  
 
// 响应式foot字体列表效果: 
       $('.footer-inner .foot-item dt').on('click',function(){
          
          // 删除空内容的元素
          var dd = $('.footer-inner .foot-item dd');

          for ( var i=0; i<dd.length; i++ ) {
            if ( dd[i].innerHTML === '' ) {
              $(dd[i]).remove();
            };  
          }
     
          $(this)
          .toggleClass('active')
          .nextUntil('dt')
          .toggleClass('active');

       })



});