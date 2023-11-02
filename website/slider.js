 const slider=[
    {
        img:"images/42e1272ed0854e8e.jpeg"
    },

    {
        img:"images/4cd6690ef44564f3.jpg"
    },
    {
        img:"images/352e6f0f8034fab5.jpg"
    },
    {
        img:"images/a1d93b6bc446790d.jpg"
    },
    {
        img:"images/dd9a50bac9e5634a.jpg"
    },
    {
        img:"images/555ec765f0f2aeca.jpeg"
    },
    {
        img:"images/ed12b7707a04473c.jpg"
    },
    {
        img:"images/4cd6690ef44564f3.jpg"
    }


]

console.log(slider);
let carosal_image_el=document.querySelector(".carosal_image")
let html='';
slider.forEach(element=>{
html=html+ `<img src="${element.img}" alt="">`
}
)
carosal_image_el.innerHTML=html;

let preelement=document.querySelector(".pre-bt");
let nxtelement=document.querySelector(".nxt-bt");
let start =0;
let end=-87.5;

preelement.addEventListener("click",handlePrevious);

function handlePrevious(){
    if(start<0)
    {
        start+=12.5;
        document.querySelector(".carosal_image").style.transform=`translateX(${start}%)`;

    }
}

nxtelement.addEventListener("click",handleNext);

function handleNext(){
    if(start>end)
    {
        start-=12.5;
        document.querySelector(".carosal_image").style.transform=`translateX(${start}%)`;

    }

}
function render()
{
    if(start>end)
    {
        handleNext();
    }
    else
    {
        start=12.5;
    }

}


setInterval(render,3000);
