let pedras = document.getElementsByClassName("pedra")
let combinations = ["A", "A","B", "B"]
let current =0;
let aberto = [];

$("document").ready(function(){
    for(let i = 0;i<pedras.length;i++){
        $(pedras[i]).css("background-color","yellow");
        $(pedras[i]).css("height","300px");
        $(pedras[i]).css("width","300px");
        pedras[i].estado = false;
        pedras[i].value = combinations[i];
        pedras[i].solved = true;
    }
    for(let i = 0;i<pedras.length;i++){
        $(pedras[i]).click(function(){
            if(this.estado==false){
                $(this).css("background-color","blue");
                this.estado = true
                aberto.push(this)
                if(aberto.length==2){
                    for(pedra of aberto){
                        $(this).css("background-color","yellow");
                    }
                    aberto = []
                }
            } else {
                
                $(this).css("background-color","yellow");
                this.estado = false
            }
        })
    }
})