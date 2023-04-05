/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
personalInfo.name = 'Nelson Muchonji';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
personalInfo.photo = 'images/iamness.png';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
personalInfo.favouriteFoods = ['chapati', 'byriani', 'pilau'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
personalInfo.hobbies = ['coding', 'football', 'swimming', 'singing'];
// Step 6: Add another property named placesLived with a value of an empty array
personalInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
personalInfo.placesLived.push({place: '', length:''})
// Step 8: For each property, add appropriate values as strings
personalInfo.placesLived[0].place = 'Bungoma, Kenya';
personalInfo.placesLived[0].length = '8years';
// Step 9: Add additional objects with the same properties for each place you've lived
personalInfo.placesLived.push({place: 'Eldoret, Kenya', length:'4years'});
personalInfo.placesLived.push({place: 'Accra, Ghana', length:'2years'});
personalInfo.placesLived.push({place: 'Kuala Lumpur, Malaysia', length:'1month'});
personalInfo.placesLived.push({place: 'Machame, Tanzania', length:'1month'});
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = personalInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = personalInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = personalInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodList = personalInfo.favouriteFoods.map(food=>{
  let liElement = document.createElement("li");
  liElement.textContent = food;
  return liElement;
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
foodList.forEach(liElem=>document.getElementById("favorite-foods").appendChild(liElem));
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbyList = personalInfo.hobbies.map(hobby=>{
  let liElement = document.createElement("li");
  liElement.textContent = hobby;
  return liElement;
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbyList.forEach(liElem=>document.getElementById("hobbies").appendChild(liElem));
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLivedList = personalInfo.placesLived.map(placeLived=>{
  let dtPlace = document.createElement("dt");
  dtPlace.appendChild(document.createTextNode(placeLived.place));
  let ddLength = document.createElement("dd");
  ddLength.appendChild(document.createTextNode(placeLived.length));
  return {dtPlace, ddLength};
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
placesLivedList.forEach(placeLived=>{
  let placesLived = document.getElementById("places-lived");
  placesLived.appendChild(placeLived.dtPlace);
  placesLived.appendChild(placeLived.ddLength);
});