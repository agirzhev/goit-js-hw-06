const input = document.querySelector('#font-size-control');

input.addEventListener('input', function (event) {
  
  document.getElementById('text').style.fontSize = `${event.currentTarget.value}px`

}  
);
