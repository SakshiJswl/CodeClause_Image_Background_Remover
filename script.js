// home image hover effect

function hover(img) {
   
    img.src = "images/no-background.png"

}

function hoverOut(img){
    
    img.src = "images/home-image.jpg"

}

// Changing the background of the image

let imageURL;
function handleUpload() {
    
    const fileInput = document.getElementById('filepicker');
    const image = fileInput.files[0];
    
    const formData = new FormData();
    formData.append("image_file" , image);
    formData.append('size' , 'auto');
    
    const apiKey = "QRLsHRS2CEGzD4L7ipnbtWTW";
    fetch('https://api.remove.bg/v1.0/removebg', {

       method: 'POST',
       headers: {
          'X-Api-Key': apiKey,
       },
       body: formData

    })

    .then(function(response) {
        return response.blob();
    })

    .then(function(blob) {
        console.log(blob);
        
        // this creates a url for the blob
        const url = URL.createObjectURL(blob);
        imageURL = url; 
        
        // this creates an image tag
        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(img);
    })
    .catch();

    console.log("clicked");

}

function downloadFile() {

    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;

    anchorElement.download = 'no-background.png';
    document.body.appendChild(anchorElement);

    anchorElement.click();
    document.body.removeChild('a');

}