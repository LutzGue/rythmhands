/*
When the button is clicked, it selects two random images from the array and displays them on the page.
*/

// Array of image paths. Replace these with your own paths.
var images = ['img/note0.png', 'img/note1.png', 'img/note2.png', 'img/note3.png', 'img/note4.png', 'img/note5.png', 'img/note6.png'];

document.getElementById('myButton1').addEventListener('click', function() {

    // Pick two random images.
    var img1 = images[Math.floor(Math.random() * images.length)];
    var img2 = images[Math.floor(Math.random() * images.length)];

    document.getElementById('imageElement1').src = img1;
    document.getElementById('imageElement2').src = img2;

    document.getElementById('imageElement3').src = 'img/notes2.svg';
});

document.getElementById('myButton2').addEventListener('click', function() {
    // Get the SVG element
    var svgElement = document.getElementById("svg_60");
    //svgElement.style.display = "none";
    svgElement.setAttribute('transform','translate(210,120) rotate(0)');
});

document.getElementById('myButton3').addEventListener('click', function() {
    // Get the SVG element
    var svgElement = document.getElementById("svg_60");
    svgElement.style.display = "none";
});