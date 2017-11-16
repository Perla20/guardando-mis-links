var area = document.getElementById('insert-links');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click', function(event) {
  // console.log(event.target);
  // console.log(event.currentTarget);
  if (area.value) {
    var li = document.createElement('li');
    var link = document.createElement('a');

    link.setAttribute('href', '#');

    link.textContent = area.value;

    li.appendChild(link);

    lista.appendChild(li);

    area.value = '';
  }
});
