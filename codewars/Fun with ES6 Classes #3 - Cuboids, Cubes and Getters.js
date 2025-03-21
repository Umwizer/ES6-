// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// Task
// Define the following classes.

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

class Cuboid{
  constructor(length,width,height){
    this.length=length,
    this.width=width,
    this.height=height
  }
  get surfaceArea(){
    return 2 * (this.length * this*this.width + this.length*this.height + this.height*this.width)
  }
  get Volume(){
    return this.length*this.width*this.height
  }
}


// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

class Cube extends Cuboid{
    constructor(length){
        super(length,length,length)
    }
}
// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
