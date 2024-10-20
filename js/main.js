let counterDate = new Date("Oct 30 , 2024 23:59:59 ").getTime();
let counter = setInterval(()=> {
                // Get Date Now
var DateNow = new Date().getTime();
     /// find the Date difference now and countdown Date
var dateDiff = counterDate - DateNow ; // return millseconds

 var days = `${Math.floor(dateDiff / (1000 * 60 * 60 * 24))}D` ;
 var hours = `${Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))}h`;
 var minutes = `${Math.floor(dateDiff % (1000 * 60 * 60) /(1000 * 60))}m`;
 var seconds = `${Math.floor(dateDiff % (1000 * 60) / (1000))}s`;

 document.querySelector(".days").innerHTML = days;
 document.querySelector(".hours").innerHTML = hours;
 document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
 document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;
 
 if(dateDiff <=0 ) {
   clearInterval(counter)
 }
} , 1000);

var textarea = document.querySelector(".text-area");
var count = 100;
var previousLength = 0;

function updatecounter() {
  var currentLength = textarea.value.length;
 if(currentLength < previousLength && count < 100) {
    count++;
 } else if (currentLength > previousLength && count > 0) {
    count--;
 };
  previousLength = currentLength;
  document.querySelector(".count").innerHTML = count;

};
textarea.addEventListener("input" , function() {
   updatecounter();
});
         //////// jQuery
const AsideWidth = $(".aside").outerWidth();
$("aside").css({left: `-${AsideWidth}px`});

$(".gear").on("click" , function() {
           //// show sidebar
   $("aside").animate({left :"0px"});
             /// Hide sidebar
   $(".close").on("click" , function() {
      $("aside").animate({left :`-${AsideWidth}px`});
   });
});
   ///////// aside links
$("aside ul li a").on("click" , function() {
   const currentlink = $(this).attr("href");
   const linkpostop = $(currentlink).offset().top;
   $( "html , body").animate({scrollTop : linkpostop } , 1000)
});
       ///// singers section
pargraphStatus = false;
$("h3").siblings(".p").not(".one .p").slideUp();
$("h3").on("click" , function() {
   if(pargraphStatus == true) {
      // pargraph shown
      $(this).siblings(".p").slideUp()
      pargraphStatus = false;
   } else {
      //// paragraph hidden
      $(this).siblings(".p").slideToggle(500);
      pargraphStatus = true;
   }
});
jQuery (function() {
   $(".loading").fadeOut(2000 , function() {
      $("body").css({overflow : "auto"});
   })
})