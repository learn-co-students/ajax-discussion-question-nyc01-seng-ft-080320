const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


//---------------------------------------------------//
const baseUrl = 'https://randomuser.me/api/'

document.addEventListener('DOMContentLoaded', e => {

  const submitHandler = () => {
    const submitButton = document.querySelector('.btn')
    
    submitButton.addEventListener('click', e => {
      getApiData()
    })
  }

  const getApiData = () => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(data => {
      renderPerson(data.results[0])
    })
  }

  const renderPerson = (data) => {
      const name = data.name.first + " " + data.name.last
      const email = data.email
      const street = data.location.street.number + " " + data.location.street.name
      const city = data.location.city
      const phone = data.phone
      const birthDate = data.dob.date
      const state = data.location.state
      const cell = data.cell
      const postcode = data.postcode
      const image = data.picture.large

      renderName(name)
      renderEmail(email)
      renderStreet(street)
      renderCity(city)
      renderImage(image)
  }

  const renderName = name => {
    const header = document.querySelector('#fullname')
    header.textContent = name
  }
  
  const renderEmail = email => {
    const header = document.querySelector('#email')
    header.textContent = email
  }

  const renderStreet = street => {
    const header = document.querySelector('#street')
    header.textContent = street
  }

  const renderCity = city => {
    const header = document.querySelector('#city')
    header.textContent = city
  }

  const renderImage = image => {
    const img = document.querySelector('#profile_picture')
    img.src = image
  }

  submitHandler()


})