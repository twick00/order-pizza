$(document).ready(function() {
  // Returns the value of the pizza size radio group
  var getSize = function() {
    var size = $('input[name="pizza-size"]:checked').val();
    console.log(size)
    return size;
  }

  // Returns the value of the pizza toppings
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

//object constructor funtion
  function Pizza(topping, size) {
    this.topping = topping;
    this.size = size;
  }

//create pizzaCostrunning funtion with if statments
  Pizza.prototype.pizzaCost = function() {
    var cost = 5;
    if (this.size == 'medium') {
      cost += 2;
    } else if (this.size == 'large') {
      cost += 4;
    }


    if (this.topping.length == 2) {
      cost += 2;

    } else if (this.topping.length == 3) {
      cost += 4;
    }
    return cost;
  }

//reset val to true of false when the reset is submit
  var reset = function() {
    $('input[value="small"]').prop('checked',true);
    $('input[value="stars"]').prop('checked',false);
    $('input[value="flowers"]').prop('checked',false);
    $('input[value="mushrooms"]').prop('checked',false);


  //  var pizzaTopping = $("#pizzaTopping").val('');
    $("#show-price").text('')
    $("#reset").hide();
  };

  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    //create new vars
    var pizzaSize = getSize(); //functions will be ran there
    var pizzaTopping = getTopping();
    //pizza function returns object, made contructor
    var customPizza = new Pizza(pizzaTopping, pizzaSize);
    //call method of pizza object
    var pizzaCost = customPizza.pizzaCost();
    //display results
    $('#show-price').text("Your pizza cost is " + "$" + pizzaCost);
    $('#show-price').show();
    $("#reset").show();
    //found on stack overflow helps scrolls to the end of page to better show results
    $(window).scrollTop($(document).height());
  });

  $('#reset').hide();
  $("#reset").click(reset);

});
