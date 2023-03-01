var mouseEvent = "";


    canvas = document.getElementById("Canvas");
    cnt = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(a)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(a)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        cnt.beginPath();
        cnt.strokeStyle = color;
        cnt.lineWidth = width_of_line;
        cnt.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        cnt.stroke();
        }

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(a)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(a)
    {
        mouseEvent = "mouseleave";
    }


function clearArea() {
    cnt.clearRect(0, 0, cnt.canvas.width, cnt.canvas.height);
}
