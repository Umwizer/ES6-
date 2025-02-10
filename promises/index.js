
//Promise = an object that manages asynchronous operations.
//Wrap a Promise Object around {Asynchronous code}
//"I promise to return avalue"
//Pending -> Resolved or rejected
//new promise((resolve,reject)=>{Asynchrous code})

// Do these chores in order
//1. walk the dog

function walkDog(){
   
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("you walk the dog");
            
        },1500)
    });
}
//2. clean the kitchen
function cleanKitchen(){
   
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
        resolve("you clean the kitchen");
        },2500)
    })
}
//3.take out of the trash
function takeOutTrash(){
    
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        resolve("you take out the trash");
        },500)
    })
}
walkDog().then(value => {Console.log(value); return cleanKitchen()})
.then(value =>{console.log(value); return takeOutTrash()})
.then(value => console.log(value)); 
