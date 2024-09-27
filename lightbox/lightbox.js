


function includePopupHTML() {
    let html =
      '<div id="vis-popup"> <span id="close"onclick = "closePopUp()" ><img id="npop" src="lightbox/images/close.png" alt="" /> </span> <img id="leftarrow" src="lightbox/images/left-arrow.png" alt="" /> <img id="rightarrow" src="lightbox/images/right-arrow.png" alt="" /> <img style="width: 800px;" id="mainpopimage" src="images/A1.avif" alt="" /> </div>';
  
    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
  
    // Now that the HTML is inserted, add event listeners for the arrows
    document.getElementById("rightarrow").addEventListener("click", function () {
      nextimg();
    });
  
    document.getElementById("leftarrow").addEventListener("click", function () {
      previmg();
    });
  
    checkArrow(); // Run checkArrow after the popup is included in the DOM
  }
  
  let img;
  let current;
  
  // function to init plugin
  function imagePopupInit(target) {
    // select all images with class target
    img = document.getElementsByClassName(target);
  
    // add event listener on all selected images
    console.log(img);
  
    for (var i = 0; i < img.length; i++) {
      // add pointer
      img[i].style.cursor = "pointer";
  
      // add event listener
      img[i].addEventListener("click", function () {
        document.getElementById("mainpopimage").src = this.src;
        document.getElementById("vis-popup").style.display = "block";
        checkArrow();
      });
    }
  
    includePopupHTML();
  }
  
  // close button
  function closePopUp() {
    document.getElementById("mainpopimage").src = "";
    document.getElementById("vis-popup").style.display = "none";
  }
  
  // next image
  function nextimg() {
    getCurrentImage();
    if (current < img.length - 1) {
      current++;
      document.getElementById("mainpopimage").src = img[current].src;
    }
    checkArrow();
  }
  
  // previous image
  function previmg() {
    getCurrentImage();
    if (current > 0) {
      current--;
      document.getElementById("mainpopimage").src = img[current].src;
    }
    checkArrow();
  }
  
  // get the current image index
  function getCurrentImage() {
    for (var i = 0; i < img.length; i++) {
      if (img[i].src == document.getElementById("mainpopimage").src) {
        current = i;
      }
    }
  }
  
  // check if the left and right arrows should be visible
  function checkArrow() {
    getCurrentImage();
    if (current == 0) {
      document.getElementById("leftarrow").style.display = "none";
      document.getElementById("rightarrow").style.display = "block";
    } else if (current == img.length - 1) {
      document.getElementById("rightarrow").style.display = "none";
      document.getElementById("leftarrow").style.display = "block";
    } else {
      document.getElementById("leftarrow").style.display = "block";
      document.getElementById("rightarrow").style.display = "block";
    }
  }
  