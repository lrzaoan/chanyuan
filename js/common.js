$(document).ready(function () {
    function tick() {
        var today=new Date();
        var chinese = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        var y = today.getFullYear().toString();
        var m = (today.getMonth()+1).toString();
        var d = today.getDate().toString();
        var result = "";
//                for (var i = 0; i < y.length; i++) {
////                    result += chinese[y.charAt(i)];
//                }
//                result += "年";
        if (m.length == 2) {
            if (m.charAt(0) == "1") {
                result += ("十" + chinese[m.charAt(1)] + "月");
            }
        }
        else {
            result += (chinese[m.charAt(0)] + "月");
        }
        if (d.length == 2) {
            result += (chinese[d.charAt(0)] + "十" + chinese[d.charAt(1)] + "日");
        }
        else {
            result += (chinese[d.charAt(0)] + "日");
        }
        // document.getElementById("date").innerHTML = result;
        date.innerHTML=result;
    }
    window.onload = tick;
    jQuery(function ($) {

        $.supersized({

            // Functionality
            slideshow: 1,			// Slideshow on/off
            autoplay: 1,			// Slideshow starts playing automatically
            start_slide: 1,			// Start slide (0 is random)
            stop_loop: 0,			// Pauses slideshow on last slide
            random: 0,			// Randomize slide order (Ignores start slide)
            slide_interval: 3000,		// Length between transitions
            transition: 4, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
            transition_speed: 1000,		// Speed of transition
            new_window: 1,			// Image links open in new window/tab
            pause_hover: 0,			// Pause slideshow on hover
            keyboard_nav: 1,			// Keyboard navigation on/off
            performance: 1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
            image_protect: 1,			// Disables image dragging and right click with Javascript

            // Size & Position
            min_width: 0,			// Min width allowed (in pixels)
            min_height: 0,			// Min height allowed (in pixels)
            vertical_center: 1,			// Vertically center background
            horizontal_center: 1,			// Horizontally center background
            fit_always: 0,			// Image will never exceed browser width or height (Ignores min. dimensions)
            fit_portrait: 1,			// Portrait images will not exceed browser height
            fit_landscape: 0,			// Landscape images will not exceed browser width

            // Components
            slide_links: 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
            thumb_links: 1,			// Individual thumb links for each slide
            thumbnail_navigation: 0,			// Thumbnail navigation
            slides: [			// Slideshow Images
                {image: 'img/bg1.jpg'},
                {image: 'img/bg2.jpg', title: 'Image Credit: Maria Kazvan', thumb: 'img/bg2.jpg'},
            ],

            // Theme Options
            progress_bar: 1,			// Timer for each slide
            mouse_scrub: 0

        });
    });
    $(".menue_bg li").hover(function () {
        $(this).addClass("menue_act_page").siblings().removeClass("menue_act_page");
    });

    $(".gallery_content_container").slide({
        titCell: ".gallery_small li", mainCell: ".gallery_big", targetCell: ".gallery_expert li", autoPlay: false, delayTime: 100, trigger: "click", delayTime: 1000, startFun: function (i, p) {
            //控制小图自动翻页
            if (i == 0) {
                jQuery(".gallery_content_container .navPrev").click()
            } else if (i % 5 == 0) {
                jQuery(".gallery_content_container .navNext").click()
            }
        }
    });
//小图滚动
    $(".gallery_content_container").slide({ mainCell:".gallery_smalla ul",prevCell:".navPrev",nextCell:".navNext", effect:"left",vis: 5,scroll:1,delayTime:0,autoPage:true,pnLoop:false});
    $(".index_start").click(function(){
       $("#index_content").hide("slow");
        $("#gallery_content").fadeIn(2000);
        $(".menue_bg li").removeClass("menue_act_page");
        $(".menue_bg .aa").addClass("menue_act_page");
    });
    
//    $("#viewport").slide({ titCell: ".menue_bg li", mainCell: ".content_container ",trigger: "click",delayTime: 1500});
});