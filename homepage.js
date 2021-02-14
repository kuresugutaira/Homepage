$(function(){
    var speed = 200;
    $(".works-content").hover(
        function(){
            $(this).animate({
                "marginTop": "0px",
                "marginBottom": "20px"
            },
            speed)
        },
        function(){
            $(this).animate({
                "marginTop": "10px",
                "marginBottom": "10px"
            },
            speed)
        }
    );
    $(".works-content").click(
        function(){
            location.href="https://unityroom.com/games/takarabako-atsume"
        }
    )
});
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 82;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
$(function(){
    $(".header-item").hover(
        function(){
            $(this).animate({
                "borderBottomWidth": "3px",
                "borderTopWidth": "3px",
                "borderLeftWidth": "1px",
                "borderRightWidth": "1px",
                "marginTop": "5px"
            },
            300,
            "swing");
        },
        function(){
            $(this).animate({
                "borderBottomWidth" : "0px",
                "borderTopWidth": "0px",
                "borderLeftWidth": "1px",
                "borderRightWidth": "1px",
                "marginTop": "0px"
            },
            300,
            "swing");
        }
    )
});