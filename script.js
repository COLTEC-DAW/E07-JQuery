$(document).ready(function(){
    for(var i = 0; i < 16; i++){
      var div = document.createElement("div")
      var id = document.createAttribute("id")
      var classe = document.createAttribute("class")
      classe.value = "col-2 offset-1 my-4"
      id.value = i
      div.style.backgroundColor = "#808080"
      div.setAttributeNode(id)
      div.setAttributeNode(classe)
      if(i%4==1){
      var element = document.getElementById("row1")
    } else if (i%4==2) {
      var element = document.getElementById("row2")
    } else if (i%4==3) {
      var element = document.getElementById("row3")
    } else{
      var element = document.getElementById("row4")
    }
      element.appendChild(div)
    }
});

$(document).ready(function(){
  var sequencia = []
  var NumPares = 0
  for(var x = 16; x > 0; x--){
    var random = getRndInteger(0,x)
    sequencia.push(arrayID[random])
    arrayID.splice(random, 1)
  }
  var clicados = []
  var cores = []
  $('div').click(function() {

    if(!($(this).attr('id')=="container")&&!($(this).attr('id')=="row1")&&!($(this).attr('id')=="row2")&&!($(this).attr('id')=="row3")&&!($(this).attr('id')=="row4")){
      clicados.push($(this).attr('id'))
    }
    $(this).css("background-color", sequencia[$(this).attr('id')])

    if(clicados.length > 1){
      if(sequencia[clicados[0]]==sequencia[clicados[1]]){
        NumPares++
      } else{
          $("#"+clicados[0]).css("background-color", "#808080")
          $("#"+clicados[1]).css("background-color", "#808080")
      }
      clicados = []
    }
    if(NumPares==8){
      alert("VENCEU")
    }
  });

});

  var arrayID = ["orange","red","blue","green","purple","pink", "black","yellow", "orange","red","blue","green","purple","pink", "black","yellow"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
