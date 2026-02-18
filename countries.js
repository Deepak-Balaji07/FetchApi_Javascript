//countries:

// function Search() {
//   let name = document.getElementById("Cname").value.trim();

//   fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then((res) => res.json())
//     .then((data) => display(data))
//     .catch((error) => console.log(error));
// }

// function display(data) {
//   let res = "";
//   let countries = data;
//   let displaydetails = document.getElementById("display");

//   displaydetails.innerHTML = ""
//   countries.forEach((country) => {
//     const countryname = country.name.common;
//     const cap = country.captial ? country.capital[0] : "no capital";
//     const flag = country.flags.png
//     res += `
//         <div>
//         <h1>${countryname}</h1>
//         <p>${cap}</p>
//         <p>${flag}</p>
//         </div>
//         `;
//   });
//   displaydetails.innerHTML = res;
// }

// function searchMeal() {
//   const input = document.getElementById("mealInput").value.trim();
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
//     .then((res) => res.json())
//     .then((data) => displaymeals(data.meals));
// }

// function displaymeals(meals) {
//   let res = "";
//   let displaydetails = document.getElementById("display");
//   displaydetails.innerHTML = "";

//   meals.forEach((meal) => {
//     if (!meals) {
//       display.innerHTML = "<p>No meals found</p>";
//       return;
//     }
//     const mealname = meal.strMeal;
//     res += `
//         <div>
//         <p>${mealname}</p>
//         <img src="${meal.strMealThumb}" width="180">
//         </div>`;
//   });

//   displaydetails.innerHTML = res;
// }

function searchMeal() {
  const ingredient = document.getElementById("mealInput").value.trim();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.meals) {
        document.getElementById("display").innerHTML = "no meals found";
        return;
      }
      fetchmeals(data.meals[0].idMeal);
    })
    .catch(error => console.log(error))
}

function fetchmeals(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      displaymeals(data.meals[0]);
    });
}

function displaymeals(meals) {
  let html = "<ul>";

  for (let i = 1; i < 20; i++) {
    const Ingredient = meals[`strIngredient${i}`];
    const measure = meals[`strMeasure${i}`];

    if (Ingredient && Ingredient.trim() !== "") {
      html += `<li>${Ingredient}--${measure}</li>`;
    }
  }

  html += "</ul>"
  document.getElementById("display").innerHTML = html
}
