let drop = document.getElementsByClassName("collapse");
let i;
for(i=0; i < drop.length; i++){
    drop[i].addEventListener("click",function() {
        this.classList.toggle("active");
       let content = this.nextElementSibling;
        if(content.style.display ==="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }

    });
}

