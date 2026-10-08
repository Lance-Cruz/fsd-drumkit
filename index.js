document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    animation(event.key);
});

for(var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        buttonClicked = this.innerHTML;

        makeSound(buttonClicked);

        animation(buttonClicked);
    });
}

function animation(key) {
    buttonToBeAnimated = document.querySelector("."+key);
    //console.log(buttonToBeAnimated);

    buttonToBeAnimated.classList.add("pressed");

    setTimeout(function () {
        buttonToBeAnimated.classList.remove("pressed");
    }, 1000)
}

function makeSound(key) {

    switch(key){
        case 'w':
            var audio = new Audio('Sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('Sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('Sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('Sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('Sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('Sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('Sounds/snare.mp3');
            audio.play();
            break;
    }

}
