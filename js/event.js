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

    
    //if ($(this).scrollTop() <= 100) {
 
    //}

});






$(document).ready(function () {


   

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

    $("#qr").hover(function () {
        $("#overlayQr").show(300);
        //  $("#overlayAw").css("display", "block");
        $("#imgQr").animate({ opacity: .3 }, 300);
        // $("#imgAw").css("opacity", ".3");
        $("#qrHeader").removeClass("projectHed").addClass("projectHedHover");
    }, function () {
        // $("#overlayAw").css("display", "none");
        $("#overlayQr").hide(300);
        //$("#imgAw").css("opacity", "1");
        $("#imgQr").animate({ opacity: 1 }, 300);
        $("#qrHeader").removeClass("projectHedHover").addClass("projectHed");
    });

    $("#home").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: 0 }, 800);
       // $("body").scrollTop(800);
    });


    $("#about").on("click", function () {
       // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#divAbout").offset().top -100}, 800);

    });


    $("#projects").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#myProjects").offset().top - 150 }, 800);

    });
   
    $("#skills").on("click", function () {
        // $(window).scrollTo("divAbout", 800);
        $('html, body').animate({ scrollTop: $("#divSkills").offset().top - 110 }, 800);

    });

});




