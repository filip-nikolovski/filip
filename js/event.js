function main(){

}



$(window).scroll(function(){
    if($(window).scrollTop() > 0) {
      $("header").addClass('shadow');
    
      $("#profileImage").removeClass('imageProfile').addClass('imageProfileHide');
      $("#divSpan").removeClass('spanShow').addClass('spanHide');
    } else {
        
        $("#profileImage").removeClass('imageProfileHide').addClass('imageProfile');
        $("#divSpan").removeClass('spanHide').addClass('spanShow');   
         $("header").removeClass('shadow');
    }
});






$(document).ready(function () {

   
    if ($(window).scrollTop() == 0) {
        $("header li a:first").addClass('current');
    }

       $("#nav a").on("click", function () {
        var navHref = $(this).attr("href");
        if (navHref == "#divHome") {
            $('html, body').animate({ scrollTop: 0 }, 800);
        } else {
            $('html, body').animate({ scrollTop: $(navHref).offset().top - 100 }, 800);
        }
        

    });

    var doc = $(document);

    $("#msw").hover(function () {
        $("#overlayMsw").show(300);
        $("#imgMsw").animate({ opacity: .3 }, 500);
        $("#mswHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
        $("#overlayMsw").hide(300);
        $("#imgMsw").animate({ opacity: 1 }, 500);
        $("#mswHeader").removeClass("projectHedHover").addClass("projectHed");
    });


    $("#aw").hover(function () {
        $("#overlayAw").show(300);
        $("#imgAw").animate({ opacity: .3 }, 300);
        $("#awHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
        $("#overlayAw").hide(300);
        $("#imgAw").animate({ opacity: 1 }, 300);
        $("#awHeader").removeClass("projectHedHover").addClass("projectHed");
    });

    $("#qr").hover(function () {
        $("#overlayQr").show(300);
        $("#imgQr").animate({ opacity: .3 }, 300);
        $("#qrHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
        $("#overlayQr").hide(300);
        $("#imgQr").animate({ opacity: 1 }, 300);
        $("#qrHeader").removeClass("projectHedHover").addClass("projectHed");
    });






});




$(window).scroll(function () {

    var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());

    if (windowTop <= 0) {
        $('#nav a.current').removeClass('current');
        $("header li a:first").addClass('current');
    }

    $('.subSection').each(function (index) {
        if (windowTop > ($(this).position().top - 200)) {
            $('#nav a.current').removeClass('current');
            $('#nav a:eq(' + index + ')').addClass('current');
        }
    });

}).scroll();


