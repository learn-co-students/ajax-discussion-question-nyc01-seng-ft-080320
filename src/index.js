const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const fetchData = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json()).then(data => createPerson(data['results'][0]))
      
  }

  fetchData()
  const createPerson = personObj => {
    const profilePic = document.querySelector('#profile_picture')
    profilePic.src = personObj.picture.thumbnail

    const fullName = document.querySelector('#fullname')
    fullName.innerText = `${personObj.name.first} ${personObj.name.last} ${personObj.name.title}`

    const email = document.querySelector('#email')
    email.innerText = personObj.email

    const street = document.querySelector('#street')
    street.innerText = personObj.location.street.name


    const city = document.querySelector('#city')
    city.innerText = personObj.location.city


    const state = document.querySelector('#state')
    state.innerText = personObj.location.state

  
    const postcode = document.querySelector('#postcode')
    postcode.innerText = personObj.location.postcode

    const cell = document.querySelector('#cell')
    cell.innerText = personObj.cell

    const phone = document.querySelector('#phone')
    phone.innerText = personObj.phone

    const dob = document.querySelector('#date_of_birth')
    dob.innerText = personObj.dob.date
  }

});




//   <label for="email">
//     Email:
//   </label>
//   <h4 id="email"></h4>

// </div>
// </div>

// <div class="row align-items-center">
// <div class="col">

//   <label for="street">Street:</label>
//   <h4 id="street"></h4>

//   <label for="city">City:</label>
//   <h4 id="city"></h4>

//   <label for="state">State:</label>
//   <h4 id="state"></h4>

//   <label for="postcode">Post Code:</label>
//   <h4 id="postcode"></h4>

// </div>

// <div class="col">

//   <label for="phone">Phone:</label>
//   <h4 id="phone"></h4>

//   <label for="cell">Cell:</label>
//   <h4 id="cell"></h4>

// </div>

// <div class="col">

//   <label for="date_of_birth">Date of Birth:</label>
//   <h4 id="date_of_birth"></h4>

// </div> */