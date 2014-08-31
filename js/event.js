function main(){

}

$(window).scroll(function(){
    if($(window).scrollTop() > 0) {
      $("header").addClass('shadow');
   
    } else {
        
         $("header").animate({
                "padding-top": "5%"
            }, 300);
        //  alert("top");
         $("header").removeClass('shadow');
    }

    
    //if ($(this).scrollTop() <= 100) {
 
    //}

});


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $("header").animate({
            "padding-top": "1%"
        }, 300);
    }
    //else {
    //    $("header").animate({
    //        "padding-top": "5%"
    //    }, 300);
    //}
    lastScrollTop = st;
});




$(document).ready(function(){

    var doc = $(document);

    $("#msw").hover(function () {
        $("#overlayMsw").show(300);
        //$("#overlayMsw").css("display", "block");
       // $("#imgMsw").css("opacity", ".3");
        $("#imgMsw").animate({ opacity: .3 }, 500);
        $("#mswHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
       // $("#overlayMsw").css("display", "none");
        $("#overlayMsw").hide(300);
        // $("#imgMsw").css("opacity", "1");
        $("#imgMsw").animate({ opacity: 1 }, 500);
        $("#mswHeader").removeClass("projectHedHover").addClass("projectHed");
    });


    $("#aw").hover(function () {
        $("#overlayAw").show(300);
      //  $("#overlayAw").css("display", "block");
        $("#imgAw").animate({ opacity: .3 }, 300);
        // $("#imgAw").css("opacity", ".3");
        $("#awHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
       // $("#overlayAw").css("display", "none");
        $("#overlayAw").hide(300);
        //$("#imgAw").css("opacity", "1");
        $("#imgAw").animate({ opacity: 1 }, 300);
        $("#awHeader").removeClass("projectHedHover").addClass("projectHed");
    });

    $("#home").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: 0 }, 800);
       // $("body").scrollTop(800);
    });


    $("#about").on("click", function () {
       // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#divAbout").offset().top - 50 }, 800);

    });


    $("#projects").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#myProjects").offset().top - 100 }, 800);

    });
   
    $("#skills").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#divSkills").offset().top - 100 }, 800);

    });

});




