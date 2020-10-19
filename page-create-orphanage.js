// Create map
const map = L.map("mapid").setView([-27.2221788, -49.6482606], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  // add icon Layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Adicionar o campo de fotos
function addPhotoField() {
  // Pegar o container de fotos #images
  const container = document.querySelector("#images");

  // Pegar o container para duplicar .new-ibagem
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Realizar o clone da última ibagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verificar se o campo está vazio, se sim, não adicionar ao container de images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // Limpar o campo antes de adicionar ao container de images
  input.value = "";

  // Adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    // Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // Deletar o campo
  span.parentNode.remove();
}

// Select yes or no
function toggleSelect(event) {
  // Retirar a class .active (dos botões)
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  }); // ou.. forma simplificada, porém avançada (button => button.classList.remove('active'))

  // Colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // Atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"');

  input.value = button.dataset.value;
}

function validate(event) {
  // Validar se lat e lng estão preenchidos
  const needsLatAndLng = false; // Descobrir como fzer input value vazio, 
  if(needsLatAndLng) {
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  }
  
}
