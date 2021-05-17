function displayPicture(element){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="url('"+element.src+"')";
}

function undisplayPicture(){
    const frame = document.getElementById("framevitor");
    frame.style.backgroundImage="none";
}

const texto = [
    "Uma das minhas fotos favoritas, uso ela sempre que preciso fazer um perfiil novo. Foi tirada no Museu da Arte Sacra.",
    "Foto tirada no Tusca de 2018. Foi o meu primeiro Tusca e neste momento tinha encontrado meus amigos depois de muito tempo perdido.",
    "Essa foto foi tirada quando recebi minha fantasia para o desfile do carnaval de São Paulo 2019. Desfilei pela Unidos de Vila Maria na bateria, foi incrível!"
]

function displayThis(element){
    document.getElementById("texto").innerHTML = element.innerHTML;
}