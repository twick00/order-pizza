$(document).ready(function() {
  var getSize = function() {
    var size = $('input[name="pizza-size"]:checked').val();
    console.log(size)
    return size;
  }
  var getTopping = function() {
    var topping = $('input[name="toppings"]:checked').map(function(index, toppingElement) {
      return $(toppingElement).val();
      //after console topping, it came back as an jquery object
    });
    topping = topping.toArray();
    //converting it back to a js array instead of jquery object
    console.log(topping)
    return (topping);
  }
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    //create new vars
    var pizzaSize = getSize(); //functions will be ran there
    var pizzaTopping = getTopping();

  });
});
