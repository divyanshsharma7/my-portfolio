// Typing Effect
const typedText = [
  "a Frontend Developer",
  "an AI/ML Enthusiast",
  "a Content Writer",
  "a Designer"
];
let index = 0;
let charIndex = 0;
const typedElement = document.getElementById("typed");

function typeEffect() {
  if (charIndex < typedText[index].length) {
    typedElement.textContent += typedText[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    typedElement.textContent = typedText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % typedText.length;
    setTimeout(typeEffect, 200);
  }
}
typeEffect();

// Scroll to sections
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Contact form
function sendMessage(event){
  event.preventDefault();
  alert("Your message has been sent!");
}


// EmailJS Code
// (function() {
//   emailjs.init("pj3y0wiF_Oj2O7tdo"); // Replace with your EmailJS public key
// })();

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   emailjs.send("service_clk13jh", "template_nt3xupw", {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value
//   }).then(() => {
//     document.getElementById("status-msg").innerText = "Message Sent Successfully ✔";
//     document.getElementById("status-msg").style.color = "lightgreen";
//   }, () => {
//     document.getElementById("status-msg").innerText = "Failed to Send Message ❌";
//     document.getElementById("status-msg").style.color = "red";
//   });
// });
  

// Attempt 2



// (function() {
//   emailjs.init("pj3y0wiF_Oj2O7tdo"); 
// })();

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   console.log("Sending...");  // DEBUG 1

//   emailjs.send("service_clk13jh", "template_nt3xupw", {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value
//   })
//   .then((response) => {
//     console.log("SUCCESS:", response); // DEBUG 2
//     document.getElementById("status-msg").innerText = "Message Sent Successfully ✔";
//     document.getElementById("status-msg").style.color = "lightgreen";
//   })
//   .catch((error) => {
//     console.error("ERROR:", error); // DEBUG 3
//     document.getElementById("status-msg").innerText = "Failed to Send Message ❌";
//     document.getElementById("status-msg").style.color = "red";
//   });
// });
