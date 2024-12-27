images = ["./images/image1.webp", "./images/image2.jpeg", "./images/image3.jpg"];
slideshowContainer = document.getElementById("slideshow");
slideshowImage = document.getElementById("slideshow-image");
var interval;

slideshowContainer.addEventListener("mouseenter", () => {
    index = 1; 
    interval = setInterval(() => {
        slideshowImage.src = images[index];
        index = (index + 1) % images.length; 
    }, 1000); 
});

slideshowContainer.addEventListener("mouseleave", () => {
    clearInterval(interval);
    slideshowImage.src = images[0];
});
