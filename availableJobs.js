const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");
const totalElement = document.querySelector("main #total");

 
const allCards = document.querySelectorAll("#allCards > div");
const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectedButtons = document.querySelectorAll(".rejected-btn");
const totalJobs = allCards.length;

allBtn.addEventListener("click", function() {
    totalElement.innerHTML = `${totalJobs} <span>jobs</span>`;
});

interviewBtn.addEventListener("click",function()  {
    let interviewCount = document.querySelectorAll(".interview-btn.active").length;
    totalElement.innerHTML = `${interviewCount} out of ${totalJobs} <span>jobs</span>`;
});

 
rejectedBtn.addEventListener("click", function() {
    let rejectedCount = document.querySelectorAll(".rejected-btn.active").length;
    totalElement.innerHTML = `${rejectedCount} out of ${totalJobs} <span>jobs</span>`;
});
 
for (let i = 0; i < interviewButtons.length; i++) { 
    interviewButtons[i].addEventListener("click", function() {
         interviewButtons[i].classList.toggle("active"); }); 
        }
for (let i = 0; i < rejectedButtons.length; i++) { 
    rejectedButtons[i].addEventListener("click", function() {
         rejectedButtons[i].classList.toggle("active"); }); 
        }

 
