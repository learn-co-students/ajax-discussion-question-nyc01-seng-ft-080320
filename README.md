# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code list the order of console.logs:

```javascript
console.log("Hello") (1)

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") (3)
  })

console.log("Sup?") (2)
```

### Question 2

When fetchData is executed what will be console logged?
returns first promise 
```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/') 
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()
```

What will be console logged when the following code is run? Why?
The data objects will be returned
```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()
```

What will be console logged when the following code is run? Why?
An error.
```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
```

### Question 3

In your own words: what does asynchronous mean?

Data that is being rendered to the web page at different times outside of the code order.

### Question 4

Write out the request and response cycle. What is its purpose? How does it work?

* Make an http GET request using fetch() to the api
* Take the promise result and convert to JSON
* Use .then method to render last promise's result into useable data objects

### Question 5

Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).

const fetchData = () => {
  fetch('https://randomuser.me/api/')
  .then(res => console.log(res.json()))
}
Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
