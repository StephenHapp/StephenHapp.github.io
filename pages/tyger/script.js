var textNum = 1;

$(document).ready(function(){
  $("#next-button").click(function(){
    if (textNum < 6 || textNum > 10) {
      if (textNum !== 11 && textNum !== 12) {
        $(".i").fadeOut("slow");
      }
      $(".text-box").fadeOut("slow");
      $("#page-" + (textNum + 1)).fadeIn("slow");
      if (textNum !== 15) {
        $("#text-" + (textNum + 1)).fadeIn("slow");
      }
    } else if (textNum !== 8 && textNum !==12) {
      $(".i").hide();
      $(".text-box").hide();
      $("#page-" + (textNum + 1)).show();
      $("#text-" + (textNum + 1)).show();
    } else if (textNum === 8) {
      $(".i").hide();
      $(".text-box").hide();
      $("#text-" + (textNum + 1)).show();
      $("#furnace").show();
      $("#skull").show();
      $("#brain").show();
      //$(".i").delay(1500);
      var yPos = 0;
      var actualY;
      
      setTimeout(function() {
        var id = setInterval(frame, 5);
        function frame() {
          if (yPos < -100) {
            clearInterval(id);
          } else {
            yPos = yPos - 0.2;
            actualY = (-100 * Math.pow(Math.sin(3.14159 * yPos / 200), 2));
            $("#furnace").css("top", actualY + "vw");
            $("#skull").css("top", 50 + actualY/2 + "vw");
          }
        }
      }, 1000);
    }
    if (textNum == 10) {
      $("#blob").show().delay(1000).fadeOut(1500);
    }
    if (textNum == 11) {
      $("#page-11").show();
      $("#tiger3").fadeIn(3000);
    }
    if (textNum == 14) {
      $("#title-page").fadeIn("slow");
    }
    if (textNum == 15) {
      $("#next-button").fadeOut();
      $("#text-16").delay(1500).fadeIn();
      $("#end-1").delay(3000).fadeIn();
    }
    textNum = textNum + 1;
  });
});

