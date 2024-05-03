function editShapeTool(){
    this.icon = "assets/vector.jpg";
	this.name = "editShapeTool";
    
    var editButton;
    var finishButton;

    var editMode = false;
    var array = [[],[]];
    
    loadPixels();
    finishButton = createButton('Finish Shape');
    
        finishButton.mousePressed(function(){
            editMode = false;
            loadPixels();
            array = [[],[]];
        })
    
    this.mousePressOnCanvas = function(c) {
        this.canvasContainer = select('#content')
        var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
        c.parent("content");
        background(255);
        
        if(mouseX > c.elt.offsetLeft &&
           mouseX < (c.elt.offsetLeft + c.Width) &&
           mouseY > c.elt.offsetTop &&
           mouseY< (c.elt.offsetTop + c.height)
        ){
            return true;
        }
        return false;
        
    }

    this.draw = function() {
        updatePixels();
        this.shape(array);
    }
    
    this.shape = function(array) {
        if(mouseIsPressed && this.mousePressOnCanvas(canvas)){
            if(!editMode){
                array.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else{
                for(var i = 0; i < array.length; i++){
                    vertex(array[i].x, array [i].y);
                    
                    if(editMode){
                        fill('red');
                        ellipse(array[i].x, array[y].y,10);
                        noFill();
                    }
                }
                endShape();
            }
            this.unselectTool = function() {
                updatePixels();
                select(".options").html("");
            };
            this.populateOptions = function() {
                select(".options").html( "<button id='Shape'>Edit Shape</button");
                
            select("#Shape").mouseClicked(function(){
                var button = select("#" + this.elt.id);
                if (editMode && !this.mousePressOnCanvas){
                    editMode =false;

                button.html('Edit Shape');
                }else {
                editMode = true;
                mousePressOnCanvas = false;
                button.html('Add Vertices');
    }
}
                             )
            }
        }
    }
}
