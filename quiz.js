
//hides quiz form on page load
$(document).ready(function() {
  $("form").css("display", "none");
  $("#welcomeResult").css("display", "none"); //hidding my various result div id's so they can be faded in
  $("#results").css("display", "none");
  $("#results2").css("display", "none");
  $("#perfectScore").css("display", "none");
});

//triggered when user clicks begin quiz. Displays the quiz and welcome message. Hides welcome page.
function beginQuiz(){
  var name = document.getElementById('name').value;
  if (name === ''){ //make sure user enters a name before beginning the quiz
      alert("Please enter your name.")
  } 
  else if (name != ''){
    $("#welcomeResult").fadeIn(2000); //fade in the greeting
    document.getElementById("welcomeResult").innerHTML = "Welcome " + name + "! Good Luck!";
    $("form").fadeIn(2000); //fade in the form
    $("#welcome").css("display","none"); //hide initial welcome page html
  }
}

//event listener for quiz form
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); //prevent form from being submitted
  result();
});

//function to calculate the quiz score
function result(){
  var score = 0;
  var name = document.getElementById('name').value;

  //get quiz radio and checkbox choices
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var checkBox = document.quiz.q5;

  //setup correct answers for radio box questions
  var ans1 = "c";
  var ans2 = "a";
  var ans3 = "c";
  var ans4 = "a";

  //validates that at least one checkbox was selected on question 5
  if (checkBox[0].checked == false && checkBox[1].checked == false && checkBox[2].checked == false && checkBox[3].checked == false){
    document.getElementById("alert").innerHTML = "Please choose at least one answer for question 5.";
  }
  else { 
    document.getElementById("alert").innerHTML = "";

    //compare selected answers with correct answers and increment score accordingly
    if (q1 == ans1) {score++}
    if (q2 == ans2) {score++}
    if (q3 == ans3) {score++}
    if (q4 == ans4) {score++}
    if (checkboxResult() == true) {score++} //calls a function that gets result from question 5

    //function to get result from question 5 
    function checkboxResult(){
      var checkBox = document.quiz.q5;
      if (checkBox[0].checked == true && checkBox[1].checked == true && checkBox[2].checked == false && checkBox[3].checked == true){
        return true;
      }
      else return false;
    }

    //setup fade in for quiz results
    $("#results").fadeIn(3000);
    $("#results2").fadeIn(3000);

    //print results to page
    document.getElementById("results").innerHTML = "You scored " + score + " out of 5";
    document.getElementById("results2").innerHTML = "RESULTS for " + name + ": You scored " + score + " out of 5 &nbsp";

    //determine if score is 100%. Prints if score is perfect
    if (score == 5){
      $("#perfectScore").fadeIn(500).fadeOut(500) //multiple fadeIn and fadeOut to make perfect score flash 10 times
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500).fadeOut(500)
                        .fadeIn(500);
      document.getElementById("perfectScore").innerHTML = "You scored 5/5. Perfect! &nbsp";
    }
  }
}

/*---------- Code for Hint Fades on mouse hover ------------------------*/

//show hint for question 1 on mouseover
$("#hintdiv1")
 .mouseover( 
   function() {
    $("#q1hint").fadeIn();
   } 
 );
//hide hint for question 1 on mouseout
$("#hintdiv1")
 .mouseout( 
   function() {
    $("#q1hint").fadeOut();
   } 
 );

//show hint for question 2 on mouseover
$("#hintdiv2")
 .mouseover( 
   function() {
    $("#q2hint").fadeIn();
   } 
 );
//hide hint for question 2 on mouseout
$("#hintdiv2")
 .mouseout( 
   function() {
    $("#q2hint").fadeOut();
   } 
 );

//show hint for question 3 on mouseover
$("#hintdiv3")
 .mouseover( 
   function() {
    $("#q3hint").fadeIn();
   } 
 );
//hide hint for question 3 on mouseout
$("#hintdiv3")
 .mouseout( 
   function() {
    $("#q3hint").fadeOut();
   } 
 );

//show hint for question 4 on mouseover
$("#hintdiv4")
 .mouseover( 
   function() {
    $("#q4hint").fadeIn();
   } 
 );
//hide hint for question 4 on mouseout
$("#hintdiv4")
 .mouseout( 
   function() {
    $("#q4hint").fadeOut();
   } 
 );

//show hint for question 5 on mouseover
$("#hintdiv5")
 .mouseover( 
   function() {
    $("#q5hint").fadeIn();
   } 
 );
//hide hint for question 5 on mouseout
$("#hintdiv5")
 .mouseout( 
   function() {
    $("#q5hint").fadeOut();
   } 
 );