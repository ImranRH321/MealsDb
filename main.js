// search inter key ar button
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// search name daynalic variable set load data
// display data show data
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
  const { strArea, strMealThumb, strYoutube, strMeal } = obMeal;
  return `
  <div class="border border-indigo-600 bg-sky-500/50 text-black rounded p-3 shadow-lg hover:bg-white hover:text-black ">
  <img class="w-[50%] h-[200px] sm:w-[250px] skew-y-6" src=${strMealThumb} alt="" />
  <h4 class="font-bold my-3">${strMeal}</h4>
  </div>
 `;
};
