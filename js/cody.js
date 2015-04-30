$(function() { 
    
    /* ============================================
    Click node
    =============================================*/
    $('.thumb-wrapper li').click(function(){
        //$('.menu').removeClass('mobilemenu');
        //$('.story').addClass('show');
        $('#footer').hide();
        $('nav').toggleClass('open');
        $('.story').removeClass('hide');
        var page = $(this).attr('href');
        page = "content/" + page.substring(page.lastIndexOf("/") + 5).slice(0,-4) + ".html";
        $('.story').load(page, function(){
            $('#slider').flexslider({
                animation: 'slide',
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: '#carousel'
            });
            $('#carousel').flexslider({
                animation: 'slide',
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 200,
                itemMargin: 5,
                asNavFor: '#slider'
            });
            $('#slider-single').flexslider({
               
            });
        });

        $('.wrapper-story').addClass('opaque');

        $('.story').addClass('opaque');
        $('body').css({
            'overflow': 'hidden'
        });

        $('.menu').toggleClass('closecontent');

        $('.wrapper-story').animate({ scrollTop: 0 }, "slow");
    });

    /* ===================================
    Load credits page
    ==================================== */
    $('#footer_menu-nav #credits').click(function(){
        //$('.menu').removeClass('mobilemenu');
        //$('.story').addClass('show');
        $('#footer').hide();
        $('nav').toggleClass('open');
        $('.story').removeClass('hide');
        $('.story').load('credits.html');
        $('.wrapper-story').addClass('opaque');
        $('.story').addClass('opaque');
        $('body').css({
            'overflow': 'hidden'
        });
        $('.menu').toggleClass('closecontent');
    });

    /* ===================================
    Click outside of story
    ==================================== */
    $('.wrapper-story').click(function(){
        if ($('.closecontent')[0]) {
            $(this).attr('href', '#svg-roots-bottom');
            $('#footer').show();
            $('.wrapper-story').removeClass('opaque').css({
                '-webkit-transition-delay': '0s',
                '-moz-transition-delay': '0s',
                '-o-transition-delay': '0s',
                'transition-delay': '0s'
            });

            $('.story').removeClass('opaque').css({
                '-webkit-transition-delay': '0s',
                '-moz-transition-delay': '0s',
                '-o-transition-delay': '0s',
                'transition-delay': '0s'
            });

            $('body').css({
                'overflow': 'inherit'
            });
            $('.menu').toggleClass('closecontent');
        }
    }).children().click(function(){
        return false;
    });

    /* ============================================
    Close content
    =============================================*/
    $('.menu, .menu-wrapper').click(function(){
        if ($('.closecontent')[0]) {
            $('.menu-wrapper, .menu').attr('href', '#svg-roots-bottom');
            $('iframe').attr('src','');
            $('#footer').show();
            $('.wrapper-story').removeClass('opaque').css({
                '-webkit-transition-delay': '0s',
                '-moz-transition-delay': '0s',
                '-o-transition-delay': '0s',
                'transition-delay': '0s'
            });

            $('.story').removeClass('opaque').css({
                '-webkit-transition-delay': '0s',
                '-moz-transition-delay': '0s',
                '-o-transition-delay': '0s',
                'transition-delay': '0s'
            });

            $('body').css({
                'overflow': 'inherit'
            });
            $('.menu').toggleClass('closecontent');
        }
        else {
            $('.menu-wrapper, .menu').attr('href', '#top');
        }
    });

    /* ===================================
    Scroll to top button
    ==================================== */
    var topOfOthDiv = $("#middle").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".menu").removeClass('invisible').addClass('opaque'); //reached the desired point -- show div
        }
        else {
            $(".menu").removeClass('opaque').addClass('invisible');
        }
    });

    /* ===================================
    Smooth Scroll
    =====================================*/
    $('a.scrollto').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    var offset = $('#content').offset();
    $('#sprout').click(function(){
        $('html,body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
    });

    /* ===================================
    Content bits
    =====================================*/
    $('.overlay-wrapper').hover(function(){
        $(this).find('.overlay').toggleClass('overlay-');
        $(this).find('span').toggleClass('span-');
        $(this).find('.hidden').toggleClass('hidden');
    });

    $('#hamburger-wrapper').click(function(){
        $('nav#mobile').toggleClass('dropitlikeitshot');
    });

    /* ===================================
    Fade in content
    ==================================== */
    function fade() {
        $('.fade').each(function() {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          var windowBottom = $(window).scrollTop() + $(window).innerHeight() * 1;

          /* If the object is completely visible in the window, fade it in */
          if (objectBottom < windowBottom) {
            if ($(this).css('opacity')==0) {$(this).fadeTo(500,1);}
          } else {
            if ($(this).css('opacity')==.99) {$(this).fadeTo(500,0);}
          }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {fade();}); //Fade in elements during scroll

});