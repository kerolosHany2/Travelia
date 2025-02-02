
let containerScroll = document.querySelector(".homeFirstPage nav");
containerScroll.scrollLeft = 0;

let alp = document.querySelector(".card .img i");
let alertBtn = document.querySelector(".alert-button")
        alertBtn.addEventListener('click', () => document.querySelector(".alert-cover").style.display = "none")
document.addEventListener("click",function(e){
  if(e.target.classList.contains("fa-heart"))
    {
        e.target.classList.toggle("toggleAlp")
        document.querySelector(".alert-cover").style.display = "flex";
    };
})


