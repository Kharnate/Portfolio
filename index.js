function collapsibleClickEventHandler(){
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

function formInputValueHandler(){
    var formInput = document.getElementsByClassName("form-input");

    for(let i=0; i<formInput.length; i++){
        formInput[i].onchange = function(e){
            if(formInput[i].value !== "" || formInput[i].value.length !== 0){
                formInput[i].style.borderBottom = "1px solid white";
            }else{
                formInput[i].style.borderBottom= "1px solid rgba(255, 255, 255, 0.5)";
            }
        }
    }
}

collapsibleClickEventHandler();
formInputValueHandler();
