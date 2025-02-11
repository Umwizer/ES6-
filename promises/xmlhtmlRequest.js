// "Write a JavaScript Promise that uses XMLHttpRequest to fetch a file named mycar.html. If the request is successful, resolve the Promise with the response. If the request fails (e.g., file not found or network error), reject the Promise with an appropriate error message. Also,
// " handle the resolved and rejected cases using a function named myDisplayer."


let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
  
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not found");
      }
    };
  
    req.onerror = function() {
      myReject("Network error occurred");
    };
  
    req.send();
  });
  
  // Define myDisplayer function
  function myDisplayer(value) {
    console.log(value); // You can modify this to display in a webpage
  }
  
  // Handling the promise correctly
  myPromise
    .then(myDisplayer)
    .catch(myDisplayer);
  