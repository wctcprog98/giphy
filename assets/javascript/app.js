var sportsTeams = ["basketball", "football", "tennis", "soccer", "rugby", "polo", "swimming", "poker", "baseball", "volleyball", "racing"];

function makeButtons() {
  $("#buttons").empty();
  for (var i = 0; i < sportsTeams.length; i++) {
    var sportsButton = $("<button>");
    sportsButton.addClass("sports", sportsTeams[i]);
    sportsButton.attr("rating");
    sportsButton.attr("data-name", sportsTeams[i]);
    sportsButton.text(sportsTeams[i]);
    $("#buttons").append(sportsButton);


  }
  //function to add a button

  
}
makeButtons();

$(".sports").on("click", function () {
  event.preventDefault();
  var sports = $(this).attr("data-name");
  // var sports = $(".sports").val();
  console.log(sports);
  

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {
    
      for (var i = 0; i < sportsTeams.length; i++) {
   
        console.log(response);

        // var sports = $(this).attr("rating"); 
        //url 
      
        // var x = $(this).data("sports"); 
        //create divs
        var sportsDiv = $("<div>");
        //create image
        var sportsImage = $("<img>");
        sportsImage.addClass("image");
        //grab image from api

        sportsImage.attr("src", response.data[i].images.fixed_height.url);
        //append p to created div
        //create rating paragraph 
        var p = $("<p>").text("Rating :" + response.data[i].rating);
        sportsDiv.append(p);
        //append image to created div
        sportsDiv.append(sportsImage);
        //send images and p to html
        $("#gifsdiv").prepend(sportsDiv);

      }

    });
  
});



$("#add-sport").on("click", function () {
  event.preventDefault();
  var input = $("#sports-input").val().trim();
  var newButton = $("<button>");
    
  newButton.addClass("userSport", input);
  newButton.attr("rating");
  newButton.attr("data-name", input);
  newButton.text(input);
  $("#buttons").append(newButton);
  //   var input = $("#sports-input").val().trim();

});

$(".userSport").on("click", function (){
  event.preventDefault();
  var input = $(this).attr("data-name");
  console.log(input);

  var queryURL2 = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK&limit=10";
  
  $.ajax({
    url: queryURL2,
    method: "GET"

  }).then(function (respond) {

    console.log(respond); 
// function to add a button
 
 
    var newButtonDiv = $("<div>");
    //create image
    var inputImage = $("<img>");
    inputImage.addClass("image");
    // <img class="gif" src="http://rubentd.com/img/banana.png"></img>
    //grab image from api

    //append p to created div
     //create rating paragraph 
    var p2 = $("<p>").text("Rating :" + respond.data.rating);
    inputImage.attr("src", respond.data.images.fixed_height.url);
    newButtonDiv.append(p2);
    //append image to created div
    newButtonDiv.append(inputImage);
    //send images and p to html
    $("#gifsdiv").prepend(newButtonDiv);
   
  });
});
  









// var sports = $(this).attr("rating");
// iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK
// http://api.giphy.com/v1/gifs/search?q=sports%20teams&api_key=iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK&limit=10