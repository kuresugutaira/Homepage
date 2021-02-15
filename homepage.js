$(function(){
    var speed = 200;
    $(".works-content").hover(
        function(){
            $(this).stop().animate({
                "marginTop": "0px",
                "marginBottom": "20px"
            },
            speed)
        },
        function(){
            $(this).stop().animate({
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
    var speed = 200;
    $("#notice-container a").hover(
        function(){
            $(this).stop().animate({
                "marginTop": "5px",
                "marginBottom": "25px"
            },
            speed)
        },
        function(){
            $(this).stop().animate({
                "marginTop": "15px",
                "marginBottom": "15px"
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
        var position = target.offset().top - 82; //この82はヘッダーの高さ
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
$(function(){
    $(".header-item").hover(
        function(){
            $(this).stop().animate({
                "marginTop": "15px",
                "marginBottom": "5px",
                "width": "22%"
            },
            300,);
        },
        function(){
            $(this).stop().animate({
                "margin":"10px",
                "width": "20%"
            },
            300,);
        }
    )
});
$(function(){
    var speed = 200;
    $("#icons-container a").hover(
        function(){
            $(this).stop().animate({
                "marginTop": "5px",
                "marginBottom": "25px"
            },
            speed)
        },
        function(){
            $(this).stop().animate({
                "marginTop": "15px",
                "marginBottom": "15px"
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