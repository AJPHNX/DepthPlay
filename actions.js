const maxDepth = 1000;
let globalMaxWidth = (window.screen.availWidth);
let globalMaxHeight = (window.screen.availHeight);
let minDepth = 0;
let defaultDepth = 1;
//Revceive input for number of "Stages"
let matrixDepth  = window.prompt('Enter number of stages:');
console.log ('Number of stages:' + matrixDepth);
//Revceive input for how far bak we want zero to sit in the persepective (1-100)
let maxDepthRatio = window.prompt('Enter depth percentage:');
console.log ('Depth percentage of zeroFrame:' + maxDepthRatio + '%');
//Takes matrixDepth and sets it to 1 if 0
if (matrixDepth < 1) {
    matrixDepth = defaultDepth;
    console.log ('Swithced to 1');
} 
//Function to calcluate 
//Build(fill) Frame class
    class Frame {
        constructor(matrixDepth) {
            this.frameDepth = matrixDepth;
            this.frameHeight = null;
            this.frameWidth = null;
            this.frameName = null; // Becames variable of array placement held
            console.log ('Frame filled');
        }
    }
//*********Fill Back wall frame class**********//
let zeroFrame = new Frame (50);//matrixDepth);
    zeroFrame.maxHeight = globalMaxHeight/2;
    zeroFrame.maxWidth = globalMaxWidth/2;
    console.log('zeroFrame width:'+ zeroFrame.maxWidth);
    console.log('zeroFrame Height:'+ zeroFrame.maxHeight);
//Build dynamic div

document.addEventListener('DOMContentLoaded', function() {
    const currentDiv = document.getElementById('zeroFrame');
    let newDiv = document.createElement('div');
    newDiv.id = 'stage';
    newDiv.innerHTML = 'Hi there!';
      // create a new div element
    const newStage = document.createElement('stage');
    newStage.setAttribute('color','black');
    // and give it some content
    //const newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    //newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    
    document.insertBefore(newDiv, currentDiv);
    //}
    
    //div.className = 'border pad';
   
    //div = document.getElementById('stage');
     /*
    div.setAttibute(color,'black');
    
    div.setAttibute(height, zeroFrame.maxHeight);
    div.setAttibute(width, zeroFrame.maxWidth);
    div.setAttibute(background,"white");*/
    let divColor = newStage.getAttribute(color);
    console.log (divColor);
    //div.setAttibute(.color = #fff;
    
}, false);

//*********Fill Back wall frame class**********//

/*document.body.onload = addElement;
function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");
  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("baseDiv");
  document.body.insertBefore(newDiv, currentDiv);
}*/

//Insert dynamic div 
console.log ('Frame depth:' + zeroFrame.frameDepth); //
//print(zeroFrame.frameDepth);
console.log ('Number of stages:' + matrixDepth);
console.log ('Max screen width:' + globalMaxWidth);
console.log ('Max screen height:'+ globalMaxHeight);
/*Create dynamic div that sits at propper
    :z-index
*/