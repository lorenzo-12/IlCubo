
//document.body.requestFullscreen();
//window.screen.orientation.lock("portrait");

//const portrait = window.matchMedia("(orientation: portrait)").matches;
//console.log(portrait);
var ang = screen.orientation.angle;
if (ang==90){
    document.body.style.setProperty("-webkit-transform", "rotate(-90deg)", null);
}

function css_file(){
    var s = document.getElementById("scriptCSS");
    //Check if viewport is smaller than 768 pixels
    if(window.innerWidth < 950) {
        console.log("telefono");
        s.href = "style_smartphone.css";
    }else { //Else we have a larger screen
        console.log("pc");
        s.href = "style.css";
    }
}


function test(){
    console.log("ciao");
}
