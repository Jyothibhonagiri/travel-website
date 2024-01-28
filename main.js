const starcontent = document.getElementById("threestar-container")
const randam = document.getElementById("rand-content")
starcontent.style.display="none";
function star(){
    starcontent.style.display="grid";
    randam.style.display="none";
}

function randamfun(){
    randam.style.display="grid"
    starcontent.style.display="none";
}

