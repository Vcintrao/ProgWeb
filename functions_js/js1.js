function message(msg){
    document.getElementById('output').innerHTML = msg + ' event';
}

function useInline(){
    const array = document.getElementsByClassName("display");
    for (var i = 0; i < array.length; i++){
        array[i].style.display = "inline";
    }
}

function useBlock(){
    const array = document.getElementsByClassName("display");
    for (var i = 0; i < array.length; i++){
        array[i].style.display = "block";
    }
}

function useNone(){
    const array = document.getElementsByClassName("display");
    for (var i = 0; i < array.length; i++){
        array[i].style.display = "none";
    }
}