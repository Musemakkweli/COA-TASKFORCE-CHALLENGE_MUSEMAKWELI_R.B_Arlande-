document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the modal element that will display the full-size images
    var modal = document.getElementById("myModal");

    // Select all images within gallery items and prepare to insert them into the modal
    var images = document.querySelectorAll('.gallery-item img');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Add a click event listener to each image to display it in the modal along with its caption
    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Get the element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Add a click event listener to the close button to hide the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of the modal image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Close the modal if the user presses the ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
