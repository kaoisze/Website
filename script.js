var element = document.body;

function myFunction() {
   element.classList.toggle("dark-mode");
   
   
   if (element.classList.contains("dark-mode")) {
     localStorage.setItem("Mode", "Dark")
   }
   else {
     localStorage.setItem("Mode", "Chiffon")
   }
}

function checkMode() {
  var currentmode = localStorage.getItem("Mode");
  console.log(currentmode)
  
  if (currentmode === "Dark") {
    
    element.classList.add("dark-mode");
  }
}

checkMode();


var element = document.body;

function kiwi() {
   element.classList.toggle("kiwi-mode");
   
   
   if (element.classList.contains("kiwi-mode")) {
     localStorage.setItem("Mode", "Kiwi")
   }
   else {
     localStorage.setItem("Mode", "Chiffon")
   }
}

function checkkiwi() {
  var currentmode = localStorage.getItem("Mode");
  console.log(currentmode)
  
  if (currentmode === "Kiwi") {
    
    element.classList.add("kiwi-mode");
  }
}

checkkiwi();



var element = document.body;

function orange() {
   element.classList.toggle("orange-mode");
   
   
   if (element.classList.contains("orange-mode")) {
     localStorage.setItem("Mode", "Orange")
   }
   else {
     localStorage.setItem("Mode", "Chiffon")
   }
}

function checkorange() {
  var currentmode = localStorage.getItem("Mode");
  console.log(currentmode)
  
  if (currentmode === "Orange") {
    
    element.classList.add("orange-mode");
  }
}

checkorange();



var element = document.body;

function white() {
   element.classList.toggle("white-mode");
   
   
   if (element.classList.contains("white-mode")) {
     localStorage.setItem("Mode", "White")
   }
   else {
     localStorage.setItem("Mode", "Chiffon")
   }
}

function checkwhite() {
  var currentmode = localStorage.getItem("Mode");
  console.log(currentmode)
  
  if (currentmode === "White") {
    
    element.classList.add("white-mode");
  }
}

checkwhite();


 function a() {
  var text = document.getElementById("rpg");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function b() {
  var text = document.getElementById("sandbox");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function c() {
  var text = document.getElementById("strategy");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function d() {
  var text = document.getElementById("puzzle");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function e() {
  var text = document.getElementById("fps");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
