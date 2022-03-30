let modalQt = 1

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);

  // preencher as informações em pizzaitem abaixo

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    let Key = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQt = 1;

    c('.pizzaBig img').src = pizzaJson[Key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[Key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[Key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[Key].price.toFixed(2)}`;
    c('.pizzaInfo--size.selected').classList.remove('selected');
    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add('selected');
      }
      size.querySelector('span').innerHTML = pizzaJson[Key].sizes[sizeIndex];
    });

    c('.pizzaInfo--qt').innerHTML = modalQt;

    c('.pizzaWindowArea').style.opacity = 0;
    c('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200)
  });

  c('.pizza-area').append(pizzaItem);

});

// Eventos do MODAL
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButtton').forEach((item) => {
  item.addEventListener('click', closeModal);
});