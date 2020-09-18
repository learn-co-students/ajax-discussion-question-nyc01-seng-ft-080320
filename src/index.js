const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {

const clickHandler = () => {
  document.addEventListener("click", (e) => {
    if(e.target.className === "btn btn-primary") {
      fetchNewPerson();
    }
  })
}

function fetchNewPerson(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( person => {
      renderPerson(person.results[0]);
    })
}

const renderPerson = personObj => {
  console.log(personObj)

  const image = personObj.picture.large;
  document.querySelector("#profile_picture").src = image;
  
  const name = `${personObj.name.title}. ${personObj.name.first} ${personObj.name.last}`
  document.querySelector("#fullname").innerText += name;

  const city = personObj.location.city
  document.querySelector("#city").innerText += city;

  const state = personObj.location.state
  document.querySelector("#state").innerText += state;

  const zip = personObj.location.postcode
  document.querySelector("#postcode").innerText += zip;

  const street = `${personObj.location.street.number} ${personObj.location.street.name}`
  document.querySelector("#street").innerText += street;

  const phone = personObj.location.phone
  document.querySelector("#phone").innerText += phone;

}


clickHandler();

});
