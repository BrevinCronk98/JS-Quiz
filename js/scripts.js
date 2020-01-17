function tabulateAnswers() {
    var c1score=0;
    var c2score=0;
    var c3score=0;
    var c4score=0;

    var choices = document.getElementsByTagName('input');

    for (i=0; i<choices.length; i++) {
        
        if (choices[i].checked) {
          // add 1 to that choice's score
          if (choices[i].value == 'c1') {
            c1score = c1score + 1;
          }
          if (choices[i].value == 'c2') {
            c2score = c2score + 1;
          }
          if (choices[i].value == 'c3') {
            c3score = c3score + 1;
          }
          if (choices[i].value == 'c4') {
            c4score = c4score + 1;
          }
         
        }
      }

      var maxscore = Math.max(c1score,c2score,c3score,c4score);
      var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { 
    answerbox.innerHTML = "You are a computer researcher! You will enjoy developing algorithms, and doing things with computers no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the best humans in Jeopardy, and are creating robots to do your chores for you. Computer researchers typically go to college and work at universities, or as a part of the research and development team in companies.";
  
      event.preventDefault();








}