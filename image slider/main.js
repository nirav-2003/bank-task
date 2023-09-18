let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;
})

backbtn.addEventListener("cilck",()=>{
    scrollContainer.scrollLeft +=900;
})

nextbtn.addEventListener("cilck",()=>{
    scrollContainer.scrollLeft +=900;
})