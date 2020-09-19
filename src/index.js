const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  clickHandler();
});

clickHandler = () => {
  document.addEventListener('click', e =>{
    if (e.target.classList.contains("btn-primary")){
      console.log("hit button")
      fetchRequest()
    }
  })
};

fetchRequest = () => {
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then( data => renderData(data) );
};

renderData = (person) => {
  currentPerson = person["results"][0];
  console.dir(currentPerson)
    
  document.getElementById("cell").textContent = currentPerson.cell
    
  let location = currentPerson.location
  document.getElementById("street").textContent = location.street.number + " " + location.street.name

  document.getElementById("city").textContent = location.city
  
  document.getElementById("state").textContent = location.state
  
  document.getElementById("postcode").textContent = location.postcode
  
  let nom = currentPerson.name
   document.getElementById("fullname").textContent = `${nom.title} ${nom.first} ${nom.last}`
  document.getElementById("phone").textContent = currentPerson.phone
  document.getElementById("email").textContent = currentPerson.email
  document.getElementById("date_of_birth").textContent = currentPerson.dob.date
  document.getElementById("profile_picture").src = currentPerson.picture.large
}
