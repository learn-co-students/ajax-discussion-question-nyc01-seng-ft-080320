const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  // fetch('https://randomuser.me/api/')
  // .then(resp => resp.json())
  // .then(person => renderPerson(person.results[0]));
  crud_server('https://randomuser.me/api/', renderPerson)
});
function renderPerson(person){
  console.log("person from server", person);

}

function crud_server(url, callbackFunc, options=null){
  if (options!=null){
    fetch(url, options)
    .then(resp => resp.json())
    .then(json => callbackFunc(json));
  }else{
    fetch(url)
    .then(resp => resp.json())
    .then(json => callbackFunc(json));
  }
}