$(document).ready(function(){
  $("#mountains").mouseenter(function(){
    $("#info-box-1")
      .fadeIn()
  })
  $("#mountains").mouseleave(function(){
    $("#info-box-1").fadeOut();
  })

  $("#pig").mouseenter(function(){
    $("#info-box-2")
      .fadeIn()
  })
  $("#pig").mouseleave(function(){
    $("#info-box-2").fadeOut();
  })

  $("#beach").mouseenter(function(){
    $("#info-box-3")
      .fadeIn()
  })
  $("#beach").mouseleave(function(){
    $("#info-box-3").fadeOut();
  })

  $("#fire").mouseenter(function(){
    $("#info-box-4")
      .fadeIn()
  })
  $("#fire").mouseleave(function(){
    $("#info-box-4").fadeOut();
  })

  $("#scar").mouseenter(function(){
    $("#info-box-5")
      .fadeIn()
  })
  $("#scar").mouseleave(function(){
    $("#info-box-5").fadeOut();
  })
});
