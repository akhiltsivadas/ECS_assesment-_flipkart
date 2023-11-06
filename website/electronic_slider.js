let electronicSlider=document.querySelector(".productList");
let electronicSlider1=electronicSlider.innerHTML;
let prevbtn=document.querySelector(".pre-bt-e");
let nextbtn=document.querySelector(".nxt-bt-e");

nextbtn.addEventListener("click",slideforward);
let startE=0;
let endE=-12.5

function slideforward()
{
document.querySelector(".productList").style.transform=`translateX(${-12.5}%)`;
}

prevbtn.addEventListener("click",slidebackward);

function slidebackward(){

    document.querySelector(".productList").style.transform=`translateX(${0}%)`;
}





