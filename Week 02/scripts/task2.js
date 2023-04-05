/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullName = "Nelson Muchonji";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = fullName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear =  new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const profile = "images/nelsonProfile.png"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', profile);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const faveFood = ["Pilau", "Chapati", "Biryani", "Chicken", "Rice"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = faveFood;

// Step 3: declare and instantiate a variable to hold another favorite food
const newFave = "Potato";

// Step 4: add the variable holding another favorite food to the favorite food array
faveFood.push(newFave);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = faveFood;

// Step 6: remove the first element in the favorite foods array
const newList = faveFood.slice(1);

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = newList;

// Step 8: remove the last element in the favorite foods array
const availableFoods = faveFood.slice(0, -1);

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = availableFoods;


