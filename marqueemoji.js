//JS doing all the DOM heavy lifting as an exercise

//Parameterize height and width - width will change - destination will be square (height x height)
canvasWidth = 1080;
canvasHeight = 128;

const fontStyles = [
    [ "normal", "Normal" ],
    [ "italic", "Italic" ],
    [ "oblique", "Oblique" ]
];

const fontVariants = [
    [ "normal", "Normal" ],
    [ "small-caps", "Small caps" ]
];

const fontWeights = [
    [ "normal", "Normal" ],
    [ "bold", "Bold" ],
    [ "bolder", "Bolder" ],
    [ "lighter", "Lighter" ],
    [ "100", "100" ],
    [ "200", "200" ],
    [ "300", "300" ],
    [ "400", "400" ],
    [ "500", "500" ],
    [ "600", "600" ],
    [ "700", "700" ],
    [ "800", "800" ],
    [ "900", "900" ]      
];

//Works with reasonable availability and variety on Windows 10
const fontFaces = [
    [ "Times New Roman,serif", "Times New Roman" ],
    [ "Georgia,serif", "Georgia" ],
    [ "Garamond,serif", "Garamond" ],
    [ "Baskerville Old Face,serif", "Baskerville" ],
    [ "Palatino Linotype,serif", "Palatino" ],
    [ "Verdana,sans-serif", "Verdana" ],
    [ "Tahoma,sans-serif", "Tahoma" ],
    [ "Trebuchet MS,sans-serif", "Trebuchet" ],
    [ "Geneva,sans-serif", "Geneva" ],
    [ "Helvetica,sans-serif", "Helvetica" ],
    [ "Arial,sans-serif", "Arial" ],
    [ "Gill Sans MT,sans-serif", "Gill Sans" ],
    [ "Courier,monospace", "Courier" ],
    [ "Andalé Mono,monospace", "Andal&eacute; Mono" ],
    [ "Lucida Sans Typewriter,monospace", "Lucida Typewriter" ],
    [ "Lucida Console Regular,monospace", "Lucida Console" ],
    [ "Monaco,monospace", "Monaco" ],
    [ "Bradley Hand ITC,cursive", "Bradley Hand" ],
    [ "Brush Script MT,cursive", "Brush Script MT" ],
    [ "Luminari,fantasy", "Luminari (fantasy)" ],
    [ "Papyrus Regular,fantasy", "Papyrus" ],
    [ "Copperplate Gothic,fantasy", "Copperplate" ],
    [ "Arial Black", "Arial Black" ],     
    [ "Impact", "Impact" ],
    [ "Comic Sans MS", "Comic Sans" ]
];

//Form inputs
let scrollForm = document.createElement('form');
scrollForm.id = 'scrollform';
document.body.appendChild(scrollForm);

//Text and Fill Color Selections
let colorDiv = document.createElement('div');
colorDiv.id = 'colordiv';
scrollForm.appendChild(colorDiv);

//Text Color
let textColorDiv = document.createElement('div');
textColorDiv.id = 'textcolordiv';
textColorDiv.style.cssFloat = 'left';
textColorDiv.style.padding = '20px';
textColorDiv.style.overflow = 'auto';
textColorDiv.innerHTML = 'Text Color: ';
colorDiv.appendChild(textColorDiv);

let textColorPicker = document.createElement('input');
textColorPicker.id = 'textcolor';
textColorPicker.type = 'color';
textColorPicker.value = '#FFFFFF';
textColorDiv.appendChild(textColorPicker);

//Fill Color
let fillColorDiv = document.createElement('div');
fillColorDiv.id = 'fillcolordiv';
fillColorDiv.style.cssFloat = 'right';
fillColorDiv.style.padding = '20px';
fillColorDiv.style.overflow = 'auto';
fillColorDiv.innerHTML = 'Fill Color: ';
colorDiv.appendChild(fillColorDiv);

let fillColorPicker = document.createElement('input');
fillColorPicker.id = 'fillcolor';
fillColorPicker.type = 'color';
fillColorPicker.value = '#000000';
fillColorDiv.appendChild(fillColorPicker);

//lazy clearing
let clearDiv = document.createElement('div');
clearDiv.id = 'cleardiv';
clearDiv.style.clear = 'both';
scrollForm.appendChild(clearDiv);

//Font and Formatting Dropdowns
let fontFormatDiv = document.createElement('div');
fontFormatDiv.id = 'fontformatdiv';
scrollForm.appendChild(fontFormatDiv);

//Font Style
let fontStyleDiv = document.createElement('div');
fontStyleDiv.id = 'fontstylediv';
fontStyleDiv.style.cssFloat = 'left';
fontStyleDiv.style.padding = '20px';
fontStyleDiv.style.overflow = 'auto';
fontFormatDiv.appendChild(fontStyleDiv);

let fontStyleLabel = document.createElement('label');
fontStyleLabel.htmlFor = 'fontstyle';
fontStyleLabel.innerHTML = 'Font Style: ';
fontStyleDiv.appendChild(fontStyleLabel);

let fontStyleSelect = document.createElement('select');
fontStyleSelect.id = 'fontstyle';
fontStyleDiv.appendChild(fontStyleSelect);
addOptions(fontStyleSelect,fontStyles);

//Font typeface
let fontFaceDiv = document.createElement('div');
fontFaceDiv.id = 'fontFacediv';
fontFaceDiv.style.cssFloat = 'right';
fontFaceDiv.style.padding = '20px';
fontFaceDiv.style.overflow = 'auto';
fontFormatDiv.appendChild(fontFaceDiv);

let fontFaceLabel = document.createElement('label');
fontFaceLabel.htmlFor = 'font';
fontFaceLabel.innerHTML = 'Font Typeface: ';
fontFaceDiv.appendChild(fontFaceLabel);

let fontFaceSelect = document.createElement('select');
fontFaceSelect.id = 'font';
fontFaceDiv.appendChild(fontFaceSelect);
addOptions(fontFaceSelect,fontFaces);

//Font variant
let fontVariantDiv = document.createElement('div');
fontVariantDiv.id = 'fontvariantdiv';
fontVariantDiv.style.cssFloat = 'left';
fontVariantDiv.style.padding = '20px';
fontVariantDiv.style.overflow = 'auto';
fontFormatDiv.appendChild(fontVariantDiv);

let fontVariantLabel = document.createElement('label');
fontVariantLabel.htmlFor = 'fontvariant';
fontVariantLabel.innerHTML = 'Font Variant: ';
fontVariantDiv.appendChild(fontVariantLabel);

let fontVariantSelect = document.createElement('select');
fontVariantSelect.id = 'fontvariant';
fontVariantDiv.appendChild(fontVariantSelect);
addOptions(fontVariantSelect,fontVariants);

//Font weight
let fontWeightDiv = document.createElement('div');
fontWeightDiv.id = 'fontweightdiv';
fontWeightDiv.style.cssFloat = 'right';
fontWeightDiv.style.padding = '20px';
fontWeightDiv.style.overflow = 'auto';
fontFormatDiv.appendChild(fontWeightDiv);

let fontWeightLabel = document.createElement('label');
fontWeightLabel.htmlFor = 'fontweight';
fontWeightLabel.innerHTML = 'Font Weight: ';
fontWeightDiv.appendChild(fontWeightLabel);

let fontWeightSelect = document.createElement('select');
fontWeightSelect.id = 'font';
fontWeightDiv.appendChild(fontWeightSelect);
addOptions(fontWeightSelect,fontWeights);

//Phrase input text box
let phraseDiv = document.createElement('div');
phraseDiv.id = 'phrasediv';
phraseDiv.style.clear = 'both';
phraseDiv.style.padding = '20px';
phraseDiv.style.overflow = 'auto';
phraseDiv.style.textAlign = 'center';
phraseDiv.innerHTML = 'Phrase to scroll: ';
scrollForm.appendChild(phraseDiv);

let phraseText = document.createElement('input');
phraseText.id = 'phrasetext';
phraseText.type = 'text';
phraseDiv.appendChild(phraseText);

//Scroll Step
let stepDiv = document.createElement('div');
stepDiv.id = 'stepdiv';
stepDiv.style.cssFloat = 'left';
stepDiv.style.padding = '20px';
stepDiv.style.overflow = 'auto';
stepDiv.style.textAlign = 'center';
scrollForm.appendChild(stepDiv);

let stepText = document.createElement('div');
stepText.id = 'steptext';
stepText.innerHTML = 'Scroll Step (lower is slower and less jerky, but file sizes get bigger):';
stepDiv.appendChild(stepText);

let stepSlider = document.createElement('input');
stepSlider.id = 'stepslider';
stepSlider.type = 'range'
stepSlider.min = 1;
stepSlider.max = 30;
stepSlider.value = 10;
stepDiv.appendChild(stepSlider);
    
//Numeric representation of scrollStep value
let stepDisplay = document.createElement('div');
stepDisplay.id = 'stepdisplay';
stepDisplay.innerHTML = stepSlider.value + " px";
stepDiv.appendChild(stepDisplay);

//Keep scrollStep up to date
stepSlider.oninput = function() {
    stepDisplay.innerHTML = this.value + " px";
};

//Frame Delay
let speedDiv = document.createElement('div');
speedDiv.id = 'speeddiv';
speedDiv.style.cssFloat = 'right';
speedDiv.style.padding = '20px';
speedDiv.style.overflow = 'auto';
speedDiv.style.textAlign = 'center';
scrollForm.appendChild(speedDiv);

let speedText = document.createElement('div');
speedText.id = 'speedtext';
speedText.innerHTML = 'Frame Delay (lower is faster):';
speedDiv.appendChild(speedText);

let speedSlider = document.createElement('input');
speedSlider.id = 'speedslider';
speedSlider.type = 'range'
speedSlider.min = 20;
speedSlider.max = 100;
speedSlider.value = 40;
speedDiv.appendChild(speedSlider);
        
//Numeric representation of Frame Delay value
let speedDisplay = document.createElement('div');
speedDisplay.id = 'speeddisplay';
speedDisplay.innerHTML = speedSlider.value + " ms";
speedDiv.appendChild(speedDisplay);

//Keep Frame Delay up to date
speedSlider.oninput = function() {
    speedDisplay.innerHTML = this.value + " ms";
};

//Generate GIF div and button
let generateDiv = document.createElement('div');
generateDiv.id = 'generatediv';
scrollForm.appendChild(generateDiv);
generateDiv.style.clear = 'both';
generateDiv.style.padding = '20px';
generateDiv.style.overflow = 'auto';
generateDiv.style.textAlign = 'center';

let generateButton = document.createElement('input');
generateButton.id = 'generate';
generateButton.type = 'button';
generateButton.value = 'Generate GIF';
generateDiv.appendChild(generateButton);

//Put the source and destination canvases in the document, don't display them
let canvasBox = document.createElement('canvas');
canvasBox.id = 'canvasBox';
canvasBox.width = canvasWidth;
canvasBox.height = canvasHeight;
canvasBox.style.display = "none";
document.body.appendChild(canvasBox);
let canvasBoxCtx = canvasBox.getContext('2d');

let canvasDest = document.createElement('canvas');
canvasDest.id = 'canvasDest';
canvasDest.width = canvasHeight; //make it square
canvasDest.height = canvasHeight;
canvasDest.style.display = "none";
document.body.appendChild(canvasDest);
let canvasDestCtx = canvasDest.getContext('2d');

//Add action to "Generate GIF" button
generateButton.addEventListener('click', function () {

    //get your variables
    let fillColor = fillColorPicker.value;
    let textColor = textColorPicker.value;
    let fontStyle = fontStyleSelect.value;
    let fontVariant = fontVariantSelect.value;
    let fontWeight = fontWeightSelect.value;
    let canvasFont = fontFaceSelect.value;
    let canvasText = phraseText.value;
    let scrollSpeed = parseInt(speedSlider.value);
    let scrollStep = parseInt(stepSlider.value);

    //Clear old gif if page hasn't been refreshed
    if (typeof img != 'undefined') {
        img.remove();
        imgSize.remove();
    }

    //Text will over or underrun the canvas, so let's measure the phrase width
    draw(canvasBoxCtx, canvasWidth, canvasHeight, fillColor, textColor, fontStyle, canvasFont, canvasText, fontVariant, fontWeight);
    let textMetrics = canvasBoxCtx.measureText(canvasText);
    let phraseWidth = textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft;

    //Now we know the real phraseWidth, we can recreate the contents after resizing canvas width
    canvasBox.width = phraseWidth + (canvasHeight * 2); //padding front and back for scrolling
    canvasWidth = canvasBox.width;
    draw(canvasBoxCtx, canvasWidth, canvasHeight, fillColor, textColor, fontStyle, canvasFont, canvasText,fontVariant,fontWeight);
    
    //Get your jif ready
    //No documented globalPalette option in gif.js, but all options are passed to underlying Gif Encoder which does
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fillColor+textColor);

    let gif = new GIF({
        workers: 2,
        quality: 20,
        globalPalette:  [   parseInt(rgb[1], 16), parseInt(rgb[2], 16), parseInt(rgb[3], 16),
                            parseInt(rgb[4], 16), parseInt(rgb[5], 16), parseInt(rgb[6], 16) ],
        width: canvasHeight, //required due to gif.js library failure to pull ctx width/height
        height: canvasHeight //required due to gif.js library failure to pull ctx width/height
    });

    scroll(phraseWidth, scrollSpeed, scrollStep, gif);

    gif.on('finished', function(blob) {
        img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.id = 'output';
        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        document.body.appendChild(img);
        imgSize = document.createElement('div');
        imgSize.id = 'imgsize';
        imgSize.style.textAlign = 'center';
        document.body.appendChild(imgSize);

        // End gif construction and reset gif - no function to do so per https://github.com/jnordberg/gif.js/issues/128
        gif.running = false;
        gif.frames = [];
        imgSize.innerHTML = (blob.size / 1000).toFixed(2) + "kb";
    });

    gif.render();
});

function addOptions(selectObj, optArray)   { 
    for (var idx = 0; idx < optArray.length; idx++) {
        let opt = document.createElement('option');
        opt.value = optArray[idx][0];
        opt.innerHTML = optArray[idx][1];
        selectObj.append(opt);
    }
    return
} 

function draw(cBCtx,cWidth,cHeight,fColor,tColor,fStyle,cFnt,cText,fVar,fWeight) {
    //Font styles font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;
    //Start text at full width (and scroll pads full width again at the end of the scroll) 
    //to create scroll gap for seamless loop
    //Start text y=98 position to get the textbaseline close enough to center the text most of the time
    //TO BE DONE 
    //* make y determination programmatic with textMetrics as textbaseline will vary with each font
    //* Some fonts also violate px height on top and bottom
    cBCtx.clearRect(0, 0, cWidth, cHeight);
    cBCtx.fillStyle = fColor; 
    cBCtx.fillRect(0, 0, cWidth, cHeight);
    cBCtx.fillStyle = tColor;
    cBCtx.font = fStyle + " " + fVar + " " + fWeight + " " + (cHeight-1) + "px " + cFnt;
    cBCtx.fillText(cText, cHeight, 98);
}

//scroll a window/frame of the text from source canvas into dest canvas
//canvasHeight is used for Height and Width since we want the output window to be square.
function scroll(pWidth, sSpeed, sStep, g) {
    for (let scrollPos = 0; scrollPos <= pWidth + canvasHeight; scrollPos = scrollPos + sStep) {
    canvasDestCtx.drawImage(canvasBox, scrollPos, 0, canvasHeight, canvasHeight, 0, 0, canvasHeight, canvasHeight)
    //syntax reminder - drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    //Add dest canvas frame to gif
    g.addFrame(canvasDestCtx, {copy: true, delay: sSpeed});
    }
}