let recentmenu=document.querySelector(".search_bar_prop");
let recentmenuExternal=document.querySelector(".list_top");
let stat=1;
recentmenu.addEventListener("click",showHide);
recentmenuExternal.addEventListener("click",hide);


function showHide(){
    if(stat===1)
    {
        document.querySelector(".recentMenu").style.display=`none`;
        stat=0;
    }
    else{
        document.querySelector(".recentMenu").style.display=`flex`;
        stat=1;
    }

}

function hide(){
        document.querySelector(".recentMenu").style.display=`none`;
        stat=0;
}








