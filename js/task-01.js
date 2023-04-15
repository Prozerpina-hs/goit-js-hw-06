const numberOfCategories = document.querySelectorAll('.item');

console.log("Number of categories:", numberOfCategories.length);

const categoriesList = document.querySelector('#categories');

categoriesList.querySelectorAll('li.item').forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryName}`)
  console.log(`Elements: ${ categoryItemsCount }`);
});