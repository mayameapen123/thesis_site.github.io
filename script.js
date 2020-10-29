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
//  $("#img2").hide();

//Play food vide//
$("#v0").mouseenter(function(){
  $("#v0").trigger("play");
  $("#v0").autoplay = true;
});


// TRACKING ALL DISPLAYS WITH SCROLL


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll<800){

    //Food video shows
       $("#v0").show();
       $("#v1").hide();
}

    //Food hides, coffee shows
    if(scroll>800){
       $("#v0").hide();
        $("#v0").trigger("pause");
       $("#v1").show();
       $("#v1").trigger("play");
       $("#v1").autoplay = true;
      
      //$("#a2").css("opacity","1");
    }

    //Section one shows
    if(scroll>1900){
       $("#v1").hide();
       $(".pl1").trigger("play");
       $("#img2").show();
       $(".sidebar a").css("color","white");
    //   $("#a4").css("opacity","1");
    //   $("#a2").css("opacity","0.5");

       $(".soc").trigger("play");
       $(".soc2").trigger("play");
    }

    if(scroll<3390 & scroll>1900){
      $("#v3").hide();
    //  $("#a3").css("opacity","0.5");
    //  $("#a4").css("opacity","1");
    }

    //Laundry shot plays, section 1 hides

    if(scroll>3390){
         $("#v3").show();
         $("#v3").trigger("play");
         $("#v3").autoplay = true;
      //   $("#a4").css("opacity","0.5");     
    }

    //laundry
    if(scroll<4200 & scroll >3390){
        $("#v4").hide();
        $("#v3").show();
        $("#v3").trigger("play");
        $("#v3").autoplay = true;
    //    $("#a3").css("opacity","1");
    //    $("#a33").css("opacity","0.5");
    }

    if(scroll>4200){
      //3pm and cleaning video show
    //   $("#a3").css("opacity","0.5");
    //   $("#a33").css("opacity","1");
       $("#v3").hide();
       $("#v4").show();
       $("#v4").trigger("play");
       $("#v4").autoplay = true;
          
    }
     //Show section 4 Alarms

     if(scroll>4900){
   //   $("#a33").css("opacity","0.5");
   //   $("#a6").css("opacity","1");
      $("#v4").hide();
      $(".section4").show();
          
    }

    if(scroll>6100){

      $("#v5").show();
       $("#v5").trigger("play");
       $("#v5").autoplay = true;
  //    $("#a7").css("opacity","1");
      $(".pl3").trigger("pause");
   //   $("#a6").css("opacity","0.5");
 
    }

  if(scroll<6100 || scroll > 7200){

      $("#v5").hide();
        $("#v5").trigger("pause");
 
    }


     //Hides sidebar for final section

//POSITION TRAACKINGG (TIME)

//Food (7:00am)
if(scroll<800){
    $("#a1").css("opacity","1");
}
else {
   $("#a1").css("opacity","0.5");
}

//Coffee (8:00am)
if(scroll>800 & scroll<1900){
  $("#a2").css("opacity","1");
}
else {
   $("#a2").css("opacity","0.5");
}

//Scroll (11:00am)
if(scroll>1900 & scroll<3390){
  $("#a4").css("opacity","1");
}
else {
   $("#a4").css("opacity","0.5");
}

//Laundry (2pm)
if(scroll>3390 & scroll<4200){
  $("#a3").css("opacity","1");
}

else {
   $("#a3").css("opacity","0.5");
}

//cleaning (3pm)
if(scroll>4200 & scroll<4900){
  $("#a33").css("opacity","1");
}

else {
   $("#a33").css("opacity","0.5");
}

//Alarms (4pm)
if(scroll>4900 & scroll<5800){
  $("#a6").css("opacity","1");
}

else {
   $("#a6").css("opacity","0.5");
}

//Badminton (4pm)
if(scroll>5800 & scroll <6100){
  $("#a7").css("opacity","1");
}

else {
   $("#a7").css("opacity","0.5");
}

//bedtime 
if(scroll>6100){
  $("#a8").css("opacity","1");
}

else {
   $("#a8").css("opacity","0.5");
}

});













//CLICKING FUNCTIONS

//Scroll to food
$("#a1").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 1});
});


//Scroll to chai
$("#a2").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 801});
});

//Scroll to Section 1
$("#a4").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 2400});
});

//Scroll to Laundry
$("#a3").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 3700});
});

//Scroll to cleaning
$("#a33").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 4501});
});

//Scroll to Section2 alarm
$("#a6").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 5201});
});

//Scroll to outdoor time
$("#a7").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 5801});
});

//Scroll to outdoor time
$("#a8").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 6101});
});


$("video").on("mouseenter",function(){
$(this).trigger("play");
       $(this).autoplay = true;
});










