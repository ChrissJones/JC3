/*MEDIUM: Write a function that would allow you to do this:

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));                                                                                                                                                                    

  // prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3)); 

  // prints "Each person gets 2.67 slices of pizza"*/

  
  function cutPizzaSlices(pizzaSlices){
    return function(person){
        var slicesPerPerson = pizzaSlices / person
        return (`Each person gets ${slicesPerPerson} slices of pizza`)
    }
}

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(3)); 
console.log(sharePizza(2));