
//change navbar color

var clothesDistanc = $("#about").offset().top;
$(window).scroll(function () {
    let windowDistanc = $(window).scrollTop();
    if (windowDistanc > clothesDistanc)
    {
        $(".my-nav").css("background", "linear-gradient(90deg, rgb(0, 32, 128) 0%, rgb(179, 198, 255) 100% )")
        $(".arrow-up").fadeIn(500)
    }
    else
    {
        $(".my-nav").css("background", "transparent")
        $(".arrow-up").fadeOut(500)
        }
})

$(".arrow-up").click(function () {
    $("html , body").animate({scrollTop: '0'} , 1000)
})
