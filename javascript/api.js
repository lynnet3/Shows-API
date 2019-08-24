$(document).ready(function () {
var shows = ["24", "The Big Bang Theory", "Diners, Drive-Ins, and Dives", "Bones", "NCIS"]
    function displayGifs() {
        var gif = $(this).attr("data-name");
        var queryURL = "https//:api.giphy.com/v1/gifs/search?q=" + gif + "api_key=C1CkQBwcSSghFUE65oOAqwjHvaZnFNwj&limit=15";
       
        $.ajax({
            url: queryURL,
            method: "GET"
        }).this(function (responce) {
            //div to hold the gifs
            var showDiv = $("<div class ='gif'>");
            // get the rating
            var rating = responce.data.rating ;
            // maknig a place to put the rating on screen
            var ratingP = $("<p>").text("Rating: " + rating);
            //appending the rating
            showDiv.append(ratingP);
            // getting the gif
            var gifURL = responce.data.images_origial_url;
           // making a place to put the gif
            var gif2 = $("<img>").attr("src", gifURL);
            // appending the gif
            showDiv.append(gif2);
            // 
        });

    }
    function renderButtons() {
        $("#buttonPlacement").empty();
        for (var i = 0; i < shows.length; i++){
            // making a button div for each entry
            var b = $("<button>");
            // adding the class
            b.addClass("show-btn");
            //giving an attribute
            b.attr("data-name", shows[i]);
            // adding the text
            b.text(shows[i]);
            //adding the new button
            $("#buttonPlacement").append(b);
        }
    }
    $(document).on("click")
    $("add-show").on("click", function (event) {
        event.preventDefault();
        var showGif = $("#show-input").val().trim();
        if (showGif==""){
            return false;
        }
        shows.push(showGif);
        renderButtons();
        
    });
    $(document).on("click", ".show-btn", displayGifs);
    renderButtons();
    var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});