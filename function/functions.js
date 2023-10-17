$(document).ready(function () {
    $(window).scroll(function () {
        var w_scroll = $(window).scrollTop();
        var nav_p = $("#menu-bar").offset().top;

        if (w_scroll >= nav_p) {
            $("#menu-bar").addClass("sticktop");
        } else {
            $("#menu-bar").removeClass("sticktop");
        };
    });
});

