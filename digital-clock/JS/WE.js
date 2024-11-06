function onLoad(){
    const section = document.getElementById('Mainsection');
    section.style.height = window.innerHeight+"px";
    section.style.width = window.innerWidth+"px";
    const imgtag = document.getElementById('CSBackGround');
    imgtag.height = window.innerHeight+'px';
    imgtag.width = window.innerWidth+'px';
    imgtag.style.height = window.innerHeight+'px';
    imgtag.style.width = window.innerWidth+'px';
};

window.wallpaperPropertyListener = {
    applyUserProperties: function(properties){
        if (properties.clockposition){
            let clpo = properties.clockposition.value;
            toString(clpo);
            setClockPosition(clpo);
        }
        if (properties.custombackground) {
        }
    }
};

function setClockPosition(PValue) { //Sets clock positon on screen
    let ClockDiv = document.getElementById("sbb_uhr_container").style
    switch(PValue) {
        case "0" ://Top Left
            ClockDiv.position = 'absolute';
            ClockDiv.top = '0%';
            ClockDiv.left = '0%';
            ClockDiv.transform = 'translate(0%, 0%)';
            break;
        case "1" : //Top Center
            ClockDiv.position = 'absolute';
            ClockDiv.top = '0%';
            ClockDiv.left = '50%';
            ClockDiv.transform = 'translate(-50%)';
            break;
        case "2" ://Top Right Doesn't work
            ClockDiv.position = 'absolute';
            ClockDiv.top = '0%';
            ClockDiv.left = '90%';
            ClockDiv.transform = 'translate(0%)';
            break;
        case "3" ://Center Left
            ClockDiv.position = 'absolute';
            ClockDiv.top = '50%';
            ClockDiv.left = '0%';
            ClockDiv.transform = 'translate(0%, -50%)';
            break;
        case "4" ://Center Center
            ClockDiv.position = 'absolute';
            ClockDiv.top = '50%';
            ClockDiv.left = '50%';
            ClockDiv.transform = 'translate(-50%, -50%)';
            break;
        case "5" ://Center right Doesn't work
            ClockDiv.position = "absolute";
            ClockDiv.top = '50%';
            ClockDiv.right = '0%';
            ClockDiv.transform = 'translate(0%, -50%)';
            break;
        case "6" ://bottom Left
            ClockDiv.position = 'absolute';
            ClockDiv.top = '100%';
            ClockDiv.left = '0%';
            ClockDiv.transform = 'translate(0%, -100%)';
            break;
        case "7" ://Bottom Center
            ClockDiv.position = 'absolute';
            ClockDiv.top = '100%';
            ClockDiv.left = '50%';
            ClockDiv.transform = 'translate(-50%, -100%)';
            break;
        case "8" ://Bottom right Doesn't work
            ClockDiv.position = 'absolute';
            ClockDiv.top = '100%';
            ClockDiv.right = '0%';
            ClockDiv.transform = 'translate(0%, -100%)';
            break;
        default:
            ClockDiv.position = 'absolute';
            ClockDiv.top = '0%';
            ClockDiv.left = '50%';
            ClockDiv.transform = 'translate(0%, -50%)';
            break
   }
}