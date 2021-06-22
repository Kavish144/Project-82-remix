var mouseevent="empty";

canvas =document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
 color=document.getElementById("Color");
 width_of_line=document.getElementById("Width");
radius=document.getElementById("Radius");

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
  color=document.getElementById("Color").value;
  width_of_line=document.getElementById("Width").value;
radius=document.getElementById("Radius").value;
  mouseevent="mouseUp";
  }

  canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
  color=document.getElementById("Color").value;
  width_of_line=document.getElementById("Width").value;
radius=document.getElementById("Radius").value;
  mouseevent="mouseDown";
  }

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
   mouseevent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  
  
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent=="mouseDown") {
      
        console.log("Current Position Of X and Y coordinates= ");
      
       console.log("X= " + current_position_of_mouse_x + " Y= " + current_position_of_mouse_y);
      
        ctx.beginPath();
      
        ctx.strokeStyle = color;
      
        ctx.lineWidth= width_of_line;
      
      ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
      
      ctx.stroke();
    
      
    }
}
