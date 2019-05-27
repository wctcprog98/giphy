var sportsTeams = ["basketball", "football", "tennis", "soccer", "rugby", "polo", "swimming", "poker", "baseball", "volleyball", "racing"];

function makeButtons()
{
    $("#buttons").empty(); 


    for (var i = 0; i < sportsTeams.length; i++)
    {
        
    
        var sportsButton = $("<button>");  
        sportsButton.addClass("sports", sportsTeams[i]); 
        sportsButton.attr("rating");
        sportsButton.attr("data-name", sportsTeams[i]);
        sportsButton.text(sportsTeams[i]); 
        $("#buttons").append(sportsButton); 
      

        }


}
makeButtons();


$(".sports").on("click", function () {
    event.preventDefault();
    var sports = $(this).attr("data-name");
    // var sports = $(".sports").val();
    console.log(sports); 
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=sports&api_key=iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK&limit=10";



    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response)
    
    
    {

        
        for (var i = 0; i < sportsTeams.length; i++) {
                    
            console.log(response);

            // var sports = $(this).attr("rating"); 
            //url 
            
            // var x = $(this).data("sports"); 
            //create divs
            var sportsDiv = $("<div>");
            //create rating paragraph 
            var p = $("p").text("Rating :" + response.data[i].rating);
            //create image
            var sportsImage = $("<img>");
            sportsImage.addClass("image"); 
            //grab image from api

            sportsImage.attr("src", response.data[i].images.fixed_height.url);
            //append p to created div
            sportsDiv.append(p);
            //append image to created div
            sportsDiv.append(sportsImage);
            //send images and p to html
            $("#gifsdiv").prepend(sportsDiv);
            
        }
        $(".img").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
    });
});
    
//function to add a button
function addButton()
{
var addTeam = $()


    makeButtons(); 
}

// var sports = $(this).attr("rating");




// iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK
// http://api.giphy.com/v1/gifs/search?q=sports%20teams&api_key=iUtiXYQ7vUQFZHEn1OCJ7NJayuaxQ7GK&limit=10