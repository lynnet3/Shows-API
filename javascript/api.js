$(document).ready(function () {
    var shows = ["24", "The Big Bang Theory", "Diners, Drive-Ins, and Dives", "Bones", "NCIS"]

    function renderButtons() {
        $("#buttonPlacement").empty();
        for (var i = 0; i < shows.length; i++) {

            var b = $("<button id = 'that'>");
            b.addClass("btn btn-success");
            // b.addid("that");
            b.attr("data-name", shows[i]);
            b.text(shows[i]);
            $("#buttonPlacement").append(b);
        }
    };
    function addbtn() {
        $("#add-show").on("click", function (event) {
            event.preventDefault();
            var showGif = $("#show-input").val().trim();
            if (showGif == "") {
                return false;
            }
            shows.push(showGif);
            renderButtons();

        })
    };
    function displayGifs() {
        var show = $(this).attr("data-name");
        console.log("Show: " + show);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=C1CkQBwcSSghFUE65oOAqwjHvaZnFNwj&limit=15";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (responce) {
                var shows2 = responce.data;
                $("#gifPlacement").empty();
                console.log(responce);
                for (var i = 0; i < shows2.length; i++) {
                    //div to hold the gifs
                    var showDiv = $("<div class ='gifD'>");
                    // get the rating
                    var rating = shows2[i].rating;
                    // maknig a place to put the rating on screen
                    var ratingP = $("<p>").text("Rating: " + rating);
                    //appending the rating
                    showDiv.append(ratingP);
                    // getting the gif
                    var gifURL = shows2[i].images.fixed_height.url;
                    // making a place to put the gif
                    var gif2 = $("<img>");
                    gif2.attr("src", gifURL);
                   // gif2.attr();
                    // appending the gif
                    showDiv.append(gif2);
                    // 
                    $("#gifPlacement").append(showDiv)
                }
            });
    }

    // $(document).on("click")


    // displayGifs();
    renderButtons();
    addbtn();
    $(document).on("click", "#that", displayGifs);


    //make this a function
    $(document).on("click", "img", function () {
        var state = $(this).attr("data-state");
        console.log("State: " + state)
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

}) 