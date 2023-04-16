// search inter key ar button
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// search name daynalic variable set load data
// display show data
// 4. product details daynamic id load data url
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// error
// 1. data jodi na take bole eror message show
// 2 spinner loading
// 3. show button jodi  15 kom hoby taile dekbbe;
// 4 show button click all data load display.

//1. search name daynalic variable set load data .
const loadMealDbData = async (searchName) => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=fish"
  );
  const data = await res.json();
  displayMealsData(data.meals);
};
loadMealDbData();

//2. display data show data
const displayMealsData = (meals) => {
  // console.log(meals);
  const container = document.getElementById("pContainer");
  const htmlContainer = meals.map((obMeal) => showDisplay(obMeal));
  container.innerHTML = htmlContainer.join(" ");
};

const showDisplay = (obMeal) => {
  //   console.log(obMeal);
  const { strArea, strMealThumb, idMeal, strMeal } = obMeal;
  //   div click handler
  return `
  <div onclick="mealsDetailsProductOrFood('${idMeal}')" class="col-sm-6 col-12  col-md-3  col-lg-4   border  text-black  p-3 shadow-lg hover:bg-white hover:text-black " style="width:250px; height:auto">

  <img class="img-fluid mx-auto rounded" src=${strMealThumb} alt="" />
  <h4 class="md:font-bold my-3">${strMeal.slice(0, 9)}</h4></div>

 `;
};

const mealsDetailsProductOrFood = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data.meals[[0]]);
};
