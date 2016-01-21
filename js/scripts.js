var counter = function(loopEnd, multiple) {
  var output = [];
  for(var i = multiple; i <= loopEnd; i += multiple) {
      output.push(i);

  }

  return output;
};


$(function() {

  $("form#counter").submit(function(event) {

    var loopEnd = parseInt($("input#count-to").val());
    var multiple = parseInt($("input#multiple").val());
    debugger;
    var numbers = counter(loopEnd, multiple);

    $(".output").text(numbers);

    $("#result").show();
    event.preventDefault();

  });
});
