const btnEle = document.querySelector(".btn");
btnEle.addEventListener("mouseover",(event)=>{
    const x = event.pageX-btnEle.offsetLeft;
    const y = event.pageY-btnEle.offsetTop;
    btnEle.style.setProperty("--xPos", x + "px");
    btnEle.style.setProperty("--yPos", y + "px");
})
