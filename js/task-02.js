const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recipe = document.querySelector('#ingredients');
const makeItemEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});

recipe.append(...makeItemEl);