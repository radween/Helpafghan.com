var images = ['image/image 1.jpg','image/image 2.jpg','image/image 3.jpg'];
var i =0;
function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
    i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);
}

window.onload = slideShow;
