$(function() {
    // 变量部分
    var $meau1 = $('.nav .meau1');
    var $meau2 = $('.nav .meau2');
    var $m2Ol = $('.nav .meau2 ol');
    var $m2Lis = $('.nav .meau2 ol li');
    var $meau3 = $('.nav .meau3');
    var $m3Ul = $('.nav .meau3 ul');
    var $m3Img = $('.nav .meau3 ul img');
    var $meau4 = $('.nav .meau4');
    var $m4Lis = $('.nav .meau4 ol li');
    var $m4Line = $('.nav .meau4 .line');
    var $m4Block = $('.nav .meau4 .block');
    var c = 0;
    var $content = $('.swiper-container');
    var a = ['#daa520', 'pink', '#FA951C', 'skyblue', 'yellow'];
    var $sSlide = $('.swiper-container .swiper-slide');
    var flag = true;
    $sSlide.each(function(index, val) {
        $sSlide.eq(index).css('background', a[index]);
        $m3Img.eq(index).css('background', a[index]);
    });
    // 引用插件
    // $('.swiper-slide').eq(0).addClass('current').siblings().removeClass('current');
    var mySwiper = new Swiper('.swiper-container', {
            // pagination: '.swiper-pagination',
            pagination: 'meau3',
            paginationClickable: true,
            onTransitionEnd: function(swiper) {
                // isBox5Click = false;
                var c = swiper.activeIndex;
                setTimeout(function() {
                    $('.swiper-slide').eq(c).addClass('current').siblings().removeClass('current');
                    setStyle(c);
                    $m4Line.css('transform', 'translateX(' + 100 * c + '%)');
                    if(c==0){
                        var btnImgSrc = $('.first .circle .box4 img').attr('srca');
                        var src = btnImgSrc + Math.random();
                        $('.first .circle .box4 img').attr('src', src);                        
                    }

                }, 150);
            },
            onImagesReady: function(swiper) {
                    // 模拟延时
                    setTimeout(function() {
                        $('.loading').addClass('current');
                    }, 3000);
                    setTimeout(function() {
                        $('.loading').remove();
                        $('.swiper-slide').eq(0).addClass('current').siblings().removeClass('current');
                        var btnImgSrc = $('.first .circle .box4 img').attr('srca');
                        var src = btnImgSrc + Math.random();
                        $('.first .circle .box4 img').attr('src', src);
                    }, 3500);
                }
                // onReachBeginning: function(swiper) {
                //     setTimeout(function() {
                //         $('.swiper-slide').eq(0).addClass('current').siblings().removeClass('current');
                //     }, 100);
                // }
        })
        //通用的js
    function meauAdd() {
        $meau1.addClass('current');
        $meau2.addClass('current');
        $meau3.addClass('current');
        $meau4.addClass('current');
        $content.addClass('current');
    }

    function meauRemove() {
        $meau1.removeClass('current');
        $meau2.removeClass('current');
        $meau3.removeClass('current');
        $meau4.removeClass('current');
        $content.removeClass('current');
        mySwiper.slideTo(c, 300, true);
    }

    function setStyle(c) {
        $m2Ol.css('transform', 'translateX(' + (-500 * c) + 'px)');
        $m2Lis.eq(c).addClass('current').siblings().removeClass('current');
        $m3Ul.css('transform', 'rotate(-45deg) translateX(' + (-200 * c) + 'px)');
        $m3Ul.children('li').eq(c + 8).addClass('current').siblings().removeClass('current');
        $m4Block.css('transform', 'translateX(' + 100 * c + '%)');
    }


    // 导航部分的js
    setStyle(c);
    $meau1.on('click', function() { meauAdd() });
    $m4Lis.each(function(index, ele) {
        $m4Lis.eq(index).on('click', function() {
            c = index;
            $m4Line.css('transform', 'translateX(' + 100 * c + '%)');
            meauRemove();
        });
        $m4Lis.eq(index).on('mouseenter', function() {
            setStyle(index);
        });
    });
    $m3Img.each(function(index, val) {
        /* iterate through array or object */
        $m3Img.parent().eq(index).on('mouseenter', function(event) {
            c = index;
            setStyle(c);
        });
        $m3Img.parent().eq(index).on('click', function(event) {
            meauRemove();
        });
    });
    $m2Lis.each(function(index, val) {
        /* iterate through array or object */
        $m2Lis.eq(index).on('click', function(event) {
            // alert(index);
            c = index;
            setStyle(c);
            meauRemove();
        });
    });


    //第一页的js
    var l = $('.first .circle').offset().left;
    var t = $('.first .circle').offset().top;
    var w = $('.first .circle').width();
    var h = $('.first .circle').height();
    var t1 = parseInt($('.first .circle .box1').css('top'));
    var t2 = parseInt($('.first .circle .box2').css('top'));
    var t3 = parseInt($('.first .circle .box3').css('top'));
    var l1 = parseInt($('.first .circle .box1').css('left'));
    var l2 = parseInt($('.first .circle .box2').css('left'));
    var l3 = parseInt($('.first .circle .box3').css('left'));
    var btnImgSrc = $('.first .circle .box4 img').attr('srca');
    var imgIsReload = true;
    // var isBox5Click = false;
    var x = l + w / 2;
    var y = t + h / 2;
    $(window).resize(function(event) {
        l = $('.first .circle').offset().left;
        t = $('.first .circle').offset().top;
        w = $('.first .circle').width();
        h = $('.first .circle').height();
        t1 = parseInt($('.first .circle .box1').css('top'));
        t2 = parseInt($('.first .circle .box2').css('top'));
        t3 = parseInt($('.first .circle .box3').css('top'));
        l1 = parseInt($('.first .circle .box1').css('left'));
        l2 = parseInt($('.first .circle .box2').css('left'));
        l3 = parseInt($('.first .circle .box3').css('left'));
        btnImgSrc = $('.first .circle .box4 img').attr('srca');
        imgIsReload = true;
        // var isBox5Click = false;
        x = l + w / 2;
        y = t + h / 2;
    });
    $(document).mousemove(function(e) {
        $('.first .circle .box1').css({ 'top': t1 + (e.pageY - y) / 2, 'left': l1 + (e.pageX - x) / 2 });
        $('.first .circle .box2').css({ 'top': t1 + (e.pageY - y) / 5, 'left': l2 + (e.pageX - x) / 5 });
        $('.first .circle .box3').css({ 'top': t1 + (e.pageY - y) / 10, 'left': l3 + (e.pageX - x) / 10 });
        var a = Math.abs((e.pageY - y) / 200);
        var b = Math.abs((e.pageX - x) / 200);
        var c = Math.sqrt(a * a + b * b)
        var op = 0.9 - c;
        op = op < 0.3 ? 0.3 : op;
        // if (!isBox5Click) {
        // $('.box4').css('opacity', op);
        // }
        if ((op >= 0.85) && imgIsReload) {
            imgIsReload = false;
            var src = btnImgSrc + Math.random();
            $('.first .circle .box4 img').attr('src', src);
            setTimeout(function() { imgIsReload = true }, 1900)
        }

    });
    // $('.first .circle .box4').click(function() {
    //     $(this).parent().parent().parent().removeClass('current');
    //     // $(this).css('opacity',0.9);
    //     isBox5Click = true;
    // });

    //



})
