// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2000})
.setPin("#pin1")
//.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
.addTo(controller);

skrollr.init({
    forceHeight: false
});

var s = skrollr.init();

$(function(){
    var scro = $(window).scrollTop() ;
    //alert(scro);
});