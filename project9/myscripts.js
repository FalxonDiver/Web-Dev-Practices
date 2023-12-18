var imgArray = new Array(
    'Pet1.jpg',
    'KidsDog.jpg',
    'HuntingDogs.jpg',
    'FrisbeeDog.jpg'
);


var titleArray = new Array(
    'Lady With Dog',
    'Kids Dog',
    '2 Dogs',
    'Dog With Frisbee'
);
    
var imgPath = "imgs/fullsize/";

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle=titleArray[imgID];

          textDiv.innerHTML = textTitle;
}
    
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}