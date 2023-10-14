
//document.body.requestFullscreen();
//window.screen.orientation.lock("portrait");

//const portrait = window.matchMedia("(orientation: portrait)").matches;
//console.log(portrait);
//var ang = screen.orientation.angle;
//if (ang==90){
//    document.body.style.setProperty("-webkit-transform", "rotate(-90deg)", null);
//}

//this.screenOrientation.lock();

screen.orientation.addEventListener("change", function(e) {
    var ang = screen.orientation.angle;
    var w = 0;
    var h = 0;
    w = window.innerWidth;
    h = window.innerHeight;
    if (ang==90){
        h = window.innerWidth;
        w = window.innerHeight;
    }
    if (ang==270){
        h = window.innerWidth;
        w = window.innerHeight;
    }
    console.log("change event");
    var s = document.getElementById("scriptCSS");
    //Check if viewport is smaller than 768 pixels
    if(w < 600) {
        console.log("telefono");
        s.href = "style_smartphone.css";
    }else { //Else we have a larger screen
        console.log("pc");
        s.href = "style.css";
    }
});

function css_file(){
    console.log("onload");
    var s = document.getElementById("scriptCSS");
    //Check if viewport is smaller than 768 pixels
    if(window.innerWidth < 600) {
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
