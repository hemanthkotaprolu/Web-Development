buttonObjects = document.querySelectorAll(".drum");

for(var i=0;i<buttonObjects.length;i++) {
  buttonObjects[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  var keyPressed = event.key;

  makeSound(keyPressed);

  buttonAnimation(keyPressed);
})


function makeSound(word) {
  switch(word) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;
    default:
      console.log(word);
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey)
  activeButton.classList.add("pressed");

  setTimeout(function (){
                    activeButton.classList.remove("pressed");},100);
}
