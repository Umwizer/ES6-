// Quiz Question
// Take a look at the following code:

// function shippingLabel(name, address) {
//   name = (typeof name !== 'undefined') ? name : 'Richard';
//   address = (typeof address !== 'undefined') ?  address : 'Mountain View';
//   return `To: ${name} In: ${address}`;
// }
// Which of the following choices is the correct way to write the shippingLabel() function using default function parameters?





function shippingLabel(name = 'Ruth ' , address ='Kigali'){
    return `To:${name}In ${address}`
}
console.log(shippingLabel())