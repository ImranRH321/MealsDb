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

// 0 // search inter key ar button //

// search_button
document.getElementById("search_button").addEventListener("click", (e) => {
  totalDataProceeing(8);
});

// enter key
document.getElementById("inputSearchText").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    totalDataProceeing(8);
  }
});

//1. search name daynalic variable set load data .
const loadMealDbData = async (searchName, limitData) => {
  console.log(searchName);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
  );
  const data = await res.json();
  displayMealsData(data.meals, limitData);
};

//2. display data show data
const displayMealsData = (meals, limitData) => {
  const showBtnContainer = document.getElementById("show-btn-container");
  if (limitData && meals.length > 8) {
    meals = meals.slice(0, 8);
    showBtnContainer.classList.remove("d-none");
  } else {
    showBtnContainer.classList.add("d-none");
  }

  const container = document.getElementById("pContainer");
  container.textContent = "";
  const htmlContainer = meals.map((obMeal) => showDisplay(obMeal));
  container.innerHTML = htmlContainer.join(" ");
};

const showDisplay = (obMeal) => {
  const { strArea, strMealThumb, idMeal, strMeal } = obMeal;
  //   div click handler details id
  return `
  <div onclick="mealsDetailsProductOrFood('${idMeal}')" class="col-sm-6 col-12  col-md-3  col-lg-4   border  text-black  p-3 shadow-lg hover:bg-white hover:text-black " style="width:250px; height:auto"
  data-bs-toggle="offcanvas"
data-bs-target="#offcanvasExample"
 aria-controls="offcanvasExample"
  >

  <img class="img-fluid mx-auto rounded" src=${strMealThumb} alt="" />
  <h4 class="md:font-bold my-3">${strMeal.slice(0, 9)}</h4></div>

 `;
};

const mealsDetailsProductOrFood = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  mealDetailsDisplayData(data.meals[0]);
};

const mealDetailsDisplayData = (meals) => {
  const { strArea, strMealThumb, idMeal, strMeal, strYoutube } = meals;
  const bodyModal = document.getElementById("bodyModal");
  bodyModal.innerHTML = `
    <img class="img-fluid mx-auto rounded" src=${strMealThumb} alt="" />
  <h4 class="md:font-bold my-3">${strMeal.slice(0, 9)}</h4></div>
  <video width="320" height="240" controls autoplay>
  <source src=${strYoutube} type="video/mp4">
</video>
    `;
};

// 4 show button click all data load display.
document.getElementById("show-btn-container").addEventListener("click", () => {
  alert("show");
  totalDataProceeing();
});

//  common use //
const totalDataProceeing = (limitData) => {
  const inputSearch = document.getElementById("inputSearchText");
  const searchName = inputSearch.value;
  if (!searchName) return;
  loadMealDbData(searchName, limitData);
  //   inputSearch.value = ""; problem one not show data //
};
