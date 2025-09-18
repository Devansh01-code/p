const skill = document.querySelectorAll(".descard");
const projcard = document.querySelectorAll(".pro");


skill.forEach(item => {
    item.addEventListener("click", () => {
        let clickedskill = item.querySelector(".skillcontainer");

        // Check if clicked one is already open
        let isOpen = clickedskill.style.display === "flex";

        // Hide all skill containers
        document.querySelectorAll(".skillcontainer").forEach(container => {
            container.style.display = "none";
        });
        
        // Show the clicked one only if it was closed
        if (!isOpen) {
            clickedskill.style.display = "flex";
        }
    });
});

const hamburger = document.getElementById("ham");
const navbar = document.querySelector(".right");
const navlinks = document.querySelectorAll(".right ul li a");

let isOpen = false;

hamburger.addEventListener("click", () => {
  if (!isOpen) {
    navbar.style.right = "0px"; 
    isOpen = true;
    hamburger.src = "images/close.svg"
} else {
    navbar.style.right = "-250px"; 
    isOpen = false;
    hamburger.src = "images/hamburger.svg"
}
});
navlinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.style.right = "-250px";
        isOpen = false;
        hamburger.src = "images/hamburger.svg"
    });
  });

// const observer = new IntersectionObserver((entries, obs)=>{

//     entries.forEach((entry, index)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("show")

//             entry.target.style.transitionDelay = `${index *0.3}s`;
//         }
//         else{
//             entry.target.classList.remove("show")
//             entry.target.style.transitionDelay = "0s";
//         }
//     });
// }, {
//     threshold: 0.2   // 20% of card visible → trigger animation
//   });

//   projcard.forEach(pro=> observer.observe(pro));