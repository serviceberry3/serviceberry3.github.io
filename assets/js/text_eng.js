var ctx = document.querySelector("canvas").getContext("2d"),
    w = ctx.canvas.width,
    h = ctx.canvas.height,
    
    //global array of pixel coordinates for the text
    coords = [];        
    
    filled = [];

//set text color and font
ctx.fillStyle = "rgb(0, 100, 253)";
ctx.font = '100px sans-serif';   

let ctr = 0;

//generate pixel arrays for the text
generate("Hello there. How may I be of", 1450, 1050);  
generate("assistance today?", 1750, 1200);

//at this pt the canvas will be cleared, all data will be in coords
let coordstring = "";

console.log("Length is " + coords.length);

//create string with all pixel coords of text
for (i = 0; i < coords.length; i++) {
    //coordstring = coordstring.concat("(" + coords[i].x + ", " + coords[i].y + "),");
    coordstring = coordstring.concat("{" + coords[i].x + ", " + coords[i].y + "},");
}

var data = coords,
fileName = "text_coords.json";
 
var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    }());

saveData(data, fileName);

//draw a visualization of the text
draw("Hello there. How may I be of", 0, 0);
draw("assistance today?", 300, 150);
ctx.strokeStyle = 'green';
ctx.strokeRect(1140, 540, 2280, 1080);

function draw(txt, x_off, y_off) {
    //draw the text with specified offsets into the 2d canvas
    ctx.fillText(txt.toUpperCase(), x_off, y_off); 
}

function generate(txt, x_off, y_off) {
    ctr = 0;
  
	//ball radius, uint32 for speed
    var i, radius = 5, data32;            

    //clear canvas so we can draw the text
    ctx.clearRect(0, 0, w, h); 
    
    draw(txt, x_off, y_off);

    //get uint32 representation of the bitmap:
    data32 = new Uint32Array(ctx.getImageData(0, 0, w, h).data.buffer);

    //console.log(data32.length);

    //loop through each pixel. We will only get coords of ones w/alpha = 255
    for (i = 0; i < data32.length /*should be 2462400*/; i++) {
        //check alpha mask
        if (data32[i] & 0xff000000) {
            //track absolute pixel position
            filled.push(i);

            //add new coord if solid pixel           
            coords.push({
                //x coord should current index in pixel array mod screen width
                x: (i % w),
                
                //can get y coord from curr index div by screen width, floored
                y: ((i / w | 0)), //using any bitwise ops will convert float to int
            });
        }
    }

    //clear canvas again to prep for next action
    ctx.clearRect(0, 0, w, h); 
}


    
  