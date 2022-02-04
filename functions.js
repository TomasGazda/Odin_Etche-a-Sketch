
let style = "1";
let color = 'black';
let draw = false;



function createCanvas(){
     
    document.getElementById('canvas').innerHTML = "";
    let squareSide = 100/document.getElementById('slider').value;
    for (let index = 0; index < (document.getElementById('slider').value**2); index++) {
        
            let square = document.createElement('div');
            square.style.width = `calc(${squareSide}% - 1px)`;
            square.style.height = `calc(${squareSide}% - 1px)`;  
            square.className='square';   
            square.addEventListener('mouseover',drawStyle); 
            square.addEventListener('click',drawing),
            canvas.appendChild(square);
        
                 
   
    }
    document.getElementById("slider_value").innerHTML=document.getElementById('slider').value+"x"+document.getElementById('slider').value;
}
function drawing(){
    draw = !draw;
}


function drawStyle(e){
    if(draw){
        switch (style) {
            case "1": // adding black color as background
                e.target.style.background = 'black';
                break;
            case "2":// adding random color as background
                e.target.style.background = "#" + ((1<<24)*Math.random() | 0).toString(16);
                break;
            case "3": // adding oppacity to background
                let opacity  = e.target.style.opacity ;
                
                if(parseFloat(opacity)<1){
                    e.target.style.opacity = (parseFloat(opacity)+0.2).toString();
                }else{
                    e.target.style.opacity = 0.1;
                    e.target.style.background = 'black';
                }

                break;
            case "4":// adding selected color as background
                e.target.style.background = color
                break;

            case "5":// adding eraser
                e.target.style.background = 'white';
                break;
            
            default:
                break;
        }
    }
 
}
function setStyle(option = style){
    
  
    switch (option) {
        case "1":
            
            style='1';
            break;

        case "2":
            
            style='2';
            break;

        case "3":
            style='3';
            break;
        case "4":   
            style='4';
            break;
        case "5":
            style='5';
            break;
            
        default:
            break;
    }
}

function reset(){
    style = "1";
    document.getElementById('slider').value = 50;
    document.getElementById('black').checked= true;
    createCanvas();
    

}
function setColor(){
    color = document.getElementById('color_picker').value;
}

function eraseCanves(){
    
}
