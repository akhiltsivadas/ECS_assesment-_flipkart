let beautySlider=document.querySelector(".productList");
let beautySlider1=electronicSlider.innerHTML;
let prevbtnBeauty=document.querySelector(".pre-bt-B");
let nextbtnBeauty=document.querySelector(".nxt-bt-B");

nextbtnBeauty.addEventListener("click",slideforwardBeauty);
let startB=0;
let endB=-12.5;

function slideforwardBeauty()
{
document.querySelector(".productListB").style.transform=`translateX(${-12.5}%)`;
document.querySelector(".nxt-bt-B").style.display=`none`;
document.querySelector(".pre-bt-B").style.display=`inline`;
}

prevbtnBeauty.addEventListener("click",slidebackwardBeauty);

function slidebackwardBeauty(){

    document.querySelector(".productListB").style.transform=`translateX(${0}%)`;
    document.querySelector(".pre-bt-B").style.display=`none`;
    document.querySelector(".nxt-bt-B").style.display=`inline`;
    
}