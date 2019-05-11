


//setup ajax
var sportsTeams = ["Milwaukee Bucks", "Wisconsin Badgers", "Milwaukee Brewers", "Green Bay Packers", "Cincinnati Reds", "New York Yankees", "Miami Heat", "Los Angeles Lakers", "Ohio State Buckeyes", "Kentucky Wildcats", "UWM Panthers", "Clemson Tigers"];

function makeButtons()
{
    $("#buttons").empty(); 


    for (var i = 0; i < sportsTeams.length; i++)
    {
        
    
        var sportsButton = $("<button>"); 
        sportsButton.addClass("sports"); 
        sportsButton.attr("rating");
        sportsButton.text(sportsTeams[i]); 
        $("#buttons").append(sportsButton); 

        }


}
$("#add-sport").on("click", function (event) {
    var add = $("#sports-input").val().trim(); 
    sportsTeams.push(add);
    event.preventDefault();
    
    makeButtons();
});
//call function
makeButtons(); 