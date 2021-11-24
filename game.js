var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

var isGameOver = false;

$("body").keypress(function() {

  if (gamePattern.length === 0) {
    isGameOver = false;
    nextSequence();

  }
});


$(".btn").on("click", function() {

  var userChosenColour = (this.id);

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  for (var i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] !== gamePattern[i]) {
      gameOver();

      break;
    }

  }

      if (isGameOver == false && userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        nextSequence();
      }

});


function gameOver() {

  $("body").addClass("game-over");

  $("h1").text("Game Over!, Press A Key to Restart ");

  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);

    isGameOver = true;

  restart();

}

function restart() {

  userClickedPattern = [];

  gamePattern = [];

  level = 0;

}


function nextSequence() {

  var randomNumber = (Math.floor(Math.random() * 4));

  var randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);

  level++;

  $("h1").text("Level " + level);
}


function playSound(name) {
  switch (name) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;

    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;


    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;


    default:
      console.log(name);

  }

}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
