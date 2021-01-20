//iterator
let i = 0;


//define some constants variables
const CLASS = 'key', PREFIX = 'key_';

const headers = ["hypewriter", "indygo", "shen", "marty", "bob", "satphone"];

for (const header of headers) { 
    let this_header = document.getElementById(header);
    let this_header_text = this_header.textContent;

    //set the header text to empty string to start
    this_header.textContent = '';

    //iterate over each letter in "Noah Weiner"
    for (let letter of this_header_text) {

        //create a new span tag in the HTML doc
        let container = document.createElement('span');

        //set this span tag to one single letter of "Noah Weiner"
        container.textContent = letter;
        container.style.textDecoration = "underline";

        //if the letter is not a space
        if (letter != ' ') {
            //set the span's class name to 'key'
            container.className = CLASS;

            //set the span's id to key_0, key_1, etc. for each letter
            container.id = PREFIX + i;

            //set the span tag's hover function
            container.onmouseenter = function(e) {
                //color the letter when hovered
                colorLetter(e.target);
            }
            container.onmouseleave = function(e) {
                uncolorLetter(e.target);
            }
            i++;
        }
        //add this span tag (the single letter) as a child of our original <a> "Noah Weiner" tag
        this_header.appendChild(container);
    }
}

//return random value between 0 and 255, for generating a random color
function colorRange() {
    //Math.random returns num in range [0,1)
    return Math.random() * 255;
}

//generate a random color
function randColor() {
    return 'rgb(' + colorRange() + ',' + colorRange() + ',' + colorRange() + ')';
}

//function that's called when a letter of "Noah Weiner" is clicked
function colorLetter(target) {
    //if user is clicking on one of our <span> tags that's holding a letter of "Noah Weiner"
    if (target.className == CLASS) {
        //get the number of the letter
        let index = parseInt(target.id.slice(PREFIX.length));
        console.log(index);

        //set the letter to a random color
        target.style.color = 'rgba(34, 58, 237, 0.365)';
        console.log("Color been set");

        target.style.display = "inline-block";
        
        //space the letter out away from other letters
        target.style.paddingLeft = "8px";
        target.style.paddingRight = "8px";

        //increase the font size a little bit
        target.style.fontSize = "4rem";

        target.style.transform = "translate(0px,-5px)";
    }
    //otherwise do nothing
}

function uncolorLetter(target) {
    target.style.removeProperty('color');
    target.style.removeProperty('padding');
    target.style.removeProperty('font-size');
    target.style.removeProperty('transform');
    target.style.textDecoration = "underline";
}

//global bool mouseDown indicating whether the mouse is being clicked (anywhere)
mouseDown = false;

//callback function for when cursor is clicked anywhere
onmousedown = function(e) {
    //always call playKey on any click and then in playKey we can check if user is clicking on one of the header letters
    playKey(e.target);
    mouseDown = true;
}

//callback function for when cursor is released anywhere
onmouseup = function() {
    mouseDown = false;
}