//Buisness logic below
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault(); 
    const nameInput = $("input#name").val();
    //UI logic below
    $("#personName").text(nameInput);

    $("#letter").show();
  });
});