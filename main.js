const primeiro = 12; //numero aleatório
const segundo = 23; //numero aleatório
var estado = primeiro;

var pontos = 0; //máximo é 8
var anterior; //objeto anterior para ser comparado

function sleep (time) { //funcao do stackoverflow
    return new Promise((resolve) => setTimeout(resolve, time));
}

function acertou(o,a){
    sleep(1500).then(() => {
        $(o).css("filter","opacity(0)");
        $(a).css("filter","opacity(0)");
        pontos=pontos+1;
        if(pontos==8){
            venceu();
        }
    });
}
function nAcertado(o){
    if($(o).css("filter") == "opacity(0)"){ return false }
    else { return true; }
}
function venceu(){
    alert("venceu");
}

function clique(objeto){
if(pontos<8 && nAcertado(objeto)){
    if(estado==primeiro){        
        $(objeto).css("filter","brightness(1)");
        estado=segundo;
        anterior=objeto;
    }
    else if(estado==segundo){
        if(objeto==anterior){
            $(objeto).css("filter","brightness(0)");
            estado=primeiro;
        }
        else {
            $(objeto).css("filter","brightness(1)");
            
            if(objeto.src == anterior.src){ //acertou
                acertou(objeto,anterior);
            }
            else{
                sleep(1000).then(() => {
                    $(objeto).css("filter","brightness(0)");
                    $(anterior).css("filter","brightness(0)");
                });
            }
            estado=primeiro;
        }
    }
}
}
