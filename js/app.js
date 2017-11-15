var area = document.getElementById("insert-links");
var boton = document.getElementById("save");
var lista = document.getElementById("container-links");
boton.addEventListener("click",function(event){
  // verifico que hay texto
  if(area.value){
    // creamos li contenedor es li y queremos que sea link y un ancor
    var li = document.createElement("li");
    var link=document.createElement("a");
    link.setAttribute("href","#");
    link.texContent = area.value;

    li.appendChild(link);
    lista.appendChild(li);
    // el value te tra el contenido
    area.value= " ";
  }
  // console.log(event.target);
});
