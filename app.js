window.onload = function() {
    const element = document.querySelector('#up');
    const element2 = document.querySelector('#down');
    const elementmid = document.querySelector('#half');
    let images = ["♦", "♥", "♠", "♣"];
    let aleatory = Math.floor(Math.random() * 4);
    let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  
    element.innerText = images[aleatory];
    element.style.color = getTextColor(images[aleatory]);
    element2.innerText = images[aleatory];
    element2.style.color = getTextColor(images[aleatory]);
    elementmid.innerText = numbers[Math.floor(Math.random() * numbers.length)];
    elementmid.style.color = "black";
  };
  
function getTextColor(image) {
    if (image === "♥" || image === "♦") {
      return "red";
    } else {
      return "black";
    }
  }
  