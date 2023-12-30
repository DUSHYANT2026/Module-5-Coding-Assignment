
const menuCategories = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];

function handleSpecialsClick() {

  const randomIndex = Math.floor(Math.random() * menuCategories.length);

  const randomCategory = menuCategories[randomIndex];

 
  redirectToSingleCategoryPage(randomCategory);
}


function redirectToSingleCategoryPage(category) {
}
