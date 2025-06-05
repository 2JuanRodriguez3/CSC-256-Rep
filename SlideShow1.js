// This will create an array to hold images
        let arrImages = [
            "./Pictures/Space1.jpg",
            "./Pictures/Space2.jpg",
            "./Pictures/Space 3.jpg",
            "./Pictures/Space 4.jpg",
        ]

        // The first image is under 0 index, this is where we first start.
        let iCurrentSlide = 0;

        // Create a function display on the image
        function displaySlideshowImage(iImgLocation){
            // You an set up a nickname to access the HTML image element that is going on.
            let imgElement = document.getElementById("imgSlide");

            // set the image source for the slideshowto the index of the image array that was passed into the function.
            imgElement.src = arrImages[iImgLocation];
        }

        // Function to navagate to previous slides.
        function previousSlide(){
            // Navigate to the previous by subtracting 1 from the counter.
            iCurrentSlide = iCurrentSlide - 1;

            if (iCurrentSlide < 0 ){
                // If you want the slideshow to stay on that first image: iCurrentSlide = 0
                
                // Set the index to the arrray of minus 1
                iCurrentSlide = arrImages.length - 1;
            }
            // call the function to swap out the image with what the index is
             displaySlideshowImage(iCurrentSlide);
        }

        function nextSlide(){
            // Navigating to the next slide by adding 1 from the counter to the current slide
            iCurrentSlide = iCurrentSlide + 1;

            // Check if the current slide is out of bounds
            if (iCurrentSlide == arrImages.length){
                // You could stay there - iCurrentSlide = arrImages.length - 1;
                // to loop around, change the index to 0
                iCurrentSlide = 0;
            }

            // call the function to swap out the image with what the index is
             displaySlideshowImage(iCurrentSlide);
        }
        // Display the image onto the webpage
        displaySlideshowImage(iCurrentSlide);

