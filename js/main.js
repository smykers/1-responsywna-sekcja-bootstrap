let HTMLicon = "fab fa-html5";
let REACTicon = "fab fa-react";
let CSSicon = "fab fa-css3-alt";
let GITicon = "fab fa-git";
let JSicon = "fab fa-js";
let WPicon = "fab fa-wordpress";




$(window).resize(function() {
    if ($(window).width() < 576) {
        // do something for small screens
        let pics = $('i').class;
        console.log(pics);

        pics.each(function(i, e) {
            console.log(e);
        });



    } else if ($(window).width() >= 576 && $(window).width() <= 768) {
        console.log('medium');

    } else if ($(window).width() > 768) {
        console.log('big');
    } else {

    }

})