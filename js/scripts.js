$(document).ready(function() {
  var getSize = function() {
    var size = $('input[name="pizza-size"]:checked').val();
    console.log(size)
    return size;
  }

  var getTopping = function() {
    var topping = $('input[name="toppings"]:checked').map(function(index, toppingElement) {
      return $(toppingElement).val();
    });
    topping = topping.toArray();
    console.log(topping)
    return (topping);
  }

  function Pizza(topping, size) {
    this.topping = topping;
    this.size = size;
  }

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

  var reset = function() {
    $('input[value="small"]').prop('checked', true);
    $('input[value="stars"]').prop('checked', false);
    $('input[value="flowers"]').prop('checked', false);
    $('input[value="mushrooms"]').prop('checked', false);
    $("#show-price").text('')
    $("#reset").hide();
  };

  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = getSize();
    var pizzaTopping = getTopping();
    var customPizza = new Pizza(pizzaTopping, pizzaSize);
    var pizzaCost = customPizza.pizzaCost();
    $('#show-price').text("Your pizza cost is " + "$" + pizzaCost);
    $('#show-price').show();
    $("#reset").show();
    //found this on stack overflow
    //it selects the window browser to automatically scroll down to the bottem of the browser after user submits order.
    $(window).scrollTop($(document).height());
  });

  $('#reset').hide();
  $("#reset").click(reset);
});
