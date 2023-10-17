$(document).ready(function () {
    $(window).scroll(function () {
        var w_scroll = $(window).scrollTop();
        var nav_p = $("#stickpoint").offset().top;

        var count = w_scroll - nav_p;

        if (count >= 0) {
            $("#menu-bar").addClass("stick");
        } 
        else {
            $("#menu-bar").removeClass("stick");
        };

        console.log("w", w_scroll, "n", nav_p, "c", count);
    });
});

