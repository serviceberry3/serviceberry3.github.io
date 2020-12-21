//set up the mailto link bubble
const ADDR = 'noah.weiner', DOMAIN = 'yale.edu';

//set the href for the button as a mailto link
document.getElementById('email').href = 'mailto' + ':' + ADDR + '@' + DOMAIN;


//the "Noah Weiner" header
const E_NAME = document.getElementById('name');

//save the actual text content of the <a> tag, should be "Noah Weiner"
let name = E_NAME.textContent;

//iterator
let i = 0;

//set the header text to empty string to start
E_NAME.textContent = '';

//define some constants variables
const CLASS = 'key', PREFIX = 'key_';

//iterate over each letter in "Noah Weiner"
for (let letter of name) {
    //create a new span tag in the HTML doc
    let container = document.createElement('span');

    //set this span tag to one single letter of "Noah Weiner"
    container.textContent = letter;

    //if the letter is not a space
    if (letter != ' ') {
        //set the span's class name to 'key'
        container.className = CLASS;

        //set the span's id to key_0, key_1, etc. for each letter
        container.id = PREFIX + i;

        //set the span tag's hover function
        container.onmouseenter = function(e) {
            //play the note when letter clicked
            if (mouseDown) playKey(e.target);
        }
        i++;
    }
    //add this span tag (the single letter) as a child of our original <a> "Noah Weiner" tag
    E_NAME.appendChild(container);
}

//Web Audio API's AudioContext interface represents an audio graph whose AudioDestinationNode is routed to 
//a real-time output device that produces a signal directed at the user. Usually only use one AudioCxt per document.
//AudioContext is used for managing and playing all sounds

//Here a BaseAudioContext is created for us automatically and extended to an online audio context. 
//We'll want this because we're looking to play live sound
var audioCtx = new(window.AudioContext || window.webkitAudioContext);

//make speakers emit a note. Called by playKey
function playNote(frequency, duration, callback) {
    //create an Oscillator node to make a sound wave.
    //The createOscillator() method of the BaseAudioContext interface creates an OscillatorNode, a 
    //source representing a periodic waveform. It basically generates a constant tone.
    var oscillator = audioCtx.createOscillator();

    //set wave type and frequency (in Hz)
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;

    //connect the oscillator to our AudioContext
    oscillator.connect(audioCtx.destination);

    //start up the oscillator to make the sound
    oscillator.start();

    //after duration has elapsed, stop the oscillator and call the callback fxn to remove the changes from the letter
    setTimeout(function() {
            oscillator.stop(); 
            callback();
        }, 
        duration);
}

//notes to play (frequencies in Hz)
const notes = [
    261.626,
    293.665,
    329.628,
    349.228,
    391.995,
    440,
    493.883,
    523.251,
    587.33,
    659.255,
    698.456,
    783.991,
    880,
    987.767,
    1046.502,
    1174.659,
    1318.51,
    1396.913,
    1567.982,
    1760,
];

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
function playKey(target) {
    //if user is clicking on one of our <span> tags that's holding a letter of "Noah Weiner"
    if (target.className == CLASS) {
        //get the number of the letter
        let index = parseInt(target.id.slice(PREFIX.length));

        //set the letter to a random color
        target.style.color = randColor();

        target.style.display = "inline-block";
        
        //space the letter out away from other letters
        target.style.paddingLeft = "8px";
        target.style.paddingRight = "8px";

        //increase the font size a little bit
        target.style.fontSize = "7rem";


        //play the appropriate note for 200ms, passing callback fxn to remove the color, size, and padding changes after duration elapses
        playNote(notes[index], 200, function() {
            target.style.removeProperty('color');
            target.style.removeProperty('padding');
            target.style.removeProperty('font-size');
        });
    }
    //otherwise do nothing
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