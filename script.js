//Declare your variable

//var bgColorChanger = document.querySelector("#btn");
//var Projectbody = document.querySelector(".container");
//We have added an Event litsner to the button
//bgColorChanger.addEventListener("click", changeColor);


//write a function
//function changeColor () {
    //var colourIndexOne = Math.round(Math.random()*9);
    //var colorIndexTwo = Math.round(Math.random()*9);
    //var colorIndexThree = Math.round(Math.random()*9);

    //var newBgcolor = "#" + colourIndexOne + colorIndexTwo + colorIndexThree;

    //Projectbody.style.backgroundColor = newBgcolor;
//}
    
//declare your const
const BG_COLOR_CHANGER = document.querySelector("btn");
const PROJECT_BODY = document.querySelector("container");

BG_COLOR_CHANGER.addEventListener("click", () => {
    const COLOR_INDEX_ONE =  Math.round(Math.random()*9);
    const COLOR_INDEX_TWO =  Math.round(Math.random()*9);
    const COLOR_INDEX_THREE = Math.round(Math.random()*9);
    const NEW_BG_COLOR = `#${COLOR_INDEX_ONE}${COLOR_INDEX_TWO}${COLOR_INDEX_THREE}`;
    PROJECT_BODY.style.backgroundColor =    NEW_BG_COLOR;
} )
