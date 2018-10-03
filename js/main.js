$(document).ready(function() {
    function show() {
    $(".popup").addClass("show");
    $(".popup-bg").addClass("show");
  };
  var result = 0;
  var filter = []; // create array FILTER
  var condition = []; // create array CONDITION
  var classes = ['lime', 'pink', 'purple', 'blue', 'orange']; // create array with color class.
  $('li').click(function() {
      $(this).removeClass();
      $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
      let nodePur = document.querySelectorAll('.purple');
      let nodeLim = document.querySelectorAll('.lime');
      let nodePin = document.querySelectorAll('.pink');
      let nodeBlu = document.querySelectorAll('.blue');
      let nodeOra = document.querySelectorAll('.orange');

      if (nodePur.length == 3) {
      show()
    } else if (nodeLim.length == 3) {
      show()
    } else if (nodePin.length == 3) {
      show()
    } else if (nodeBlu.length == 3) {
      show()
    } else if (nodeOra.length == 3) {
      show()
    } else return;

    $(document).mouseup(function (e) {
        var container = $(".popup");
        if (container.has(e.target).length === 0){
            $(container).removeClass("show");
        }
    });
});
});








// alert("Ха-рёш");
