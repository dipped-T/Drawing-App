//a tool to erase what is drawn to the canvas with varioous thicknesses(?)
function EraserTool(){
	this.icon = "assets/eraser.jpg";
	this.name = "eraserTool";
    //this.selectedColour = "white";

	var previousMouseX = -1;
	var previousMouseY = -1;

    this.draw = function(){
        stroke(255);
        fill(255);
   
		if(mouseIsPressed){

			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}

		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
        stroke(0);
        fill(0);
	};

	
	this.populateOptions = function() {
		select(".options").html(
			'<input type="range" min="1" max="100" value="10" class="slider" id="myRange">'
			);
		select("#myRange").mouseClicked(function() {
            strokeWeight(myRange.value); //Pass our slider value into our strokeWeight()
            });

	};
}