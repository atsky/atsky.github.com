
function draw() {
	var context = document.getElementById('canvasId').getContext("2d");
	var data = context.getImageData(0, 0, 165, 145);

	var pixels = data.data;

    //for (int i = 10; i < 1000; i++) {}
	//    pixels[i] = 100;
	//}

    // Dimensions of the triangle
    var width = 125;
    var height = 100;
    var padding = 20;

    // Draw the text exclamation point
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 60px 'Times New Roma';, Times, serif";
    context.fillStyle = "#333";
    try{
        context.fillText("!", padding + width/2, padding + height/1.5);
    }catch(ex){}
       
	//context.putImageData(data,0,0);
}

