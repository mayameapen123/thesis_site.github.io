$(document).ready(function(){

$("#v1").hide();
$("#pl3").hide();
$("#pl4").hide();
$(".sidebar").hide();
$(".everything").hide();
$(".heading_text").show();
    $(".section4").hide();

$(".logo").on("click",function(){

        location.reload(true);
});
var x = document.getElementByClassName("arrow");
    var y = document.getElementByClassName("everything");
    x.onclick = function(){y.style.display = "block";
    };

//LANDING PAGE STUFF //

$(".arrow").show();
$(".my_gallery").mousemove(function( event ) {
  var x = event.clientX;

  var x2 = x*0.02;
  var x3 = x*0.005;
  var y = event.clientY;
  var y2 = y*0.02;
$("img").css('transform', 'translate('+x2+'px , ' +y2+'px)skew('+x3+'deg)');
 // rand=rand+10;};
});

$(".arrow").on("click",function(){
  $(this).hide();
$(".my_gallery").hide();

$(".heading_text").hide();
$(".sidebar").fadeIn(3000);
$(".everything").fadeIn(2000);

});



//LANDING PAGE OVER!!!//



$("a:first").css("opacity","1");

       $("#img2").hide();
$("#v0").mouseenter(function(){

 
   $("#v0").trigger("play");
      $("#v0").autoplay = true;
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
   console.log(scroll);
    if(scroll<800){

       $("#v0").show();
       $("#v1").hide();
     
 



    }


    if(scroll>800){

       $("#v0").hide();
       $("#v1").show();
          $("#v1").trigger("play");
      $("#v1").autoplay = true;
  $("a:first").css("opacity","0.5");
      $("#a2").css("opacity","1");


    }


    if(scroll>1900){

       $("#v1").hide();
       $(".pl1").trigger("play");
       $("#img2").show();
       $(".sidebar a").css("color","white");
       $("#a4").css("opacity","1");
   $("#a2").css("opacity","0.5");
   $(".soc").trigger("play");
    $(".soc2").trigger("play");

    }

 if(scroll<3390 & scroll>1900){
  $("#v3").hide();
  $("#a3").css("opacity","0.5");
  $("#a4").css("opacity","1");
 }



 if(scroll>3390){

       
     //  $(".sidebyside1").hide();
      //   $(".sidebyside2").hide();
         $("#v3").show();
         $("#v3").trigger("play");
      $("#v3").autoplay = true;
$("#a4").css("opacity","0.5");


          
    }

//laundry
if(scroll<4200 & scroll >3390){
   $("#v4").hide();
    $("#v3").show();
         $("#v3").trigger("play");
      $("#v3").autoplay = true;
$("#a3").css("opacity","1");
     $("#a33").css("opacity","0.5");

}



    if(scroll>4200){

      //3pm and cleaning video show
      $("#a3").css("opacity","0.5");
      $("#a33").css("opacity","1");
       $("#v3").hide();
       $("#v4").show();
       $("#v4").trigger("play");
      $("#v4").autoplay = true;
          
    }

        if(scroll>4900){
      $("#a33").css("opacity","0.5");
      $("#a6").css("opacity","1");
       $("#v4").hide();
    $(".section4").show();

          
    }

    if(scroll>5600){

   
      $("#a7").css("opacity","1");
    $(".pl3").trigger("pause");
    $("#a6").css("opacity","0.5");
 
    }

 if(scroll>6000){

    $("#a3").css("opacity","0.5");

$("#a6").css("opacity","1");
   $(".sidebar").hide();
 
    }

 if(scroll>1 & scroll<6000)
   $(".sidebar").show();


});



$(".pl1").click(function(){
 
   $(".pl1").trigger("play");
      $(".pl1").autoplay = true;
});

$(".pl2").mouseenter(function(){

 
   $(this).trigger("play");
      $(this).autoplay = true;
});

$(".pl3").mouseenter(function(){

 
   $(this).trigger("play");
      $(this).autoplay = true;
});

$(".pl4").mouseenter(function(){

 
   $(this).trigger("play");
      $(this).autoplay = true;
});
    
};
