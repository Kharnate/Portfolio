function handleCollapsibleClickEvent(){
    var collapsible = document.getElementsByClassName("collapsible");

    for(let i = 0; i < collapsible.length; i++){
        collapsible[i].addEventListener("click", function(){
            this.classList.toggle("active");
            console.log("clicked")
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            }else{
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

handleCollapsibleClickEvent();