/*
 0.search inter key ar button
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
search name daynalic variable set load data
display show data
4. product details daynamic id load data url
www.themealdb.com/api/json/v1/1/lookup.php?i=52772
5. show button jodi  15 kom hoby taile dekbbe;
6 show button click all data load display. 

error
1. data jodi na take bole eror message show
2 spinner loading

*/

// search_button click
document.getElementById("search_button").addEventListener("click", (e) => {
  totalDataProceeing(6);
});

// enter key value
document.getElementById("inputSearchText").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    totalDataProceeing(6);
  }
});

//1. search name dynamic variable set load data .
const loadMealDbData = async (searchName, limitData) => {
  console.log(searchName);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
  );
  const data = await res.json();
  if (!data) {
    alert("data nai empty");
    return;
  }
  displayMealsData(data.meals, limitData);
};

//2. display data show data
const displayMealsData = (meals, limitData) => {
  const disError = document.getElementById("errorMessge");
  if (meals === null || meals.length === 0) {
    //
    const container = document.getElementById("pContainer");
    container.textContent = "";
    //
    const showBtnContainer = document.getElementById("show-btn-container");
    showBtnContainer.classList.add("d-none");
    //
    disError.classList.remove("d-none");
    spinnerLoading(false);
  } else {
    disError.classList.add("d-none");
  }

  const showBtnContainer = document.getElementById("show-btn-container");
  if (limitData && meals.length > 6) {
    meals = meals.slice(0, 6);
    showBtnContainer.classList.remove("d-none");
  } else {
    showBtnContainer.classList.add("d-none");
  }

  const container = document.getElementById("pContainer");
  container.textContent = "";
  const htmlContainer = meals.map((obMeal) => showDisplay(obMeal));
  container.innerHTML = htmlContainer.join(" ");
  //  stop lading
  spinnerLoading(false);
};

const showDisplay = (obMeal) => {
  const { strArea, strMealThumb, idMeal, strMeal } = obMeal;
  //   div click handler details id
  return `
  <div onclick="mealsDetailsProductOrFood('${idMeal}')" class="col-sm-6 col-12  col-md-4 bg-dark  gap-3  text-white  shadow-lg  " 
  data-bs-toggle="offcanvas"
data-bs-target="#offcanvasExample"
 aria-controls="offcanvasExample"
  >
  <div class=" border-danger border my-4 bg-info text-dark justHover">
  
  <img style="width:400px;height:300px;" class="img-fluid mx-auto rounded" src=${strMealThumb} alt="" />
  <h4 class="md:font-bold px-2 my-3">${strMeal.slice(0, 9)}</h4></div>
  </div>
  </div>
 `;
};

const mealsDetailsProductOrFood = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  mealDetailsDisplayData(data.meals[0]);
};

// Details Modal
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
  totalDataProceeing();
});

//  common use //
const totalDataProceeing = (limitData) => {
  const inputSearch = document.getElementById("inputSearchText");
  const searchName = inputSearch.value;
  if (!searchName) return;
  spinnerLoading(true);

  loadMealDbData(searchName, limitData);
  //   inputSearch.value = ""; problem one not show data //
};

// spinner loading .
const spinnerLoading = (isLoading) => {
  const spinner_div = document.getElementById("spinner_div");
  if (isLoading) {
    spinner_div.classList.remove("d-none");
  } else {
    spinner_div.classList.add("d-none");
  }
};
