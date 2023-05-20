let faq = document.querySelectorAll(".faq")



faq.forEach((x)=>{
    x.addEventListener("click", (e)=>{
        x.classList.toggle("open")
console.log(x)
        if(x.classList.contains("open")){
            x.children[0].children[1].children[0].innerText = "do_not_disturb_on"
            
        } else{
            x.children[0].children[1].children[0].innerText = "add_circle"
        }
    })
})


let mybutton = document.getElementById("scroll");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function backTotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
