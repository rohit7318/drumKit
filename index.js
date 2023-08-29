var arr = document.querySelectorAll(".drum");
console.log(arr);
for(let i = 0 ; i<arr.length; i++)
{
    arr[i].addEventListener("click",function(){
        // alert("I got clicked...");
        var buttonText = this.innerHTML;
        playSound(buttonText);
        buttonAnimation(buttonText);
   
        
        
    })
}

document.addEventListener("keydown",function(event){

    playSound(event.key);
    buttonAnimation(event.key);
    
});

function playSound(char)
{

    switch(char)
    {
       case "w":
            let tomOne = new Audio("tom-1.mp3");
            tomOne.play();
            
            break;
        
        case "a": 
            let tomTwo = new Audio("tom-2.mp3");
            tomTwo.play();
            break;
        
        case "s":
            let tomThree = new Audio("tom-3.mp3");
            tomThree.play();
            break;
        
        case "d":
            let tomFour = new Audio("tom-4.mp3");
            tomFour.play();
            break;

         case "j":
            let crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "k":
            let secondLast = new Audio("kick-bass.mp3");
            secondLast.play();
            break;

       case "l":
            let last = new Audio("snare.mp3");
            last.play();
            break;
        default:
            console.log("Not a valid key , default is running");
            // alert("Not a valid key");    
    }
   

}

function buttonAnimation(currentKey)
{
    
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

   
    
}