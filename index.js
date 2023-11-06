/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function reportWindowSize() {
    h = window.innerHeight;
    w = window.innerWidth;
    console.log("h: ",h);
    console.log("w: ",w);
    console.log("------------------------");

    var s = document.getElementById("scriptCSS");
    //Check if viewport is smaller than 768 pixels
    if(w < 600) {
        console.log("telefono");
        s.href = "style_smartphone.css";
    }
    else if(w < 900){
        console.log("tablet");
        s.href = "style_tablet.css";
    }
    else { //Else we have a larger screen
        console.log("pc");
        s.href = "style.css";
    }
}
  
window.onresize = reportWindowSize;

*/
