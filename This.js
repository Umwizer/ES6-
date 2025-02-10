function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++;
      console.log('scoop added!');
    }, 500);
  };
  
  const desserts = new IceCream();
  dessert.addScoop();

  // output: scoop added!

  console.log(desserts.scoops)
  //output:0

  console.log(scoop)

  //output:NaN


//   The code above will work because instead of using this inside the function, it sets the cone variable to this 
//   and then looks up the cone variable when the function is called. This works because it's using the value of 
//   the this outside the function. So if we check the number of scoops in our dessert right now, we'll see the correct value of 1:

  // constructor
function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log('scoop added!');
    }, 0.5);
  };
  
  const dessert = new IceCream();
  dessert.addScoop();
  console.log(dessert.scoops)

  //ouptut:1


//   Well that's exactly what arrow functions do, so let's replace the function passed to setTimeout() with an arrow function:
