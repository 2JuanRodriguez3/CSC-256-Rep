 // create an arrray to hold the movie list
        let arrMovies = []; 

        // Function to add a movie to the array
        function addMovie(){
            // create a shortcut or any nickname varible to the text input in the HTML
            let txtMovieName = document.getElementById("txtMovieName");
            // shortcut / nickname of the movie the user used
            let movieName = txtMovieName.value;

            // console log the movie name so that we could confirm that wer're correctly creating it
            // console.log("movieName=" + movieName);
            
            // Check to make sure that the user entered a movie name
            if (movieName != ""){
                // add the movieName to the array
                arrMovies.push(movieName);
                // remove the text from the textbox
                txtMovieName.value = "";
                // Call the function to the display the movies
                displayMovieList();
            }
        }

        // create a function to sort and display the movies in the page
        function displayMovieList(){
            // create a shortcut/nickname to the div that will show the movies the user has entered
            let divMovies = document.getElementById("divMovies");

            // sort the movie list before showing it
            arrMovies.sort();
            // this returns the array as a string with a line breaks in between each item
            divMovies.innerHTML = arrMovies.join("<BR>");
        }

        // create a function to remove all movie titles
        function resetList(){
            // empty the contents of the array
            arrMovies = [];
            // Updates the div to show nothing
            displayMovieList();
        }