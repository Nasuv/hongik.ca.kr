window.onload = function() {
    var images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    var currentIndex = 0;
    var bannerImg = document.getElementById("bannerImg");

    function changeBanner() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        bannerImg.src = "images/" + images[currentIndex];
    }

    setInterval(changeBanner, 3000);
};