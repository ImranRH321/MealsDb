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


const loadMealDbData = async (searchName) => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    const data = await res.json();
    const mealsData = data.meals[0]
    console.log(data);
    console.log(mealsData);
}
loadMealDbData()
