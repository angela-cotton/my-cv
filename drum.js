for(var i =0; i<document.querySelectorAll(".box").length;i++){

  document.querySelectorAll(".box")[i].addEventListener("click",function(){


    var buttonTnnerHTML= this.innerHTML;
    console.log(buttonTnnerHTML);

    mochi(buttonTnnerHTML);
});
}

document.addEventListener("keypress",function(Event){
  // var buttonTnnerHTML=Event.key;
  console.log(Event.charcode);
  // console.log(Event.key);
  mochi(Event.key);
});

function mochi(buttonTnnerHTML){

  // console.log("internal mochi function"+buttonTnnerHTML);
  switch (buttonTnnerHTML) {
    case "w":
      var music1= new Audio("drumsound/tom-1.mp3");
      music1.play();
      break;

    case "a":
      var music1= new Audio("drumsound/tom-2.mp3");
      music1.play();
      break;

    case "s":
      var music2= new Audio("drumsound/tom-3.mp3");
      music2.play();
      break;

    case "d":
      var music2= new Audio("drumsound/tom-4.mp3");
      music2.play();
      break;

    case "j":
      var music2= new Audio("drumsound/snare.mp3");
      music2.play();
      break;
    case "k":
      var music=new Audio("drumsound/crash.mp3");
      music.play();
      break;

    case "l":
      var music2= new Audio("drumsound/kick-bass.mp3");
      music2.play();
      break;

    default:

  }

}
