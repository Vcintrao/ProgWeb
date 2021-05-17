function displayPicture(element){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="url('"+element.src+"')";

    var txt = document.getElementById("textofoto");

    if(element.id == "imgVitorEu") {
        txt.setAttribute('data-value', texto[0]);
    }
    else if(element.id == "imgVitorTusca") {
        txt.setAttribute('data-value', texto[1]);
    }
    else if(element.id == "imgVitorVm") {
        txt.setAttribute('data-value', texto[2]);
    }
    else {
        txt.setAttribute('data-value', "");
    }
}

function undisplayPicture(){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="none";

    var txt = document.getElementById("textofoto");
    txt.setAttribute('data-value', "");
}

const texto = [
    "Uma das minhas fotos favoritas, uso ela sempre que preciso fazer um perfiil novo. Foi tirada no Museu da Arte Sacra.",
    "Foto tirada no Tusca de 2018. Foi o meu primeiro Tusca e neste momento tinha encontrado meus amigos depois de muito tempo perdido.",
    "Essa foto foi tirada quando recebi minha fantasia para o desfile do carnaval de São Paulo 2019. Desfilei pela Unidos de Vila Maria na bateria, foi incrível!"
]

function displayThis(element){
    document.getElementById("texto").innerHTML = element.innerHTML;
}