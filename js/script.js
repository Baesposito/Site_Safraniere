function scrollNav() {
  $('.nav a').click(function(){
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top }, 700);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();



$(".premier1").hover(function(){
  $(".deuxieme1").css("display", "list-item");
  }, function(){
  $(".deuxieme1").css("display", "none");
});


$(".premier2").hover(function(){
  $(".deuxieme2").css("display", "list-item");
  }, function(){
  $(".deuxieme2").css("display", "none");
});

$(".leblocknav1").hover(function(){
  $(".deuxieme3").css("display", "list-item");
  }, function(){
  $(".deuxieme3").css("display", "none");
});

$(".leblocknav2").hover(function(){
  $(".deuxieme4").css("display", "list-item");
  }, function(){
  $(".deuxieme4").css("display", "none");
});

$(".leblocknav3").hover(function(){
  $(".deuxieme5").css("display", "list-item");
  }, function(){
  $(".deuxieme5").css("display", "none");
});


function afficher(objet){
 	objet.style.display='block';
}

function enlever(objet){
 	objet.style.display='none';
}

function get_class(ClassName){
    return getElemetByClassName(ClassName);
}
/*
var bouton1 = get_class('p1');
var bouton2 = get_class('p2');
var para1 = get_class('paragraphe1');
var para2 = get_class('paragraphe2');

function modification(para1,para2){
    $('.p2').click(function(){
    afficher(para1);
    enlever(para2);
});
$('.p1').click(function(){
    afficher(para2);
    enlever(para1);
});
    
      
}
modification(para1,para2);

*/

$(".p2f").click(function(){
  $(".paragraphe4").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe2").css("display", "none");
  $(".paragraphe1").css("display", "block");
  } );


$(".p1f").click(function(){
  $(".paragraphe2").css("display", "none");
  $(".paragraphe4").css("display", "none");
  $(".paragraphe1").css("display", "none");
  $(".paragraphe3").css("display", "block");
  } );


$(".p3f").click(function(){
  $(".paragraphe1").css("display", "none");
  $(".paragraphe2").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe4").css("display", "block");
  } );

$(".p4f").click(function(){
  $(".paragraphe1").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe4").css("display", "none");
  $(".paragraphe2").css("display", "block");
  } );

$(".p2b").click(function(){
  $(".paragraphe1").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe2").css("display", "none");
  $(".paragraphe4").css("display", "block");
  } );

$(".p4b").click(function(){
  $(".paragraphe2").css("display", "none");
  $(".paragraphe1").css("display", "none");
  $(".paragraphe4").css("display", "none");
  $(".paragraphe3").css("display", "block");
  } );

$(".p3b").click(function(){
  $(".paragraphe2").css("display", "none");
  $(".paragraphe4").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe1").css("display", "block");
  } );

$(".p1b").click(function(){
  $(".paragraphe4").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe1").css("display", "none");
  $(".paragraphe2").css("display", "block");
  } );

$(".bretour").click(function(){
  $(".paragraphe4").css("display", "none");
  $(".paragraphe3").css("display", "none");
  $(".paragraphe1").css("display", "none");
  $(".paragraphe2").css("display", "block");
  } );


