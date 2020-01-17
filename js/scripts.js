$(document).ready(function() {
   $("ask1").show();
   var correctpoints= 0;

   var arr =[];
   var tot = "";
   var num = 1;
   var solutions = ["true", "true", "true", "true","true"];

    $("#F").click(function(){
            arr.push("False");
            $("#ans" + num).text("False");
            counter = 10;
            num += 1;
            tot = "ask" + num;
            if (num <= 10) {
              $(".question").hide();
              $("#" + tot).show();
            } //if continue
            else {
              $("button").hide();
              $("#time").hide();
              $("h3").show();//domande
              $("h4").show();//risposte date e titoli
              $("#retryButton").show();
              for (var i = 0; i < arr.length; i++) {
                if (arr[i] === solutions[i]) {
                  $("#correct" + i).show();
                  correctPoints += 1;
                } //if show correct solutions
                else {
                  $("#wrong" + i).show();
                }//else show wrong solutions
               $("#score").text("Score: " + correctPoints + "/10");
              }//for 
            if (correctPoints >=8) {
                $("#good").show();
              sfondo ("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
               }   
              else if (correctPoints >4 && correctPoints <8) {
                $("#normal").show();
                sfondo ("linear-gradient(to top, rgba(200,200,0,0.6), rgba(0,150,0,0.5)");
              }
              else {
                $("#loser").show();
                sfondo ("linear-gradient(to top, rgba(160,0,0,0.6), rgba(0,150,0,0.5)");
              }
            }//else test complete      
          });
          //true section start
          $("#V").click(function() {
              arr.push("True");
              $("#ans" + num).text("True");
              num += 1;
              tot = "ask" + num;
              counter = 10;
              if (num <= 10) {
                $(".question").hide();
                $("#" + tot).show();
              } //if continue
              else {
               $("button").hide();
               $("#time").hide();
               $("h3").show(); //domande
               $("h4").show(); //risposte date e titoli
               $("#retryButton").show();
               for (var i = 0; i < arr.length; i++) {
                 if (arr[i] === solutions[i]) {
                    $("#correct" + i).show();
                    correctPoints += 1;
                     } //if show correct solutions
                 else {
                    $("#wrong" + i).show();
                 } // else show wrong solutions
                $("#score").text("Score " + correctPoints + " /10");
                 } //for
            if (correctPoints >=8) {
                $("#good").show();
              sfondo ("linear-gradient(to top, rgba(60,70,200,0.6), rgba(0,150,0,0.5))");
               }   
              else if (correctPoints >4 && correctPoints <8) {
                $("#normal").show();
                sfondo ("linear-gradient(to top, rgba(200,200,0,0.6), rgba(0,150,0,0.5)");
              }
              else {
                $("#loser").show();
                sfondo ("linear-gradient(to top, rgba(160,0,0,0.6), rgba(0,150,0,0.5)");
              }
              }// else test complete 
          }) //V click
     $('#retryButton').click(function() {
     location.reload(false);
     });

    })
    
   });