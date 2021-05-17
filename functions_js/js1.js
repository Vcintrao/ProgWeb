function displayPicture(element){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="url('"+element.src+"')";
}

function undisplayPicture(){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="none";
}