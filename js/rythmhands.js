/*
When the button is clicked, it selects two random images from the array and displays them on the page.
*/

// Array of image paths. Replace these with your own paths.
var images = ['img/img0.png', 'img/img1.png', 'img/img2.png', 'img/img3.png', 'img/img4.png'];

document.getElementById('myButton').addEventListener('click', function() {

    // Pick two random images.
    var img1 = images[Math.floor(Math.random() * images.length)];
    var img2 = images[Math.floor(Math.random() * images.length)];

    document.getElementById('imageElement1').src = img1;
    document.getElementById('imageElement2').src = img2;
});
