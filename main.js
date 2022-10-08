Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
cameraContainer = document.getElementById("cameraContainer");
Webcam.attach('#cameraContainer');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById("imageContainer").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version:', ml5.version);