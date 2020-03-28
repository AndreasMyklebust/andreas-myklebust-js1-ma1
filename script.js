//question 1

const cat = {
   complain: function() {
      console.log("Meow!");
   }
};

//question 2

const heading = document.querySelector("h3");

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");

//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

//question 7

const cats = [
   {
      name: "Blob",
      age: 10
   },
   {
      name: "Harold"
   },
   {
      name: "Blurt",
      age: 21
   }
];

function catArray() {
   for (let i = 0; i < cats.length; i++) {
      console.log(cats[i].name);
   }
}

catArray();

//question 8

let catHeading = "";
function catArrayHTML() {
   for (let i = 0; i < cats.length; i++) {
      nameHeading = `<h5>${cats[i].name}</h5>`;

      catHeading += nameHeading;
   }
}

//question 9

catArrayHTML();

resultsContainer.innerHTML = catHeading;

//question 10

function catArrayHTML() {
   for (let i = 0; i < cats.length; i++) {
      let ageValue = "Age unknown";

      if (cats[i].age) {
         ageValue = cats[i].age;
      }

      nameHeading = `<div>
                         <h5>${cats[i].name}</h5>
                         <p>${ageValue}</p>
                     </div>`;
      catHeading += nameHeading;
   }
}
