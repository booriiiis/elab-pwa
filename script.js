(function() {
  const cardHTML = `\
<div class="col">
    <div class="card" style="width: 18rem;">
        <img
        class="card-img-top"
        src="%link-slika%"
        />
        <div class="card-body">
            <h5 class="card-title">%naslov%</h5>
            <p class="card-text">
            %opis%
            </p>
            <hr>
            <a href="%link-slika%" target="_blank" class="btn btn-primary">Otvori sliku</a>
        </div>
    </div>
</div>`;

  function getInputs() {
    return {
      opis: document.querySelector("#opis"),
      naslov: document.querySelector("#naslov"),
      slika: document.querySelector("#link-slika")
    };
  }

  function resetInputs() {
    let inputs = getInputs();
    for (let key in inputs) inputs[key].value = "";
  }

  function addToDOM(data) {
    let container = document.querySelector("#container-cards");
    let card = cardHTML.replace("%link-slika%", data.slika.value);
    card = card.replace("%link-slika%", data.slika.value);
    card = card.replace("%opis%", data.opis.value);
    card = card.replace("%naslov%", data.naslov.value);
    container.insertAdjacentHTML("beforeend", card);
  }

  let btnSacuvaj = document.querySelector("#sacuvaj");
  btnSacuvaj.addEventListener("click", function() {
    let inputs = getInputs();
    if (
      inputs.opis.value.length > 0 &&
      inputs.slika.value.length > 0 &&
      inputs.naslov.value.length > 0
    )
      addToDOM(inputs);

    resetInputs();
  });

  document.querySelector("#odbaci").addEventListener("click", resetInputs);
})();
