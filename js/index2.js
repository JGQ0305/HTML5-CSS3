$(function () {
    $('.container').fullpage({
        // 设置图片背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        // 设置内容位置
        verticalCentered: false,
        //显示导航
        navigation: true,
        //添加动画
        afterLoad: function(link, index){
            $('.section').eq(index-1).addClass('now');
        },
        onLeave: function(index, nextIndex, direction) {
            if (index==2 && nextIndex==3) {
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==3 && nextIndex==4) {
                $('.section').eq(index-1).addClass('leaved');
            }else if(index==5 && nextIndex==6) {
                $('.section').eq(index-1).addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index==6 && nextIndex==7) {
                $('.screen07 .text').addClass('show');
                //由于缓存的问题，有时候不能马上显示出来，要多刷新几次
                $('.screen07 .star img').each(function (i, item) {
                    $(this).delay(i*500).fadeIn();
                });
            }
        },
        afterRender: function(){
        // jquery本身没有的方法可以通过$.fn的方式追加
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });

        // 监听购物车动画，在其完成之后执行收货地址动画
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn();
                $('.screen04 .text').addClass('show');
            });

        // 第八屏功能
            // 绑定鼠标移动时间
            $('.screen08').on('mousemove', function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 190,
                    top: e.clientY - 20
                });
            }).find('.again').on('click', function () {
            // 方法：清除类、css属性、style，然后跳转到第一页
                $('.now, .show, .leaved').removeClass('now').removeClass('show').removeClass('leaved');
            // css属性、fadeIn()就是在后面加一个style属性
                $('.content[style]').removeAttr('style');
            //  跳回到第一页,jquery本身没有的方法可以通过$.fn的方式追加
                $.fn.fullpage.moveTo(1);
            })
        },
        //滚动速度默认是700单位好秒
        scrollingSpeed: 1000
    })
});